import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      // cv.html sert uniquement à générer le PDF (voir scripts/build-cv.mjs).
      input: { main: 'index.html', cv: 'cv.html' },
    },
  },
});
