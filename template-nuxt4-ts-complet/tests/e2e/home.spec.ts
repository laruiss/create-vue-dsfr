import { expect, test } from '@nuxt/test-utils/playwright'

test('affiche la page d’accueil', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })

  await expect(page).toHaveTitle(/Page d’accueil/)
  await expect(page.getByRole('heading', { name: 'Bienvenue' })).toBeVisible()
})
