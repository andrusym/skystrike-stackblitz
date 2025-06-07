import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: '.', // Root is the frontend folder (where index.html is)
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Optional: use @ for imports like @/components
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
});
