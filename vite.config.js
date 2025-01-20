import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  base: '/suraniunnati.github.io/',
  plugins: [react()],
   esbuild: {
    loader: 'jsx', // Treat .js files as JSX
    include: /src\/.*\.js$/, // Apply only to files in the src folder
  },
})


