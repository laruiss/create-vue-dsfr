import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: [
      fileURLToPath(new URL('./vitest-setup.ts', import.meta.url)),
    ],
  },
  // any custom vitest config you require
})
