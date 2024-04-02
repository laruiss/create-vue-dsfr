import { addIcons } from 'oh-vue-icons'
import { defineNuxtPlugin } from 'nuxt/app'

import * as icons from '../icons'

export default defineNuxtPlugin((/* nuxtApp */) => {
  addIcons(...Object.values(icons))
})
