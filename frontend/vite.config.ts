import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // NestJS 백엔드 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // /api 제거
      },
    },
  },
  plugins: [react(), tailwindcss()],
})