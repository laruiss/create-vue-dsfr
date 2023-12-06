// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-vitest',
  ],
  css: [
    '@gouvfr/dsfr/dist/dsfr.min.css',
    '@gouvfr/dsfr/dist/utility/icons/icons.min.css',
    '@gouvminint/vue-dsfr/styles',
  ],
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
  srcDir: 'client/',
})
