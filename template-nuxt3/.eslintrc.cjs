module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  globals: {
    definePageMeta: 'readonly',
    defineMeta: 'readonly',
    ref: 'readonly',
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'comma-dangle': [2, 'always-multiline'],
  },
  overrides: [
    {
      files: [
        'cypress/support/*.{js,ts,jsx,tsx}',
        'cypress/integration/*.{spec,e2e}.{js,ts,jsx,tsx}',
        'src/**/*.ct.{js,ts,jsx,tsx}',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
    {
      files: [
        'client/**/*.{spec,test}.{js,ts,jsx,tsx}',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        'client/pages/**/*.vue',
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
