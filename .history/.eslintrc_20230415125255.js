module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-cycle': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': ['error', { code: 250 }],
    'object-curly-newline': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'react/react-in-is-scope': ['off'],
  },
};
