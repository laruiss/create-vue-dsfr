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
  devtools: { enabled: true },
  // If you want to use SSR enable it and use the server part
  ssr: false,
  srcDir: 'client/',
  css: [
    '@gouvfr/dsfr/dist/dsfr.min.css',
    '@gouvfr/dsfr/dist/utility/icons/icons.min.css',
    '@gouvminint/vue-dsfr/styles',
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },
  modules: [
    'nuxt-vitest'
  ]

})
