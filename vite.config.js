import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from "path";
const resolve = path.resolve;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    svgLoader({
      svgoConfig: {
        multipass: true
      }
    })
  ],
  build: {
    manifest: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
})
