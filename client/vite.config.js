import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "connect-src 'self' http://localhost:4000",
  "object-src 'none'",
  "base-uri 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'"
].join('; ')

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5175,
    strictPort: true,
    hmr: false,
    headers: {
      'Content-Security-Policy': csp
    }
  },

  preview: {
    port: 5175,
    strictPort: true,
    headers: {
      'Content-Security-Policy': csp
    }
  }
})