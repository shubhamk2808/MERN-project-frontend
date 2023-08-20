const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ['react-app', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended',"prettier",  "plugin:@typescript-eslint/recommended"],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', ...prettierOptions }],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};