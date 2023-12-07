import VueDsfr from '@gouvminint/vue-dsfr'

import {
    RiCloseLine,
    RiFlagLine,
    RiHome2Line,
    RiRefreshLine,
} from 'oh-vue-icons/icons'

const icons = [
    RiCloseLine,
    RiFlagLine,
    RiHome2Line,
    RiRefreshLine,
]

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueDsfr, { icons })
})
