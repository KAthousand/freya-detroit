module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/airbnb",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/typescript",
  ],
  plugins: ["prettier", "vue"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "newline-per-chained-call": "error",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "no-shadow": "off",
    "vue/valid-v-slot": [
      "error",
      {
        allowModifiers: true,
      },
    ],
  },
}
