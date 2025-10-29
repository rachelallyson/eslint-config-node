# Documentation Index

Welcome to `@rachelallyson/eslint-config-node` documentation. This package provides modular ESLint configurations for Node.js projects.

## Quick Links

- **[Start Here](#start-here)** - Get up and running in 5 minutes
- **[Core Concepts](./concepts.md)** - Understanding the package architecture
- **[API Reference](./api/README.md)** - Complete API surface
- **[Configuration Reference](./reference/config.md)** - All configuration options

## Start Here

### Installation

```bash
npm install @rachelallyson/eslint-config-node
```

### Minimal Setup

Create `eslint.config.mjs`:

```javascript
import { baseConfig } from "@rachelallyson/eslint-config-node";

export default [...baseConfig];
```

See [Quickstart Guide](./guides/quickstart.md) for detailed setup.

## Documentation Structure

### Concepts

- [**concepts.md**](./concepts.md) - Core mental models, config composition, TypeScript integration

### Guides (Task-Oriented)

- [**quickstart.md**](./guides/quickstart.md) - Complete setup guide
- [**error-handling.md**](./guides/error-handling.md) - Understanding ESLint errors and rule overrides
- [**custom-rules.md**](./guides/custom-rules.md) - Extending configs with project-specific rules

### Reference

- [**config.md**](./reference/config.md) - All configuration options and defaults
- [**api/README.md**](./api/README.md) - Complete API documentation

### Recipes

- [**examples.md**](./recipes/examples.md) - Copy-paste solutions for common scenarios

### Troubleshooting

- [**troubleshooting.md**](./troubleshooting.md) - Common errors and fixes

### Development

- [**../CONTRIBUTING.md**](../CONTRIBUTING.md) - How to contribute

## Package Architecture

This package uses ESLint 9+ flat config format. Each config is a named export that returns an array of configuration objects, which can be spread into your main ESLint config.

### Modular Design

Pick only what you need:

```javascript
import { baseConfig, tsConfig } from "@rachelallyson/eslint-config-node";
```

Or use all configs:

```javascript
import config from "@rachelallyson/eslint-config-node";
```

## Common Tasks

- [Set up a new project](./guides/quickstart.md)
- [Add TypeScript support](./recipes/examples.md#typescript-only-setup)
- [Override specific rules](./guides/custom-rules.md)
- [Troubleshoot ESLint errors](./troubleshooting.md)

## For AI Assistants

See [llm-context.md](./llm-context.md) for a concise reference map.
