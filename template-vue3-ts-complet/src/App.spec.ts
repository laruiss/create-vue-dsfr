import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

describe('App', () => {
  it('affiche la page d’accueil', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia(), router],
      },
    })

    await router.push('/')
    await router.isReady()

    expect(wrapper.get('h1').text()).toBe('Accueil')
  })
})
