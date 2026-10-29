/// <reference types="vitest" />

// Node.js
import path from "node:path";
// Paraglide
import { paraglideVitePlugin } from "@inlang/paraglide-js";
// Tailwind
import tailwindcss from "@tailwindcss/vite";
// React
import react from "@vitejs/plugin-react-swc";
// Vitest
import { defineConfig } from "vitest/config";

// Configuración de Vite
export default defineConfig({
	// Plugins
	plugins: [
		react(),
		tailwindcss(),
		// Paraglide genera los mensajes tipados en src/paraglide
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/paraglide",
			emitTsDeclarations: true,
			// El idioma se deriva de la ruta, no de la URL de Paraglide
			strategy: ["localStorage", "baseLocale"],
		}),
	],
	// Alias de imports
	resolve: {
		alias: {
			"@": path.resolve(import.meta.dirname, "./src"),
		},
	},
	// Tests
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/test/setup.ts",
		coverage: {
			provider: "v8",
			reporter: ["text", "html", "lcov"],
			include: ["src/**/*.{ts,tsx}", "functions/**/*.ts"],
			exclude: ["src/paraglide/**", "src/test/**", "**/*.d.ts"],
		},
	},
});
