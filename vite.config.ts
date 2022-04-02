import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~': 'src',
    },
  },
  plugins: [
    AutoImport(),
    react(),
    UnoCSS(),
  ],
})
