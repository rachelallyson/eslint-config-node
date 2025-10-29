# Repository Rules for AI Assistants

## Always Read First

Before generating code or making changes, read these files in order:

1. **docs/llm-context.md** - Quick reference map
2. **docs/index.md** - Documentation entry point
3. **docs/reference/config.md** - All configuration options
4. **index.js** - Source of truth for public API

## Public API Surface

The public API is defined in `index.js`. Always prefer public exports:

- ✅ `import { baseConfig } from "@rachelallyson/eslint-config-node"`
- ✅ `import config from "@rachelallyson/eslint-config-node"`
- ✅ Deep imports: `import { baseConfig } from "@rachelallyson/eslint-config-node/base"`
- ❌ **Never** deep import from `configs/` directly (not part of public API)

## Configuration Rules

### Never Invent Configuration Keys

Only use configuration options documented in:

- `docs/reference/config.md`
- Package `exports` in `package.json`

If a configuration option doesn't exist, it cannot be used. Document new configs first.

### ESLint Flat Config Format

All configs return arrays of configuration objects:

```javascript
// ✅ Correct - array spread
export default [...baseConfig, { rules: {...} }];

// ❌ Wrong - treating as object
export default { ...baseConfig, rules: {...} };
```

## TypeScript Integration

### tsconfig.json Discovery

The `tsConfig` uses `projectService: true`, which:

- Automatically finds the consuming project's `tsconfig.json`
- Never reads from the package directory
- Always respects project root configuration

**Invariant**: TypeScript config always reads from consuming project root.

## Dependency Rules

### Peer Dependencies

- `eslint >= 9` - Always required
- `typescript >= 4.8.4 < 6.0.0` - Optional, only if using `tsConfig`
- `prettier` - Optional, only if using `prettierConfig`

Never assume these are installed unless the user explicitly uses the related config.

## Code Style

### Config Composition

Always spread configs first, then add overrides:

```javascript
// ✅ Good
export default [
  ...baseConfig,
  { rules: { "no-console": "error" } },
];

// ❌ Bad - loses baseConfig rules
export default [
  { rules: { "no-console": "error" } },
];
```

### File Structure

- Config files in `configs/` directory
- Each config exports a named constant (e.g., `baseConfig`)
- Main `index.js` re-exports all configs
- No build step - files consumed directly

## Testing Approach

When uncertain about configuration behavior:

1. Propose minimal test case first
2. Document expected behavior
3. Implement fix
4. Verify with `npx eslint --print-config`

## Database/Prisma Rules

**Not applicable** - This package has no database dependencies.

## Environment Variables

**None** - This package reads no environment variables. No `.env` files needed.

## When Editing Configs

If modifying existing config files (`configs/*.js`):

1. Maintain backward compatibility (don't change rule defaults without good reason)
2. Document changes in behavior
3. Update `docs/reference/config.md` if new options added
4. Consider peer dependency impacts

## Don'ts

- ❌ Don't deep import from `configs/` - use named exports or deep imports
- ❌ Don't assume TypeScript is installed
- ❌ Don't use CommonJS `require()` - ES modules only
- ❌ Don't invent new config options - document first
- ❌ Don't modify `tsconfigRootDir` in `tsConfig` - let `projectService` handle it

## Package Identity

- **Name**: `@rachelallyson/eslint-config-node`
- **Type**: ESLint configuration (ES modules)
- **No build step** - pure JavaScript files
- **Main entry**: `index.js`

When suggesting imports, always use the correct package name.
