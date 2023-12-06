import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import vueDsfrPreset from './vue-dsfr-auto-import-preset.js'

const isCypress = process.env.CYPRESS === 'true'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Dummy app',
        short_name: 'Dummy',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        display: 'standalone',
      },
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        ...(isCypress ? [] : ['vitest']),
        vueDsfrPreset,
      ],
      vueTemplate: true,
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  base: process.env.BASE_URL || '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue', 'oh-vue-icons'],
  },
})
