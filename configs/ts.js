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
        },
    },
    {
        files: ["**/*.{js,cjs,mjs,js}"],
        ...tsEslint.configs.disable,
    },
);

