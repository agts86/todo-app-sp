import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-onsenui': 'vue-onsenui/dist/vue-onsenui.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  server: {
    port: 8080
  },
  build: {
    outDir: 'www',
    commonjsOptions: { include: [/vue-onsenui/] }
  },
  optimizeDeps: {
    include: ['vue-onsenui']
  }
})
