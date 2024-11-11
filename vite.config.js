import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Quiz-App-2/',
  build: {
    outDir: 'build',  // Output to `build` instead of `dist`
  },
})