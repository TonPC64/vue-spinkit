import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
// ...existing code...

export default defineConfig({
  plugins: [createVuePlugin()],
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
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        inlineDynamicImports: true,
        // force a single filename for the library bundle so it matches package.json "main"
        entryFileNames: 'vue-spinkit.common.js',
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: false
  }
})
