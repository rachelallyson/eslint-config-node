import { fixupPluginRules } from "@eslint/compat";
import * as graphqlLint from "@graphql-eslint/eslint-plugin";

export const graphqlConfig = [
    {
        plugins: {
            "@graphql-eslint": fixupPluginRules(graphqlLint),
        },
        files: ["**/*.graphql"],
        languageOptions: {
            parser: graphqlLint,
            parserOptions: {
                operations: "**/*.graphql",
                schema: "http://localhost:4000/graphql",
            },
        },
        rules: {
            "@graphql-eslint/no-unused-fragments": "error",
            "@graphql-eslint/no-anonymous-operations": "error",
            "@graphql-eslint/unique-fragment-name": "error",
        },
    },
];

