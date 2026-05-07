import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer Component", () => {
	it("renders correctly with essential information", () => {
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

	it("contains links to social media", () => {
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
