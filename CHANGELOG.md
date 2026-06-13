# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-06-13

### Changed (breaking)

- **ESLint 10 support.** Peer dependency widened to `^9.0.0 || ^10.0.0`. The
  package now installs and runs cleanly under ESLint 10.
- **TypeScript 6 support.** Peer range widened to `>=4.8.4 <6.1.0` and
  `typescript-eslint` bumped to `^8.61.0` (which supports TS 6).
- Replaced the unmaintained `eslint-plugin-sort-keys-fix` with
  `eslint-plugin-perfectionist`. Object-key sorting is now enforced by
  `perfectionist/sort-objects` (natural, ascending, case-insensitive — same
  behaviour, still autofixable). The old plugin crashed on ESLint 10 because it
  called the removed `context.getSourceCode()` API.
- Bumped `@eslint/js` → `^10.0.1`, `@eslint/compat` → `^2.1.0`,
  `eslint-plugin-n` → `^18.1.0`, `eslint-plugin-security` → `^4.0.1`,
  `eslint-plugin-simple-import-sort` → `^13.0.0`,
  `eslint-plugin-sort-destructure-keys` → `^3.0.0`,
  `eslint-plugin-unused-imports` → `^4.4.1`, `eslint-plugin-prettier` → `^5.5.6`.

### Removed

- Dropped `eslint-plugin-import` from `importConfig`. It was registered as a
  plugin but no `import/*` rule was enabled, and its peer range did not cover
  ESLint 10.

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

[Unreleased]: https://github.com/rachel-allyson/eslint-config-node/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/rachel-allyson/eslint-config-node/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/rachel-allyson/eslint-config-node/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/rachel-allyson/eslint-config-node/releases/tag/v1.0.0
