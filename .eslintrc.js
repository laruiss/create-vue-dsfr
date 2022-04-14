module.exports = {
  root: true,
  globals: {
    defineProps: 'read-only',
    defineEmits: 'read-only',
    defineExpose: 'read-only',
    withDefaults: 'read-only',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
  ],
  rules: {
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
      files: [
        'client/pages/**/*.vue',
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
