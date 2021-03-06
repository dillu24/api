// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { DerivedBalancesAccount } from '../types';

import { combineLatest, Observable, of } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

export function votingBalances (api: ApiInterfaceRx): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DerivedBalancesAccount[]> {
  return memo((addresses?: (AccountId | AccountIndex | Address | string)[]): Observable<DerivedBalancesAccount[]> =>
    !addresses || !addresses.length
      ? of([] as DerivedBalancesAccount[])
      : combineLatest(
        addresses.map((accountId): Observable<DerivedBalancesAccount> =>
          api.derive.balances.account(accountId))
      )
  );
}
