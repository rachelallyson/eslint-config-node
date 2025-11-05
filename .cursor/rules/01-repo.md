## Cursor Guardrails for this Repo

### Always read first

- `docs/content/llm-context.mdx`
- `docs/content/index.mdx`
- `index.js`

### Principles

- Prefer public exports documented in `index.js` and MDX. Do not deep import from `configs/`.
- Never invent environment variables or configuration keys.
- When uncertain, propose tests first before changes.
- If touching any database-like code in future, follow invariants in `docs/content/concepts.mdx`.

### Public surface

Named exports: `baseConfig`, `importConfig`, `securityConfig`, `graphqlConfig`, `prettierConfig`, `tsConfig`.
Default export: array composing the above in documented order.

### Invariants

- All configs are arrays (ESLint flat config).
- Spread configs when composing; later entries override earlier ones.
- Timestamps (if ever introduced) must be ISO 8601 UTC.

### Do not

- Do not add undocumented env vars or config keys.
- Do not use CommonJS `require()`.
- Do not modify config objects in-place; compose via spreading.

### Documentation workflow

- Human-authored docs live in `docs/content/`.
- API docs are generated into `docs/content/api/` using TypeDoc.
- Preview with `npm run docs:dev`, build with `npm run docs:build`.
