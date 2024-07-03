module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/no-unknown-property": [2, { ignore: ["jsx"] }],
    "react/prop-types": "off",
    "no-unused-vars": 0,
    "react/react-in-jsx-scope": "off",
    camelcase: "off",
    "prefer-const": 0,
    "require-jsdoc": 0,
    "no-var": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
