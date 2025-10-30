# Configuration Reference

Complete reference for all configuration options, environment variables, and defaults.

## Package Configuration

This package has **no configuration files or environment variables**. It provides ESLint configurations that users import and compose.

## Available Configs

### baseConfig

**What it does**: Core ESLint rules, code sorting, and basic formatting.

**Includes**:

- ESLint recommended rules
- Sort destructure keys plugin
- Sort keys fix plugin
- Prefer template strings
- Padding line rules

**File patterns**: Applies to all files (no restriction)

**Dependencies**: `@eslint/js`, `eslint-plugin-sort-destructure-keys`, `eslint-plugin-sort-keys-fix`

**Example**:

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node";

export default [...baseConfig];
```

### importConfig

**What it does**: Import sorting and unused import detection.

**Includes**:

- Simple import sort (Node.js, external, internal)
- Unused imports removal
- Unused variables detection (with `_` prefix ignore)

**File patterns**: `**/*.{js,ts}`

**Dependencies**: `eslint-plugin-import`, `eslint-plugin-simple-import-sort`, `eslint-plugin-unused-imports`

**Configuration**:

- Import groups: `[["^node:", "^@?\\w", "^\\."]]` (Node built-ins → external → internal)
- Unused vars ignore pattern: `^_`

**Example**:

```javascript
import { importConfig } from "@rachelallyson/eslint-config-node";

export default [...importConfig];
```

### securityConfig

**What it does**: Security best practices and Node.js-specific rules.

**Includes**:

- Node.js plugin rules
- Security plugin rules
- Object injection detection (disabled by default)

**File patterns**: `**/*.{js,ts}`

**Dependencies**: `eslint-plugin-n`, `eslint-plugin-security`

**Configuration**:

- `security/detect-object-injection`: `"off"` (disabled)

**Example**:

```javascript
import { securityConfig } from "@rachelallyson/eslint-config-node";

export default [...securityConfig];
```

### graphqlConfig

**What it does**: GraphQL schema and query linting.

**Includes**:

- No unused fragments
- No anonymous operations
- Unique fragment names

**File patterns**: `**/*.graphql`

**Dependencies**: `@eslint/compat`, `@graphql-eslint/eslint-plugin`

**Configuration**:

- **Schema URL**: `"http://localhost:4000/graphql"` (default, should be overridden)
- Operations pattern: `"**/*.graphql"`

**Example with override**:

```javascript
import { graphqlConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...graphqlConfig,
  {
    files: ["**/*.graphql"],
    languageOptions: {
      parserOptions: {
        schema: "./schema.graphql",  // Override default
      },
    },
  },
];
```

### prettierConfig

**What it does**: Prettier code formatting integration.

**Includes**:

- Prettier recommended config
- Prettier formatting as errors

**File patterns**: `**/*.{js,ts}`

**Dependencies**: `eslint-plugin-prettier`, `eslint-config-prettier`, `prettier` (peer)

**Prerequisites**: Must have Prettier configured (`.prettierrc` or similar)

**Example**:

```javascript
import { prettierConfig } from "@rachelallyson/eslint-config-node";

export default [...prettierConfig];
```

### tsConfig

**What it does**: TypeScript-specific linting rules.

**Includes**:

- TypeScript ESLint recommended rules
- TypeScript ESLint stylistic rules
- Project service integration (reads tsconfig.json automatically)

**File patterns**: TypeScript files only (auto-detected)

**Dependencies**: `typescript-eslint`, `typescript` (optional peer)

**Configuration**:

- `projectService: true` - Automatically finds project's `tsconfig.json`
- `@typescript-eslint/no-explicit-any: "off"` - Allows `any` type

**Example**:

```javascript
import { tsConfig } from "@rachelallyson/eslint-config-node";

export default [...tsConfig];
```

## TypeScript Configuration

### tsconfig.json

**Location**: Included in package, extendable via `"extends"`

**Settings**:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  }
}
```

**Usage**:

```json
{
  "extends": "@rachelallyson/eslint-config-node/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

## Default Ignore Patterns

Defined in `baseConfig`:

- `node_modules/**`
- `dist/**`

Override by adding your own `ignores`:

```javascript
export default [
  ...baseConfig,
  {
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
];
```

## Peer Dependencies

### Required

- `eslint >= 9` - ESLint itself

### Optional

- `typescript >= 4.8.4 < 6.0.0` - Required only if using `tsConfig`
- `prettier` - Required only if using `prettierConfig` (version determined by `eslint-plugin-prettier`)

## Environment Variables

**None**. This package is configuration-only and reads no environment variables.

## Configuration Precedence

When multiple configs define the same rule:

1. **Earlier configs** define the baseline
2. **Later configs** override earlier ones
3. **User overrides** take final precedence

Example:

```javascript
export default [
  ...baseConfig,        // Sets "no-console": "off"
  ...importConfig,       // Doesn't touch "no-console"
  {
    rules: {
      "no-console": "error",  // Final: "error"
    },
  },
];
```

## Deep Import Paths

All configs can be imported directly:

- `@rachelallyson/eslint-config-node/base`
- `@rachelallyson/eslint-config-node/import`
- `@rachelallyson/eslint-config-node/security`
- `@rachelallyson/eslint-config-node/graphql`
- `@rachelallyson/eslint-config-node/prettier`
- `@rachelallyson/eslint-config-node/ts`

Usage:

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node/base";
```

## Default Export

The default export combines all configs in this order:

1. `baseConfig`
2. `importConfig`
3. `securityConfig`
4. `graphqlConfig`
5. `prettierConfig`
6. `tsConfig`

```javascript
import config from "@rachelallyson/eslint-config-node";

export default config;  // All configs combined
```
