/// <reference types="vitest" />

// Node.js
import path from "node:path";
// Tailwind
import tailwindcss from "@tailwindcss/vite";
// React
import react from "@vitejs/plugin-react-swc";
// Vitest
import { defineConfig } from "vitest/config";

// Configuración de Vite
export default defineConfig({
	// Plugins
	plugins: [react(), tailwindcss()],
	// Alias de imports
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	// Tests
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/test/setup.ts",
	},
});
