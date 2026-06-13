import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";

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
            "sort-destructure-keys": sortDestructureKeys,
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
            // Autofix-enabled object-key sorting. Replaces the unmaintained
            // eslint-plugin-sort-keys-fix, which broke on ESLint 10 (it called
            // the removed context.getSourceCode API). These options preserve the
            // previous behaviour: natural, ascending, case-insensitive.
            "perfectionist/sort-objects": [
                "error",
                { ignoreCase: true, order: "asc", type: "natural" },
            ],
            "prefer-template": "error",
            "sort-destructure-keys/sort-destructure-keys": 2,
        },
    },
];

