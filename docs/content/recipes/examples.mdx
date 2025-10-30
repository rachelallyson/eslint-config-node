# Examples and Recipes

Copy-paste solutions for common scenarios.

## Basic Setups

### JavaScript Only

**Context**: Plain Node.js project without TypeScript.

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, importConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...importConfig,
];
```

**Expected result**: Linting works for `.js` files with import sorting.

---

### TypeScript Only

**Context**: TypeScript project with full type checking.

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, importConfig, tsConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...importConfig,
  ...tsConfig,
];
```

**Expected result**: TypeScript files are linted with type-aware rules using project's `tsconfig.json`.

---

### All Configs

**Context**: Full-featured setup with all linting enabled.

**Code**:

```javascript
// eslint.config.mjs
import config from "@rachelallyson/eslint-config-node";

export default config;
```

**Expected result**: All linting rules active (base, imports, security, GraphQL, Prettier, TypeScript).

---

## Prettier Integration

### Prettier Setup

**Context**: Enable Prettier formatting with ESLint.

**Prerequisites**: Install Prettier and create `.prettierrc`:

```bash
npm install --save-dev prettier
```

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, prettierConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...prettierConfig,
];
```

**Expected result**: Prettier formatting errors show as ESLint errors. Format on save if editor configured.

---

## GraphQL Projects

### GraphQL with Custom Schema

**Context**: Lint GraphQL files with local schema file.

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, graphqlConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  {
    ...graphqlConfig[0],
    files: ["**/*.graphql"],
    languageOptions: {
      parser: graphqlConfig[0].languageOptions.parser,
      parserOptions: {
        schema: "./src/schema.graphql",  // Your schema path
        operations: "**/*.graphql",
      },
    },
  },
];
```

**Expected result**: GraphQL files linted against your schema, catching unused fragments and anonymous operations.

---

## Monorepo Setup

### Shared Config Across Packages

**Context**: Multiple packages sharing ESLint config.

**Structure**:

```
repo/
  packages/
    eslint-config/
      index.js
    app/
      eslint.config.mjs
    api/
      eslint.config.mjs
```

**Shared config** (`packages/eslint-config/index.js`):

```javascript
import { baseConfig, tsConfig, importConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...importConfig,
  ...tsConfig,
  {
    // Shared rules for all packages
    rules: {
      "no-console": "error",
    },
  },
];
```

**Package config** (`packages/app/eslint.config.mjs`):

```javascript
import sharedConfig from "@repo/eslint-config";

export default [
  ...sharedConfig,
  {
    // App-specific overrides
    ignores: ["dist/**"],
  },
];
```

**Expected result**: Consistent linting across packages with package-specific overrides.

---

## Test File Configuration

### Relaxed Rules for Tests

**Context**: Test files need different rules (console allowed, etc.).

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, tsConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...tsConfig,
  {
    files: ["**/*.test.js", "**/*.test.ts", "**/*.spec.js"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-expressions": "off",
    },
  },
];
```

**Expected result**: Test files can use console, `any` types, and unused expressions without lint errors.

---

## Custom Rules Override

### Disable Key Sorting

**Context**: Don't enforce object key sorting in certain files.

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  {
    files: ["*.config.js", "*.config.mjs"],
    rules: {
      "sort-keys-fix/sort-keys-fix": "off",
    },
  },
];
```

**Expected result**: Config files can have unsorted keys without lint errors.

---

## Conditional Configuration

### TypeScript Only If Available

**Context**: Support both JS and TS projects with same config file.

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, importConfig } from "@rachelallyson/eslint-config-node";

const configs = [
  ...baseConfig,
  ...importConfig,
];

// Add TypeScript config if available
try {
  const { tsConfig } = await import("@rachelallyson/eslint-config-node/ts");
  configs.push(...tsConfig);
} catch {
  // TypeScript not installed, skip
}

export default configs;
```

**Expected result**: Works in JS-only projects (without TypeScript), adds TS rules when TypeScript is available.

---

## Import Sorting Customization

### Custom Import Groups

**Context**: Override default import sorting order.

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, importConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  {
    ...importConfig[0],
    rules: {
      ...importConfig[0].rules,
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],
            ["^@?\\w"],  // External packages
            ["^@/"],    // Internal aliases first
            ["^\\."],   // Relative imports
          ],
        },
      ],
    },
  },
];
```

**Expected result**: Imports sorted with internal aliases (`@/`) before relative imports.

---

## Security Rules Customization

### Enable Object Injection Detection

**Context**: Enable security rule that's disabled by default.

**Code**:

```javascript
// eslint.config.mjs
import { baseConfig, securityConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  {
    ...securityConfig[0],
    rules: {
      ...securityConfig[0].rules,
      "security/detect-object-injection": "warn",  // Enable it
    },
  },
];
```

**Expected result**: Security warnings for potential object injection vulnerabilities.

---

## Output Verification

After applying any recipe, verify with:

```bash
# Check config is valid
npx eslint --print-config . > /dev/null

# Run linting
npx eslint .

# Auto-fix what's possible
npx eslint . --fix
```

Expected: No configuration errors, linting runs successfully.
