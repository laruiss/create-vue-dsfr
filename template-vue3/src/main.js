import '@laruiss/vue-dsfr/fonts'
import '@laruiss/vue-dsfr/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueDsfr from '@laruiss/vue-dsfr'

import App from './App.vue'
import router from './router/index'
import './icons.js'

import './main.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueDsfr)
  .mount('#app')
