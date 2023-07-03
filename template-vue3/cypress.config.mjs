import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    specPattern: [
      'src/**/*.{cy,ct}.{js,jsx,ts,tsx}',
    ],
    viewportHeight: 500,
    viewportWidth: 1000,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec,e2e}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5050',
  },
})
