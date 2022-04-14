import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@laruiss/vue-dsfr/fonts',
    '@laruiss/vue-dsfr/styles',
  ],
  build: {
    transpile: [
      'oh-vue-icons/dist/v3/icon.es',
      'oh-vue-icons/icons/ri/index',
    ],
  },
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
  srcDir: 'client/',
})
