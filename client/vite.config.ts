import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslintPlugin from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/openai": "http://localhost:2000",
    },
  },
  plugins: [react(), eslintPlugin()],
})
