import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, test } from 'vitest'

import HomePage from '../../app/pages/index.vue'

test('affiche le titre de bienvenue', async () => {
  const wrapper = await mountSuspended(HomePage)

  expect(wrapper.get('h1').text()).toBe('Bienvenue')
})
