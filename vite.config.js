import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    open: false
  }
});
