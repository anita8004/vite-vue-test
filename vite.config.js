import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";
import path from "path";
const resolve = path.resolve;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  define: { 'process.env': {} },
  // remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    // extensions: [
    //   '.js',
    //   '.json',
    //   '.jsx',
    //   '.mjs',
    //   '.ts',
    //   '.tsx',
    //   '.vue',
    // ]
  },
})
