// Testing Library
import { render, screen } from "@testing-library/react";
// Vitest
import { describe, expect, it } from "vitest";
// Componentes
import Projects from "./Proyectos";

describe("Página Proyectos", () => {
	it("renderiza el título principal", () => {
		render(<Projects />);
		expect(screen.getByText(/Mis Proyectos Destacados/i)).toBeInTheDocument();
	});

	it("renderiza todos los proyectos del listado", () => {
		render(<Projects />);

		// Verificar que algunos proyectos específicos aparezcan
		expect(screen.getByText("Codebook")).toBeInTheDocument();
		expect(screen.getByText("Fluxbeats")).toBeInTheDocument();
		expect(screen.getByText("Nemi")).toBeInTheDocument();
		expect(screen.getByText("Cosmos")).toBeInTheDocument();
	});

	it("contiene enlaces externos correctamente configurados", () => {
		render(<Projects />);

		// getAllByRole porque hay varios botones de "Código" y "Demo"
		const githubLinks = screen.getAllByRole("link", { name: /código/i });
		const demoLinks = screen.getAllByRole("link", { name: /demo/i });
		const docsLinks = screen.getAllByRole("link", { name: /docs/i });

		// El primer proyecto del listado es Codebook
		expect(demoLinks[0]).toHaveAttribute(
			"href",
			"https://codebook-three.vercel.app",
		);
		expect(docsLinks[0]).toHaveAttribute(
			"href",
			"https://codebook-api-production-6cfa.up.railway.app/docs",
		);
		// Codebook usa "Frontend"/"Backend", así que el primer "Código" sigue siendo Fluxbeats
		expect(githubLinks[0]).toHaveAttribute(
			"href",
			"https://github.com/ivndv/fluxbeats",
		);
	});

	it("muestra etiquetas tecnológicas en los proyectos", () => {
		render(<Projects />);

		// Verificar que algunas tecnologías aparezcan como etiquetas
		expect(screen.getAllByText("React").length).toBeGreaterThan(0);
		expect(screen.getAllByText("Tailwindcss").length).toBeGreaterThan(0);
		expect(screen.getAllByText("Node.js").length).toBeGreaterThan(0);
	});
});
