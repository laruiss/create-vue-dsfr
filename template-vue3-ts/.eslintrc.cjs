/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    "vue/setup-compiler-macros": true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'eslint-config-standard-with-typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsx-quotes': [2, 'prefer-double'],
    'comma-dangle': [2, 'always-multiline'],
  },
  overrides: [
    {
      "files": [
        "cypress/integration/**.spec.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ],
    },
  ],
}
