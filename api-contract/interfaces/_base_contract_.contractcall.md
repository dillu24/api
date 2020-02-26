[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Contract"](../modules/_base_contract_.md) › [ContractCall](_base_contract_.contractcall.md)

# Interface: ContractCall <**ApiType, CallType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

▪ **CallType**: *ContractCallTypes*

## Hierarchy

* **ContractCall**

## Index

### Methods

* [send](_base_contract_.contractcall.md#send)

## Methods

###  send

▸ **send**(`account`: IKeyringPair | string | AccountId | Address): *ContractCallResultSubscription‹ApiType, CallType›*

*Defined in [base/Contract.ts:26](https://github.com/polkadot-js/api/blob/1a50298ff/packages/api-contract/src/base/Contract.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |

**Returns:** *ContractCallResultSubscription‹ApiType, CallType›*