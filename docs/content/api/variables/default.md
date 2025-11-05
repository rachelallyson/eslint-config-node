[**@rachelallyson/eslint-config-node v1.0.0**](../README.md)

***

[@rachelallyson/eslint-config-node](../globals.md) / \_default

# Variable: \_default

> `const` **\_default**: [`ESLintFlatConfigItem`](../interfaces/ESLintFlatConfigItem.md)[]

Defined in: index.d.ts:152

Default export: all configs composed in recommended order.

Order: base → import → security → graphql → prettier → ts

## Remarks

Later entries override earlier ones. Spread additional objects after this default to customize per project.

## Example

```js
import config from '@rachelallyson/eslint-config-node';
export default [
  ...config,
  { rules: { 'no-console': 'error' } },
];
```
