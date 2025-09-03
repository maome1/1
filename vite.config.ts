import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    
    return {
      plugins: [react()],
      base: isProduction ? '/1/' : '/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets'
      }
    };
});
