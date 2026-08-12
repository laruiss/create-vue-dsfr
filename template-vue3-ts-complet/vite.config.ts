import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { vueDsfrAutoimportPreset, vueDsfrComponentResolver } from "@gouvminint/vue-dsfr/meta";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ["vue", "vue-router", "vitest", vueDsfrAutoimportPreset],
      vueTemplate: true,
      dts: "./src/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      // allow auto import and register components
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "./src/components.d.ts",
      resolvers: [vueDsfrComponentResolver],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
