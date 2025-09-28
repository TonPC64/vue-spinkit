import { defineConfig } from 'vite'
let createVuePlugin
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require('vite-plugin-vue2')
  createVuePlugin = mod && (mod.createVuePlugin || mod.default && mod.default.createVuePlugin) ? (mod.createVuePlugin || mod.default.createVuePlugin) : null
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Could not require vite-plugin-vue2', e)
}

export default defineConfig({
  plugins: [createVuePlugin && createVuePlugin()],
  build: {
    outDir: 'build',
    lib: {
      entry: 'src/index.js',
      name: 'vue-spinkit',
      // produce the exact filename vue-spinkit.common.js
      fileName: 'vue-spinkit.common',
      formats: ['cjs']
    },
    rollupOptions: {
      // externalize peer deps that shouldn't be bundled
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
