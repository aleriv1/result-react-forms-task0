import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  // base: "/result-react-server-requests-task1/",
  base: "/result-react-forms-task0/",
  server: {
    open: true,
  },
});
