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
  {
    "rules": {
      "import/no-cycle": ["error"],
      "no-console": ["error"],
      "react/prop-types": ["error"],
      "linebreak-style": ["error", "unix"],
      "react/state-in-constructor": ["error"],
      "import/prefer-default-export": ["off"],
      "max-len": ["error", {"code": 250}],
      "object-curly-newline": ["off"],
      "react/jsx-filename-extension": ["off"],
      "react/jsx-one-expression-per-line": ["error"],
      "jsx-a11y/click-events-have-key-events": ["off"],
      "jsx-a11y/alt-text": ["error"],
      "jsx-a11y/no-autofocus": ["off"],
      "jsx-a11y/no-static-element-interactions": ["off"],
      "react/no-array-index-key": ["error"],
      "no-param-reassign": ["error"],
      "react/react-in-is-scope": ["off"]
    }
  }
  
};
