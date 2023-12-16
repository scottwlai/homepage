module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    'react-hooks/exhaustive-deps': ['off'],
    'react/prop-types': ['off'],
    'no-unused-vars': ['off'],
  }
};
