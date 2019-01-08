

# Hierarchy

↳  [Bytes](_bytes_.bytes.md)

**↳ HeadData**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`number`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HeadData**(value: *[AnyU8a](../modules/_types_.md#anyu8a)*): [HeadData](_attestedcandidate_.headdata.md)

*Inherited from [Bytes](_bytes_.bytes.md).[constructor](_bytes_.bytes.md#constructor)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [Bytes.ts:18](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/Bytes.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** [HeadData](_attestedcandidate_.headdata.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Bytes](_bytes_.bytes.md).[encodedLength](_bytes_.bytes.md#encodedlength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [Bytes.ts:64](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/Bytes.ts#L64)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides Uint8Array.length*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/codec/U8a.ts#L43)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="subarray"></a>

##  subarray

▸ **subarray**(begin: *`number`*, end?: *`undefined` | `number`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides Uint8Array.subarray*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/codec/U8a.ts#L53)*

*__description__*: Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| begin | `number` |  The position to start at |
| `Optional` end | `undefined` | `number` |  The position to end at |

**Returns:** `Uint8Array`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/codec/U8a.ts#L60)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:67](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/codec/U8a.ts#L67)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides Uint8Array.toString*

*Defined in [codec/U8a.ts:74](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/codec/U8a.ts#L74)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Bytes](_bytes_.bytes.md).[toU8a](_bytes_.bytes.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Bytes.ts:72](https://github.com/polkadot-js/api/blob/783db16/packages/types/src/Bytes.ts#L72)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
