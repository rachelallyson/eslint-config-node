/**
 * @packageDocumentation
 * Human-friendly TypeDoc for the public API surface of `@rachelallyson/eslint-config-node`.
 *
 * These ambient declarations mirror the runtime exports in `index.js` and `configs/*.js`.
 * They are documentation-only, so consumers do not need TypeScript to use this package.
 *
 * Quick links:
 * - Quickstart: /guides/quickstart
 * - Concepts: /concepts
 * - Config reference: /reference/config
 */

/** Minimal shape of an ESLint v9 flat config item used for docs typing. */
export interface ESLintFlatConfigItem {
    /** Optional file globs the config applies to (e.g. ["*.ts"]). */
    files?: string[];
    /** Optional ignore globs that should be excluded (e.g. ["dist/**"]). */
    ignores?: string[];
    /** Parser and language options for this config block. */
    languageOptions?: Record<string, unknown>;
    /** Plugin registrations available to `rules`. */
    plugins?: Record<string, unknown>;
    /** Rule name to setting map. Later configs override earlier ones. */
    rules?: Record<string, unknown>;
}

export type ESLintFlatConfig = ReadonlyArray<ESLintFlatConfigItem>;

/**
 * Core ESLint flat config for Node.js projects.
 *
 * @category Configs
 * @remarks
 * Includes ESLint recommended rules and foundational code-style preferences.
 * Default ignore patterns cover `node_modules/**` and `dist/**`.
 *
 * When to use:
 * - New project baseline (JS or TS)
 * - Minimal setup where you add other configs incrementally
 *
 * Common overrides:
 * - Toggle `no-console` per environment
 * - Add file-specific rules for tests or config files
 *
 * @see /concepts
 * @see /reference/config
 *
 * @example Enable no-console in production only
 *     const isCI = process.env.CI === 'true'
 *     export default [
 *       ...baseConfig,
 *       { rules: { 'no-console': isCI ? 'error' : 'off' } },
 *     ]
 *
 * @example Relax rules for test files
 *     export default [
 *       ...baseConfig,
 *       { files: ['*.test.{js,ts}'], rules: { 'no-console': 'off' } },
 *     ]
 */
export declare const baseConfig: ESLintFlatConfig;

/**
 * Import sorting and hygiene rules (unused imports, order).
 *
 * @category Configs
 * @remarks
 * Combines \`simple-import-sort\`, \`eslint-plugin-import\`, and \`eslint-plugin-unused-imports\`.
 * Encourages consistent grouping and removes unused imports/variables (with `_` ignore prefix).
 *
 * When to use:
 * - Any project with multiple modules where import order/readability matters
 * - Codebases that want auto-removal of unused imports/vars
 *
 * Common overrides:
 * - Customize sorting groups (e.g., internal alias before relative)
 * - Ignore certain generated files
 *
 * @example Override groups
 *     export default [
 *       ...importConfig,
 *       {
 *         rules: {
 *           'simple-import-sort/imports': ['error', { groups: [["^node:"], ["^@?\\w"], ["^@/"], ["^\\."]] }],
 *         },
 *       },
 *     ];
 *
 * @see /recipes/examples#import-sorting-customization
 */
export declare const importConfig: ESLintFlatConfig;

/**
 * Security-focused lint rules for Node.js.
 *
 * @category Configs
 * @remarks
 * Leverages `eslint-plugin-n` and `eslint-plugin-security`. The
 * `security/detect-object-injection` rule is disabled by default but can be enabled per project.
 *
 * When to use:
 * - Server-side Node.js apps and libraries
 * - Projects handling external input or sensitive data
 *
 * Common overrides:
 * - Enable `security/detect-object-injection` with awareness of false positives
 *
 * @example Enable object injection detection
 *     export default [
 *       ...securityConfig,
 *       { rules: { 'security/detect-object-injection': 'warn' } },
 *     ];
 *
 * @see /recipes/examples#security-rules-customization
 */
export declare const securityConfig: ESLintFlatConfig;

/**
 * GraphQL schema and operations lint rules.
 *
 * @category Configs
 * @remarks
 * Requires a resolvable schema. Default assumes `http://localhost:4000/graphql`.
 * Always override to match your project (local file or remote URL).
 *
 * When to use:
 * - Projects with `.graphql` schema and operation files
 * - Teams that want consistent operation naming and fragment hygiene
 *
 * Common overrides:
 * - Set `parserOptions.schema` to local file or remote URL
 * - Adjust `files`/`operations` globs to your layout
 *
 * @example Use a local schema file
 *     export default [
 *       ...graphqlConfig,
 *       {
 *         files: ['*.graphql'],
 *         languageOptions: { parserOptions: { schema: './schema.graphql', operations: '*.graphql' } },
 *       },
 *     ];
 *
 * @see /guides/error-handling#graphql-schema-not-found
 */
export declare const graphqlConfig: ESLintFlatConfig;

/**
 * Prettier integration and conflict resolution rules.
 *
 * @category Configs
 * @remarks
 * Integrates `eslint-plugin-prettier` and `eslint-config-prettier`. Requires `prettier` in your project.
 * Place after other configs so formatting overrides apply last.
 *
 * When to use:
 * - Teams standardizing on Prettier formatting enforced via ESLint
 *
 * Common overrides:
 * - Provide your own Prettier config via `.prettierrc`
 *
 * @see /recipes/examples#prettier-setup
 */
export declare const prettierConfig: ESLintFlatConfig;

/**
 * TypeScript-specific lint rules.
 *
 * @category Configs
 * @remarks
 * Uses TypeScript Project Service for automatic `tsconfig.json` discovery. TypeScript is an optional peer.
 * Type-aware rules are scoped to TypeScript source and automatically disabled for `.js` files.
 *
 * When to use:
 * - Projects with TypeScript source desiring type-aware linting
 *
 * Common overrides:
 * - Narrow `files` to speed up large monorepos
 *
 * @see /concepts#typescript-integration
 */
export declare const tsConfig: ESLintFlatConfig;

/**
 * Default export: all configs composed in recommended order.
 *
 * Order: base → import → security → graphql → prettier → ts
 *
 * @category Configs
 * @remarks
 * Later entries override earlier ones. Spread additional objects after this default to customize per project.
 *
 * When to use:
 * - Quick "batteries-included" setup covering all areas
 *
 * @example Override a single rule
 *     import config from '@rachelallyson/eslint-config-node';
 *     export default [
 *       ...config,
 *       { rules: { 'no-console': 'error' } },
 *     ];
 */
export declare const _default: ESLintFlatConfigItem[];
export default _default;


