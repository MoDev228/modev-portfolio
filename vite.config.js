import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/sass/abstracts/functions" as *;
          @use "@/sass/abstracts/variables" as *;
          @use "@/sass/abstracts/mixins" as *;
        `,
      },
    },
  },
});