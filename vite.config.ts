import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Builds everything (TypeScript + CSS) into one self-contained dist/index.html
export default defineConfig({
  base: "./",
  plugins: [viteSingleFile()],
  server: { host: true, port: 5173 },
  build: { target: "es2022", outDir: "dist", emptyOutDir: true }
});
