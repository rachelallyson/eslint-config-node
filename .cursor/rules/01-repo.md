# Repository Rules

## Always Read These Files First

Before generating code, always read:

- `docs/content/llm-context.mdx` - AI reference map
- `docs/content/index.mdx` - Main documentation entry point
- `docs/content/reference/config.mdx` - All configuration options
- `index.js` - Public exports (main entry point)

## Package Architecture

- **ESLint 9+ flat config format only** - No legacy `.eslintrc` support
- **Modular design** - Each config is a separate export that can be imported individually
- **Node.js focused** - Not for browser/React projects
- **ES modules only** - No CommonJS support

## Public API Surface

**Named Exports** (from `index.js`):

- `baseConfig` - Core ESLint rules, sorting, formatting
- `importConfig` - Import sorting and unused import detection  
- `securityConfig` - Security and Node.js best practices
- `graphqlConfig` - GraphQL linting
- `prettierConfig` - Prettier integration
- `tsConfig` - TypeScript linting

**Default Export**: Array combining all configs in order

**Deep Imports**: `/base`, `/import`, `/security`, `/graphql`, `/prettier`, `/ts`

## Code Generation Rules

### Always Use Public Exports

```javascript
// ✅ Correct - use public exports
import { baseConfig } from "@rachelallyson/eslint-config-node";

// ❌ Wrong - deep import from configs/
import { baseConfig } from "@rachelallyson/eslint-config-node/configs/base.js";
```

### Configuration Patterns

```javascript
// ✅ Correct - spread configs and override
export default [
  ...baseConfig,
  {
    rules: {
      "no-console": "error", // Override specific rule
    },
  },
];

// ❌ Wrong - don't modify configs directly
const modified = baseConfig.map(config => ({
  ...config,
  rules: { ...config.rules, "no-console": "error" }
}));
```

### TypeScript Integration

- `tsConfig` uses `projectService: true` - automatically finds project's `tsconfig.json`
- TypeScript is optional peer dependency - only required if using `tsConfig`
- Don't assume TypeScript is available

### GraphQL Configuration

- `graphqlConfig` requires schema override (defaults to localhost:4000)
- Always show users how to override the schema URL

## Documentation Rules

### Source of Truth

- **Documentation content**: `docs/content/` directory (committed to git)
- **Documentation site**: `docs/` directory (Nextra infrastructure)
- **API docs**: Auto-generated from TypeScript source (if applicable)

### File Types

- **Human-written docs**: Use `.mdx` files in `docs/content/`
- **API docs**: Auto-generated `.md` files in `docs/content/api/` (committed)
- **Nextra reads both**: Can read both `.md` and `.mdx` files

### Documentation Workflow

- Edit `.mdx` files directly in `docs/content/`
- No conversion needed - Nextra reads them directly
- Preview with `npm run dev:docs` (runs from docs directory)
- Build with `npm run build:docs`

## Configuration Invariants

### Always True Rules

- All configs return arrays (ESLint flat config format)
- Configs must be spread (`...configName`) when composing
- Order matters - later configs override earlier ones
- `baseConfig` includes default ignores: `node_modules/**`, `dist/**`
- TypeScript config disables TS rules for `.js` files automatically

### Peer Dependencies

- **Required**: `eslint >= 9`
- **Optional**: `typescript >= 4.8.4 < 6.0.0` (only for `tsConfig`)
- **Optional**: `prettier` (only for `prettierConfig`)

## Error Handling

### Common Issues

- **Import errors**: Use ES modules, not CommonJS
- **Peer dependency errors**: Install missing dependencies
- **Config errors**: Use flat config format, not legacy
- **TypeScript errors**: Ensure `tsconfig.json` exists in project root

### Debugging

- Check active config: `npx eslint --print-config path/to/file.js`
- Verify ESLint version: `npx eslint --version` (must be >= 9)
- Check peer dependencies: `npm ls eslint typescript prettier`

## Don'ts

- Don't invent configuration keys - only use those documented
- Don't deep import from `configs/` directory - use public exports
- Don't assume TypeScript is required - it's optional
- Don't use CommonJS `require()` - package uses ES modules only
- Don't modify configs directly - spread and override instead
- Don't use for browser/React projects - Node.js focused only
- Don't use with ESLint < 9 - flat config required

## Testing Patterns

When uncertain, propose tests first in **tests/** directory, then implement.

## Database Code

If touching database-related code, follow invariants in `docs/content/concepts.mdx#data-invariants`.

## Documentation Updates

When making changes that affect functionality:

1. Update `docs/content/reference/config.mdx`
2. Update `docs/content/recipes/examples.mdx`
3. Update `docs/content/troubleshooting.mdx`
4. Update `docs/content/llm-context.mdx` public surface list
