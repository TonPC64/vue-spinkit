import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [createVuePlugin()],
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
