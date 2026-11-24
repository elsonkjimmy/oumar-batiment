import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: [
        'defaults',
        'not IE 11',
        'Android >= 5',
        'Chrome >= 49',
        'Safari >= 10',
        'iOS >= 10',
        'Samsung >= 5',
      ],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  base: '/oumar-batiment/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
