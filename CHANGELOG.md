# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2025-11-05

### Fixed

- Export `tsconfig.json` in package.json exports field
- Fixes TypeScript `extends` resolution when using `@rachelallyson/eslint-config-node/tsconfig.json`

## [1.0.0] - 2025-10-29

### Added

- Initial release with modular ESLint configurations
- `baseConfig` - Core ESLint rules, sorting plugins, and formatting
- `importConfig` - Import sorting and unused import detection
- `securityConfig` - Security and Node.js best practices
- `graphqlConfig` - GraphQL schema and query linting
- `prettierConfig` - Prettier integration
- `tsConfig` - TypeScript linting with automatic tsconfig.json discovery
- Default export combining all configs
- Deep import paths for granular imports
- Shareable `tsconfig.json` for extending in projects
- Comprehensive documentation

[Unreleased]: https://github.com/rachel-allyson/eslint-config-node/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/rachel-allyson/eslint-config-node/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/rachel-allyson/eslint-config-node/releases/tag/v1.0.0
