import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the built site works from any host path (GitHub Pages, Netlify, etc.)
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
