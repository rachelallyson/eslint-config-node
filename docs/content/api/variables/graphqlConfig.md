[**@rachelallyson/eslint-config-node v1.0.0**](../README.md)

***

[@rachelallyson/eslint-config-node](../globals.md) / graphqlConfig

# Variable: graphqlConfig

> `const` **graphqlConfig**: [`ESLintFlatConfig`](../type-aliases/ESLintFlatConfig.md)

Defined in: index.d.ts:108

GraphQL schema and operations lint rules.

## Remarks

Requires a resolvable schema. Default assumes `http://localhost:4000/graphql`.
Always override to match your project (local file or remote URL).

## Example

```js
export default [
  ...graphqlConfig,
  {
    files: ['*.graphql'],
    languageOptions: { parserOptions: { schema: './schema.graphql', operations: '*.graphql' } },
  },
];
```

## See

/guides/error-handling#graphql-schema-not-found
