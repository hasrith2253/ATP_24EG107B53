import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/auth': 'http://127.0.0.1:4000',
      '/user-api': 'http://127.0.0.1:4000',
      '/author-api': 'http://127.0.0.1:4000',
      '/admin-api': 'http://127.0.0.1:4000',
    }
  }
})
