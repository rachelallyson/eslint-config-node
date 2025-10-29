// Export all configs individually so users can pick and choose
export { baseConfig } from "./configs/base.js";
export { graphqlConfig } from "./configs/graphql.js";
export { importConfig } from "./configs/import.js";
export { prettierConfig } from "./configs/prettier.js";
export { securityConfig } from "./configs/security.js";
export { tsConfig } from "./configs/ts.js";

// Also export a default that includes all configs for convenience
import { baseConfig } from "./configs/base.js";
import { graphqlConfig } from "./configs/graphql.js";
import { importConfig } from "./configs/import.js";
import { prettierConfig } from "./configs/prettier.js";
import { securityConfig } from "./configs/security.js";
import { tsConfig } from "./configs/ts.js";

export default [
  ...baseConfig,
  ...importConfig,
  ...securityConfig,
  ...graphqlConfig,
  ...prettierConfig,
  ...tsConfig,
];

