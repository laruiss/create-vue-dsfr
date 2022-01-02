import { defineNuxtPlugin } from '#app'

import VueDsfr from '@laruiss/vue-dsfr'
import '../icons.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDsfr)
})
