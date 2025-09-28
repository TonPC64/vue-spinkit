import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [createVuePlugin(), cssInjectedByJsPlugin()],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },
  build: {
    outDir: 'build',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    lib: {
      entry: 'src/index.js',
      name: 'VueSpinkit',
      fileName: 'vue-spinkit.common',
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: false
  }
})
