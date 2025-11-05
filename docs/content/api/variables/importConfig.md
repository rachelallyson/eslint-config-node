[**@rachelallyson/eslint-config-node v1.0.0**](../README.md)

***

[@rachelallyson/eslint-config-node](../globals.md) / importConfig

# Variable: importConfig

> `const` **importConfig**: [`ESLintFlatConfig`](../type-aliases/ESLintFlatConfig.md)

Defined in: index.d.ts:65

Import sorting and hygiene rules (unused imports, order).

## Remarks

Combines `simple-import-sort`, `eslint-plugin-import`, and `eslint-plugin-unused-imports`.
Encourages consistent grouping and removes unused imports/variables (with `_` ignore prefix).

## Example

```js
export default [
  ...importConfig,
  {
    rules: {
      'simple-import-sort/imports': ['error', { groups: [["^node:"], ["^@?\\w"], ["^@/"], ["^\\."]] }],
    },
  },
];
```

## See

/recipes/examples#import-sorting-customization
