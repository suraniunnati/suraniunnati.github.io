import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://suraniunnati.github.io/', // Change 'username' to your actual GitHub username
  plugins: [react()],
});