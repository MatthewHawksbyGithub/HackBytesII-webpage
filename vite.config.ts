import { defineConfig, loadEnv } from 'vite';
import vercel from 'vite-plugin-vercel';
import ssr from 'vite-plugin-ssr/plugin';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
export default defineConfig(async ({ command, mode }) => {
  return {
  root: './src/',
  build: {
    outDir: './dist/',
  },
  vercel: {
    // Tweak what you need, check TS definition for details
  },
  plugins: [ssr(), vercel(), vercelSsr()],
}});

