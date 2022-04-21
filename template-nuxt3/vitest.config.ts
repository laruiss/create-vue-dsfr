import path from 'path'

import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

const projectDir = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    watch: false,
    globals: true,
    // environment: 'happy-dom',
    environment: 'jsdom',
    testTimeout: 2000,
    setupFiles: [
      './vitest-setup.ts',
    ],
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(projectDir, 'src'),
      },
    ],
  },
})
