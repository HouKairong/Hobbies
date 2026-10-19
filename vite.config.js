import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use repo base only for production deploy, keep localhost at '/'.
  base: command === "build" ? "/Hobbies/" : "/",
}));
