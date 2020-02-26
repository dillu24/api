[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/query"](_staking_query_.md)

# External module: "staking/query"

## Index

### Functions

* [query](_staking_query_.md#query)

## Functions

###  query

▸ **query**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/query.ts:79](https://github.com/polkadot-js/api/blob/1a50298ff/packages/api-derive/src/staking/query.ts#L79)*

**`description`** From a stash, retrieve the controllerId and all relevant details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹DerivedStakingQuery›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |