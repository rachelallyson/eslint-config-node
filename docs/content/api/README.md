**@rachelallyson/eslint-config-node v1.0.0**

***

# @rachelallyson/eslint-config-node

A modular ESLint configuration for Node.js projects. Pick and choose only the configs you need!

## Installation

```bash
npm install --save-dev @rachelallyson/eslint-config-node
```

## Usage

### Option 1: Import Individual Configs

Import only the configs you need in your `eslint.config.mjs`:

```javascript
import { baseConfig, importConfig, prettierConfig } from "@rachelallyson/eslint-config-node";

export default [
  ...baseConfig,
  ...importConfig,
  ...prettierConfig,
];
```

### Option 2: Use Deep Imports

Import configs directly from their paths:

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node/base";
import { importConfig } from "@rachelallyson/eslint-config-node/import";
import { prettierConfig } from "@rachelallyson/eslint-config-node/prettier";

export default [
  ...baseConfig,
  ...importConfig,
  ...prettierConfig,
];
```

### Option 3: Use All Configs

If you want all configs, use the default export:

```javascript
import config from "@rachelallyson/eslint-config-node";

export default config;
```

## Available Configs

- **base**: Core ESLint rules, sort plugins, and basic formatting
- **graphql**: GraphQL linting rules
- **import**: Import sorting and unused import detection
- **prettier**: Prettier integration
- **security**: Security and Node.js best practices
- **ts**: TypeScript linting rules

## TypeScript Configuration

This package also includes a recommended `tsconfig.json` that you can extend in your project:

```json
{
  "extends": "@rachelallyson/eslint-config-node/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

The included TypeScript config provides sensible defaults for Node.js projects:

- ES2020 target
- ESNext modules (you can override to CommonJS if needed)
- Strict type checking
- Module resolution for Node.js

## Requirements

- ESLint >= 9
- Node.js project

## License

ISC
