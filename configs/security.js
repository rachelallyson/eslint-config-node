import nodePlugin from "eslint-plugin-n";
import securityPlugin from "eslint-plugin-security";

export const securityConfig = [
  {
    files: ["**/*.{js,ts}"],
    plugins: {
      n: nodePlugin,
      security: securityPlugin,
    },
    rules: {
      "security/detect-object-injection": "off",
      // Add other security rules as necessary
    },
  },
];

