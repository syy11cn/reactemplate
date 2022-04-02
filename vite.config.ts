import path from 'path'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    AutoImport({
      include: [
        'src/**/*.{ts,tsx}',
      ],
      imports: [
        {
          react: [
            'useState',
            'useEffect',
          ],
        },
      ],
    }),
    UnoCSS(),
  ],
})
