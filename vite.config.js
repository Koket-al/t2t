import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the production build works at any URL path —
  // required for GitHub Pages project sites (username.github.io/<repo>/).
  base: './',
})
