import '@laruiss/vue-dsfr/dist/vue-dsfr-fonts.css'
import '@laruiss/vue-dsfr/dist/vue-dsfr.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueDsfr from '@laruiss/vue-dsfr'

import App from './App.vue'
import router from './router/index.js'
import './icons.js'

import './main.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueDsfr)
  .mount('#app')
