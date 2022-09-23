module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    mocha: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "on",
    "prettier/prettier": "off",
    "node/no-missing-import": [
      "error",
      {
        allowModules: [],
        resolvePaths: [__dirname],
        tryExtensions: [".ts", ".js", ".json", ".node"],
      },
    ],
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        version: ">=8.0.0",
        ignores: [],
      },
    ],
  },
};
