module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
    'react/react-in-jsx-scope': 'off', // react 17부터 React import 하지 않아도 JSX 사용할 수 있음
    'react/button-has-type': 'off', // button type 지정 하지 않아도 됨
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.jsx'] }],
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
