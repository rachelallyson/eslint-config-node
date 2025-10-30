# Custom Rules and Extensions

Extend this package's configs with your own rules, plugins, and project-specific settings.

## Extending Configs

### Pattern: Spread + Override

Always spread the base config first, then add your customizations:

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  {
    // Your custom rules here
    rules: {
      "no-console": "error",
    },
  },
];
```

### Pattern: Multiple Extensions

Combine multiple configs and add custom rules:

```javascript
import { baseConfig, importConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...importConfig,
  {
    rules: {
      "custom-rule": "warn",
    },
  },
];
```

## Adding Custom Plugins

### Install Plugin

```bash
npm install --save-dev eslint-plugin-custom
```

### Register Plugin

```javascript
import customPlugin from "eslint-plugin-custom";
import { baseConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  {
    plugins: {
      custom: customPlugin,
    },
    rules: {
      "custom/rule-name": "error",
    },
  },
];
```

## File-Specific Rules

### Test Files

```javascript
export default [
  ...baseConfig,
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    rules: {
      "no-console": "off",
      "no-unused-expressions": "off",
    },
  },
];
```

### Configuration Files

```javascript
export default [
  ...baseConfig,
  {
    files: ["*.config.js", "*.config.mjs"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];
```

## Override Core Rules

### Disable Rule

```javascript
export default [
  ...baseConfig,
  {
    rules: {
      "sort-keys-fix/sort-keys-fix": "off",  // Turn off sorting
    },
  },
];
```

### Change Severity

```javascript
export default [
  ...baseConfig,
  {
    rules: {
      "prefer-template": "warn",  // Downgrade from error to warn
    },
  },
];
```

### Modify Rule Options

```javascript
export default [
  ...baseConfig,
  {
    rules: {
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", next: "return", prev: "*" },
        // Add your own patterns here
      ],
    },
  },
];
```

## Environment-Specific Configs

### Development vs Production

```javascript
const isDevelopment = process.env.NODE_ENV !== "production";

export default [
  ...baseConfig,
  {
    rules: {
      "no-console": isDevelopment ? "warn" : "error",
      "no-debugger": isDevelopment ? "warn" : "error",
    },
  },
];
```

## Conditional Configs

### TypeScript Detection

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node";
import { tsConfig } from "@rachelallyson/eslint-config-node";

const configs = [...baseConfig];

// Only add TypeScript config if tsconfig.json exists
try {
  await import("typescript");
  configs.push(...tsConfig);
} catch {
  // TypeScript not available
}

export default configs;
```

### Feature Flags

```javascript
import { baseConfig, graphqlConfig } from "@rachelallyson/eslint-config-node";

const configs = [...baseConfig];

if (process.env.ENABLE_GRAPHQL_LINT === "true") {
  configs.push(...graphqlConfig);
}

export default configs;
```

## Project-Specific Patterns

### Monorepo Setup

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  {
    ignores: ["packages/*/dist/**", "node_modules/**"],
  },
];
```

### Shared Config Across Packages

Create `packages/eslint-config/index.js`:

```javascript
import { baseConfig, tsConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...tsConfig,
  {
    // Shared rules for all packages
    rules: {
      "no-console": "error",
    },
  },
];
```

Then in each package:

```javascript
import sharedConfig from "@repo/eslint-config";

export default [...sharedConfig];
```

## Best Practices

### 1. Always Spread Base First

```javascript
// ✅ Good
export default [...baseConfig, { rules: {...} }];

// ❌ Bad - loses baseConfig settings
export default [{ rules: {...} }];
```

### 2. Keep Overrides Minimal

Only override what you need:

```javascript
// ✅ Good - specific override
export default [
  ...baseConfig,
  { rules: { "no-console": "error" } },
];

// ❌ Bad - re-implementing baseConfig
export default [
  { rules: { /* all baseConfig rules */ } },
];
```

### 3. Document Custom Rules

Add comments explaining why:

```javascript
export default [
  ...baseConfig,
  {
    // Disable sorting in config files for readability
    files: ["*.config.js"],
    rules: {
      "sort-keys-fix/sort-keys-fix": "off",
    },
  },
];
```

### 4. Test Your Config

After changes, run:

```bash
npx eslint --print-config . > active-config.json
```

Review the merged configuration to ensure it matches expectations.

## Advanced: Creating Shareable Configs

Package your extended config:

```javascript
// @my-org/eslint-config/index.js
import { baseConfig, tsConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...tsConfig,
  {
    rules: {
      // Org-specific rules
    },
  },
];
```

Publish as a separate package that extends this one.
