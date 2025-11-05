[**@rachelallyson/eslint-config-node v1.0.0**](../README.md)

***

[@rachelallyson/eslint-config-node](../globals.md) / securityConfig

# Variable: securityConfig

> `const` **securityConfig**: [`ESLintFlatConfig`](../type-aliases/ESLintFlatConfig.md)

Defined in: index.d.ts:85

Security-focused lint rules for Node.js.

## Remarks

Leverages `eslint-plugin-n` and `eslint-plugin-security`. The
`security/detect-object-injection` rule is disabled by default but can be enabled per project.

## Example

```js
export default [
  ...securityConfig,
  { rules: { 'security/detect-object-injection': 'warn' } },
];
```

## See

/recipes/examples#security-rules-customization
