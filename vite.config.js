import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsDir: './src/assets',
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.exr'],
});
