module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'linebreak-style': ['error', 'unix'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
