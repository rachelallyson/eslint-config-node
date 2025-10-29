import eslint from "@eslint/js";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import sortKeysFix from "eslint-plugin-sort-keys-fix";

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
            "sort-destructure-keys": sortDestructureKeys,
            "sort-keys-fix": sortKeysFix,
        },
        rules: {
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
            "prefer-template": "error",
            "sort-destructure-keys/sort-destructure-keys": 2,
            "sort-keys-fix/sort-keys-fix": [
                "error",
                "asc",
                { caseSensitive: false, natural: true },
            ],
        },
    },
];

