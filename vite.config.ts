import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019', // Fixes react-snap SyntaxError (optional chaining)
    outDir: 'dist',   // Default is fine, but keep it explicit
  },
})
