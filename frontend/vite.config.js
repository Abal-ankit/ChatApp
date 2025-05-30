import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://chat-backend:8000",
        changeOrigin: true,
        secure: false,
      },
      // "/socket.io": {
      //   target: "http://chat-backend:8000",
      //   ws: true,
      //   changeOrigin: true,
      // },
    },
  },
});
