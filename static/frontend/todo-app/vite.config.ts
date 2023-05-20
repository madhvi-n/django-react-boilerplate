import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
   outDir: 'build',
   assetsInlineLimit: 0,
   manifest: true,
   rollupOptions: {
     output: {
       entryFileNames: 'js/[name].js',
       chunkFileNames: 'js/[name].js',
       assetFileNames: 'assets/[name].[ext]',
     },
   },
 },
})
