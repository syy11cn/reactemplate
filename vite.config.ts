import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '~': 'src',
    },
  },
  plugins: [
    AutoImport(),
    react(),
  ],
})
