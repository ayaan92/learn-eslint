module.exports = {
  root: true,
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:jsdoc/recommended-error',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
    'react/button-has-type': 'off', // button type 지정 하지 않아도 됨
    'jsdoc/tag-lines': 0, // jsdoc description prettier와 충돌 방지, jsdoc 태그들 사이에 공백줄이 있어도 됨
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
      files: ['src/index.js'],
      rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
      },
    },
    {
      files: ['src/App.jsx'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
      },
    },
  ],
};
