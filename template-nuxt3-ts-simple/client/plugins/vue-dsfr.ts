import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { defineNuxtPlugin } from 'nuxt/app'

import * as icons from '../icons'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VIcon', OhVueIcon)
  nuxtApp.vueApp.component('OhVueIcon', OhVueIcon)
  addIcons(...Object.values(icons))
  import('@gouvfr/dsfr/dist/utility/icons/icons.min.css') // Pose problème en SSR si importé dans nuxt.config.ts
})
