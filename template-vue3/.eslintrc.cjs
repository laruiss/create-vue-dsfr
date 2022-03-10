module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
  ],
  env: {
    "vue/setup-compiler-macros": true
  },
  rules: {
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
