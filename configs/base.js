import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";

export const baseConfig = [
    {
        ignores: ["node_modules/**", "dist/**"], // Folders to ignore
    },
    eslint.configs.recommended, // ESLint's recommended rules
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2023, // Specify the version of ECMAScript
                sourceType: "module", // Use ES module syntax
            },
        },
        plugins: {
            perfectionist,
        },
        rules: {
            complexity: ["error", 6],
            "no-unused-vars": "off",
            "padding-line-between-statements": [
                "warn",
                { blankLine: "always", next: "return", prev: "*" },
                { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
                {
                    blankLine: "any",
                    next: ["const", "let", "var"],
                    prev: ["const", "let", "var"],
                },
            ],
            // Autofix-enabled object-key sorting for both object literals and
            // destructuring patterns. Replaces the unmaintained
            // eslint-plugin-sort-keys-fix (object literals) AND
            // eslint-plugin-sort-destructure-keys (destructuring) with a single
            // rule, avoiding the case-sensitivity conflict the two had. The old
            // sort-keys-fix broke on ESLint 10 (removed context.getSourceCode).
            // Options preserve the previous behaviour: natural, ascending,
            // case-insensitive.
            "perfectionist/sort-objects": [
                "error",
                { ignoreCase: true, order: "asc", type: "natural" },
            ],
            "prefer-template": "error",
        },
    },
];

