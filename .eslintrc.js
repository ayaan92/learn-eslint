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
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime', 'plugin:jsdoc/recommended-error', 'prettier', 'plugin:storybook/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
    'react/button-has-type': 'off', // button type 지정 하지 않아도 됨
    'react/require-default-props': 'off', // defaultProps은 deprecated될 예정
    'jsdoc/tag-lines': 'off', // jsdoc description prettier와 충돌 방지, jsdoc 태그들 사이에 공백줄이 있어도 됨
    'jsdoc/no-defaults': 'off', // jsdoc에서 default를 사용할 수 있음
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
