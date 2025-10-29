import prettierPlugin from "eslint-plugin-prettier/recommended";

export const prettierConfig = [
  prettierPlugin,
  {
    files: ["**/*.{js,ts}"],
    rules: {
      "prettier/prettier": "error",
    },
  },
];

