import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    open: true,
    port: 5173
  },
  build: {
    target: 'esnext',
    minify: true,
    chunkSizeWarningLimit: 600 // Avoids warnings on large chunks
  }
});
