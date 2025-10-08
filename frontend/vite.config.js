import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      external: [],
    },
    // Use esbuild for better compatibility
    minify: 'esbuild',
    // Disable Rollup's native dependencies
    target: 'esnext',
    modulePreload: false,
  },
  optimizeDeps: {
    // Force esbuild for dependencies
    force: true,
  },
})
