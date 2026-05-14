import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
// set `base` to "/<repo>/". For a custom domain or Vercel/Netlify, keep "/".
export default defineConfig({
  plugins: [react()],
  base: '/',
})
