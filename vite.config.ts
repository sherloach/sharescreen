/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src', 'components'),
      pages: resolve(__dirname, 'src', 'pages'),
    },
  },
});
