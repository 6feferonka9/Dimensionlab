module.exports = {
  "root": true,
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
  ],
  "ignorePatterns": [
    ".eslintrc.js",
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx",
          ".ts",
          ".js"
        ]
      },
    ],
    "react/require-default-props": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
};