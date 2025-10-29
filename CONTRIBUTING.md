# Contributing

## Development Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Verify Setup

```bash
# Should show ESLint 9+
npx eslint --version

# Test the package exports
node -e "import('@rachelallyson/eslint-config-node').then(m => console.log(Object.keys(m)))"
```

## Project Structure

```
configs/          # Individual ESLint configurations
index.js          # Main exports (re-exports all configs)
tsconfig.json     # Shareable TypeScript config
package.json      # Package metadata
```

## Development Workflow

### Making Changes

1. **Edit config files** in `configs/`
2. **Update exports** in `index.js` if adding new configs
3. **Update documentation** in `docs/` if behavior changes
4. **Test locally** in a sample project

### Testing Configs Locally

#### Option 1: npm link

```bash
# In this repo
npm link

# In test project
npm link @rachelallyson/eslint-config-node
```

#### Option 2: Direct import

In a test project, import directly:

```javascript
import { baseConfig } from "../eslint-config-node-public/index.js";
```

### Linting

This package uses its own configs for consistency. Before committing:

```bash
# Lint all files
npx eslint .

# Auto-fix where possible
npx eslint . --fix
```

## Adding New Configs

### 1. Create Config File

Create `configs/new-config.js`:

```javascript
import somePlugin from "eslint-plugin-some";

export const newConfig = [
  {
    files: ["**/*.js"],
    plugins: {
      some: somePlugin,
    },
    rules: {
      "some/rule": "error",
    },
  },
];
```

### 2. Export from index.js

```javascript
export { newConfig } from "./configs/new-config.js";
```

### 3. Add to Default Export (if appropriate)

```javascript
export default [
  ...baseConfig,
  ...newConfig,  // Add in logical order
  // ...
];
```

### 4. Update Documentation

- Add to `docs/reference/config.md`
- Add example to `docs/recipes/examples.md`
- Update `docs/api/README.md`
- Update `docs/llm-context.md` public surface list

### 5. Update package.json

- Add any new dependencies to `dependencies`
- Add peer dependencies if needed
- Update `exports` field if adding deep import

## Code Style

### JavaScript Style

- Use ES modules (`import`/`export`)
- Prefer `const` over `let`
- Use template literals for strings with variables
- Keep line lengths reasonable (80-100 chars)

### Config Structure

- Each config is an array of ESLint flat config objects
- Use clear variable names: `baseConfig`, `tsConfig`, etc.
- Add comments explaining non-obvious choices
- Keep configs focused and composable

## Documentation

### Required Updates

When changing functionality, update:

1. **docs/reference/config.md** - Configuration options
2. **docs/api/README.md** - API documentation
3. **docs/recipes/examples.md** - Usage examples (if applicable)
4. **docs/troubleshooting.md** - Error fixes (if applicable)
5. **docs/llm-context.md** - Public surface list

### Documentation Style

- Use clear headings with anchors (`### Heading`)
- Include code examples that work
- Link between related docs
- Keep examples copy-pasteable

## Release Process

### Versioning

This package uses [semantic versioning](https://semver.org/):

- **MAJOR**: Breaking changes (e.g., removing a config, changing peer deps)
- **MINOR**: New configs or features (e.g., new config option)
- **PATCH**: Bug fixes, documentation, non-breaking changes

### Release Steps

1. **Update version** in `package.json`
2. **Update CHANGELOG.md** with changes
3. **Commit** changes
4. **Tag** release: `git tag v1.0.1`
5. **Push** with tags: `git push && git push --tags`
6. **Publish** (if you have npm publish access): `npm publish`

### Pre-release Checklist

- [ ] All tests pass (if we add tests)
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json
- [ ] Peer dependencies verified
- [ ] Tested in sample project

## Commit Messages

Use clear, descriptive commit messages:

```
Add new securityConfig option for custom patterns

- Added file pattern override in securityConfig
- Updated documentation with examples
- Closes #123
```

## Pull Requests

### PR Requirements

- Clear description of changes
- Documentation updated (if needed)
- Examples work (copy-pasteable)
- Follows code style
- Tested locally

### PR Process

1. Fork the repository
2. Create feature branch
3. Make changes
4. Update documentation
5. Test locally
6. Submit PR with clear description

## Questions?

- Check [docs/index.md](docs/index.md) for documentation
- Review [troubleshooting.md](docs/troubleshooting.md) for common issues
- Open an issue for bugs or feature requests
