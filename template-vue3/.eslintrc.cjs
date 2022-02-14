module.exports = {
  root: true,
  env: {
    "vue/setup-compiler-macros": true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    "@vue/eslint-config-prettier",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsx-quotes': [2, 'prefer-double'],
    'comma-dangle': [2, 'always-multiline'],
  },
  overrides: [
    {
      files: ['**/src/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
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
