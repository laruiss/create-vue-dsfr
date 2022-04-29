import VueDsfr from '@gouvminint/vue-dsfr'

import {
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
} from 'oh-vue-icons/icons/ri/index'

const icons = [
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
]

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDsfr, { icons })
})
