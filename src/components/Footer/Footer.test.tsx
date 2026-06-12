// Testing Library
import { render, screen } from "@testing-library/react";
// React Router
import { MemoryRouter } from "react-router-dom";
// Vitest
import { describe, expect, it } from "vitest";
// Componentes
import Footer from "./Footer";

describe("Componente Footer", () => {
	it("renderiza información esencial correctamente", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>,
		);

		// Verificar descripción
		expect(
			screen.getByText(/Desarrollador Web Full Stack/i),
		).toBeInTheDocument();

		// Verificar links de redes sociales (ahora por aria-label)
		expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /inicio/i })).toBeInTheDocument();

		// Verificar Copyright
		expect(screen.getByText(/© 2026 Ivan Cruz/i)).toBeInTheDocument();
	});

	it("contiene enlaces a redes sociales", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>,
		);

		const links = screen.getAllByRole("link");
		const githubExists = links.some(
			(link) => link.getAttribute("href") === "https://github.com/Ivandv19",
		);
		const linkedinExists = links.some(
			(link) =>
				link.getAttribute("href") ===
				"https://www.linkedin.com/in/ivan-cruz-1906mx",
		);

		expect(githubExists).toBe(true);
		expect(linkedinExists).toBe(true);
	});
});
