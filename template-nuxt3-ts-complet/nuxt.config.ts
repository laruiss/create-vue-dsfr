import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
        {
          name: 'theme-color',
          content: '#000091',
        },
        {
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ],
    },
  },
  modules: [
    'nuxt-vitest',
  ],
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'client/',
  css: [
    '@gouvfr/dsfr/dist/dsfr.min.css',
    '@gouvminint/vue-dsfr/styles',
  ],
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
})
