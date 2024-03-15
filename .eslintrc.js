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
  rules: { 'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }] },
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
