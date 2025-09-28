import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// This config builds the example app (index.html + src) into `dist/` for hosting.
export default defineConfig({
  plugins: [createVuePlugin()],
  root: process.cwd(),
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  }
})
