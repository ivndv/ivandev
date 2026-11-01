// Testing Library
import { render, screen, within } from "@testing-library/react";
// Vitest
import { describe, expect, it } from "vitest";
// Secciones
import Projects from "./Projects";

describe("Sección Proyectos", () => {
	it("renderiza el título principal", () => {
		render(<Projects />);
		expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
	});

	it("renderiza todos los proyectos del listado", () => {
		render(<Projects />);

		expect(screen.getByText("Tempo v2")).toBeInTheDocument();
		expect(screen.getByText("Palette Lab")).toBeInTheDocument();
		expect(screen.getByText("Codebook")).toBeInTheDocument();
		expect(screen.getByText("Fluxbeats")).toBeInTheDocument();
		expect(screen.getByText("Nemi")).toBeInTheDocument();
		expect(screen.getByText("Cosmos")).toBeInTheDocument();
	});

	it("contiene enlaces externos correctamente configurados", () => {
		render(<Projects />);

		// 1. Codebook usa demo, docs y repos separados
		const codebook = screen.getByText("Codebook").closest("article");
		expect(codebook).not.toBeNull();
		expect(
			within(codebook as HTMLElement).getByRole("link", { name: /live demo/i }),
		).toHaveAttribute("href", "https://codebook-three.vercel.app");
		expect(
			within(codebook as HTMLElement).getByRole("link", { name: /api docs/i }),
		).toHaveAttribute(
			"href",
			"https://codebook-api-production-0be5.up.railway.app/docs",
		);

		// 2. Fluxbeats tiene un solo repositorio
		const fluxbeats = screen.getByText("Fluxbeats").closest("article");
		expect(
			within(fluxbeats as HTMLElement).getByRole("link", { name: /code/i }),
		).toHaveAttribute("href", "https://github.com/ivndv/fluxbeats");

		// 3. Palette Lab separa frontend y backend
		const palette = screen.getByText("Palette Lab").closest("article");
		expect(
			within(palette as HTMLElement).getByRole("link", { name: /frontend/i }),
		).toHaveAttribute("href", "https://github.com/ivndv/palette-lab");
		expect(
			within(palette as HTMLElement).getByRole("link", { name: /backend/i }),
		).toHaveAttribute("href", "https://github.com/ivndv/palette-lab-api");
	});

	it("lista las funciones principales de cada proyecto", () => {
		render(<Projects />);

		const codebook = screen.getByText("Codebook").closest("article");
		expect(codebook).not.toBeNull();

		// Cada proyecto declara sus funciones en una lista
		const items = within(codebook as HTMLElement).getAllByRole("listitem");
		expect(items).toHaveLength(5);
		expect(
			within(codebook as HTMLElement).getByText(/one-line summary/i),
		).toBeInTheDocument();
	});

	it("muestra etiquetas tecnológicas en los proyectos", () => {
		render(<Projects />);

		expect(screen.getAllByText("React").length).toBeGreaterThan(0);
		expect(screen.getAllByText("Tailwind CSS").length).toBeGreaterThan(0);
		expect(screen.getAllByText("Node.js").length).toBeGreaterThan(0);
		expect(screen.getAllByText("Vue").length).toBeGreaterThan(0);
	});
});
