import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Venture_Tourism/',
  server: {
    port: 5173
  }
})