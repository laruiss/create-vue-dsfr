import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      componentFolder: 'src',
      specPattern: '**/*.{ct,cy}.{js,ts,jsx,tsx}',
      viewportHeight: 500,
      viewportWidth: 1000,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5050',
    specPattern: [
      '**/cypress/e2e/*.{cy,e2e}.{js,ts,jsx,tsx}',
      '**/src/*.e2e.{js,ts,jsx,tsx}',
    ],
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
})
