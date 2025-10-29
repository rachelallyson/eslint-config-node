# API Reference

Complete API documentation for `@rachelallyson/eslint-config-node`.

## Main Exports

All exports are from the package root `index.js`. See [source file](../../index.js) for implementation.

### Named Exports

#### `baseConfig`

Core ESLint configuration with recommended rules, sorting plugins, and basic formatting.

**Type**: `Array<ESLintConfig>`

**Included**:

- ESLint recommended rules
- Sort destructure keys plugin
- Sort keys fix plugin
- Prefer template strings
- Padding line rules

**Example**:

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node";

export default [...baseConfig];
```

**See also**: [configs/base.js](../../configs/base.js)

---

#### `importConfig`

Import sorting and unused import detection.

**Type**: `Array<ESLintConfig>`

**File patterns**: `**/*.{js,ts}`

**Included**:

- Simple import sort (groups: Node.js built-ins → external → internal)
- Unused imports removal
- Unused variables (ignores `_` prefixed)

**Example**:

```javascript
import { importConfig } from "@rachelallyson/eslint-config-node";

export default [...importConfig];
```

**See also**: [configs/import.js](../../configs/import.js)

---

#### `securityConfig`

Security best practices and Node.js-specific rules.

**Type**: `Array<ESLintConfig>`

**File patterns**: `**/*.{js,ts}`

**Included**:

- Node.js plugin rules
- Security plugin rules
- Object injection detection (disabled by default)

**Example**:

```javascript
import { securityConfig } from "@rachelallyson/eslint-config-node";

export default [...securityConfig];
```

**See also**: [configs/security.js](../../configs/security.js)

---

#### `graphqlConfig`

GraphQL schema and query linting.

**Type**: `Array<ESLintConfig>`

**File patterns**: `**/*.graphql`

**Included**:

- No unused fragments
- No anonymous operations
- Unique fragment names

**Schema**: Defaults to `http://localhost:4000/graphql` (should be overridden)

**Example**:

```javascript
import { graphqlConfig } from "@rachelallyson/eslint-config-node";

export default [...graphqlConfig];
```

**See also**: [configs/graphql.js](../../configs/graphql.js)

---

#### `prettierConfig`

Prettier code formatting integration.

**Type**: `Array<ESLintConfig>`

**File patterns**: `**/*.{js,ts}`

**Included**:

- Prettier recommended config
- Prettier formatting as errors

**Peer dependency**: `prettier` (must be installed)

**Example**:

```javascript
import { prettierConfig } from "@rachelallyson/eslint-config-node";

export default [...prettierConfig];
```

**See also**: [configs/prettier.js](../../configs/prettier.js)

---

#### `tsConfig`

TypeScript-specific linting rules.

**Type**: `Array<ESLintConfig>`

**File patterns**: TypeScript files (auto-detected by typescript-eslint)

**Included**:

- TypeScript ESLint recommended rules
- TypeScript ESLint stylistic rules
- Project service integration (reads `tsconfig.json` automatically)

**Peer dependency**: `typescript` (optional but recommended)

**Configuration**:

- `projectService: true` - Automatically discovers project's `tsconfig.json`
- `@typescript-eslint/no-explicit-any: "off"` - Allows `any` type

**Example**:

```javascript
import { tsConfig } from "@rachelallyson/eslint-config-node";

export default [...tsConfig];
```

**See also**: [configs/ts.js](../../configs/ts.js)

---

### Default Export

Combines all configs in order: base → import → security → graphql → prettier → ts.

**Type**: `Array<ESLintConfig>`

**Example**:

```javascript
import config from "@rachelallyson/eslint-config-node";

export default config;
```

**Equivalent to**:

```javascript
import {
  baseConfig,
  importConfig,
  securityConfig,
  graphqlConfig,
  prettierConfig,
  tsConfig,
} from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...importConfig,
  ...securityConfig,
  ...graphqlConfig,
  ...prettierConfig,
  ...tsConfig,
];
```

---

## Deep Imports

All configs can be imported directly from their paths:

- `@rachelallyson/eslint-config-node/base` → `baseConfig`
- `@rachelallyson/eslint-config-node/import` → `importConfig`
- `@rachelallyson/eslint-config-node/security` → `securityConfig`
- `@rachelallyson/eslint-config-node/graphql` → `graphqlConfig`
- `@rachelallyson/eslint-config-node/prettier` → `prettierConfig`
- `@rachelallyson/eslint-config-node/ts` → `tsConfig`

**Example**:

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node/base";
```

---

## TypeScript Configuration

### `tsconfig.json`

Shareable TypeScript configuration included in the package.

**Location**: Package root (extendable via `"extends"`)

**Usage**:

```json
{
  "extends": "@rachelallyson/eslint-config-node/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

**Settings**: See [reference/config.md](../reference/config.md#typescript-configuration)

---

## Type Definitions

While this package is written in JavaScript, the configs follow ESLint's flat config structure:

```typescript
type ESLintConfig = {
  files?: string[];
  ignores?: string[];
  languageOptions?: {
    parser?: any;
    parserOptions?: Record<string, any>;
  };
  plugins?: Record<string, any>;
  rules?: Record<string, any>;
};

type ConfigExport = ESLintConfig[];
```

---

## Package Structure

```
@rachelallyson/eslint-config-node/
  index.js              # Main exports
  configs/
    base.js             # baseConfig
    import.js           # importConfig
    security.js         # securityConfig
    graphql.js          # graphqlConfig
    prettier.js         # prettierConfig
    ts.js               # tsConfig
  tsconfig.json         # Shareable TS config
```

---

## See Also

- [Configuration Reference](../reference/config.md) - Detailed config options
- [Guides](../guides/quickstart.md) - Usage examples
- [Concepts](../concepts.md) - Architecture and patterns
