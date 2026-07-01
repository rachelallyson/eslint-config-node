import tsEslint from "typescript-eslint";

export const tsConfig = tsEslint.config(
    ...tsEslint.configs.recommended,
    ...tsEslint.configs.stylistic,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            // Enable prefer-nullish-coalescing (type-aware; runs because
            // projectService is on) but ignore string operands: `''` means
            // "unset" and should fall back (name || 'Untitled'), and the `??`
            // rewrite silently blanks output. Keep number/boolean/bigint
            // flagged, where `||` genuinely hides bugs (count || 10 drops a
            // real 0, enabled || true drops a real false).
            "@typescript-eslint/prefer-nullish-coalescing": [
                "error",
                { ignorePrimitives: { string: true } },
            ],
        },
    },
    {
        files: ["**/*.{js,cjs,mjs,js}"],
        ...tsEslint.configs.disable,
    },
);

