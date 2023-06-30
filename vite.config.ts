import { defineConfig, loadEnv } from 'vite';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
    root: './src/',
    build: {
        outDir: './dist/',
    },
    plugins: [vercel()],
});
