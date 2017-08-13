module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', 'fb'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single']
  }
};
