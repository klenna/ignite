/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'never'],
    camelcase: 'off',
    indent: [
      'warn',
      2,
      {
        'ignoredNodes': ['TemplateLiteral']
      }
    ],
    'template-curly-spacing': 'off',
    quotes: [
      'warn',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true
      }
    ],
  }
}
