module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "import/prefere-dafault-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
};
