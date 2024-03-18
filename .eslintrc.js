module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
    'react/button-has-type': 'off', // button type 지정 하지 않아도 됨
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['index.js'],
      rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
      },
    },
  ],
};
