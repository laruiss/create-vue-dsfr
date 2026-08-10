import { addCollection } from '@iconify/vue'
import { createVueDsfrIconPlugin } from '@gouvminint/vue-dsfr'
import collections from '~/icon-collections'

// Charger les collections immédiatement au chargement du module
collections.forEach(collection => {
  addCollection(collection)
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createVueDsfrIconPlugin(collections, { preferOffline: true }))
})
