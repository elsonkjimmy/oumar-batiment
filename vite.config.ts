import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const isNetlify = Boolean(process.env.NETLIFY);
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS && !process.env.NETLIFY);

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
  base: isNetlify ? '/' : (isGitHubPages ? '/oumar-batiment/' : '/'),
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
