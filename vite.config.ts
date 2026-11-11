import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    // De VPS serveert de site op /; de GitHub Pages-workflow zet BASE_PATH=/<repo>/
    base: process.env.BASE_PATH ?? '/',
    plugins: [react()],
    resolve: {
        alias: {
            src: fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
