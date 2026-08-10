import { expect, test } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('affiche Accueil sur la route racine', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Accueil' })).toBeVisible()
})
