import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['algosdk', '@supabase/supabase-js']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          algorand: ['algosdk'],
          supabase: ['@supabase/supabase-js']
        }
      }
    },
    sourcemap: false,
    minify: 'terser'
  },
  server: {
    port: 5173,
    host: true
  }
})