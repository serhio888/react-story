module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 4],
    "space-before-function-paren": ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "comma-dangle": ["error", "never"],
    semi: [2, "never"],
    "multiline-ternary": ["error", "never"],
    "spaced-comment": ["error", "never"],
  },
};
