// Testing Library
import { render, screen } from "@testing-library/react";
// React Router
import { MemoryRouter } from "react-router-dom";
// Vitest
import { describe, expect, it } from "vitest";
// i18n
import { LocaleSync } from "@/i18n/LocaleSync";
// Componentes
import Footer from "./Footer";

describe("Componente Footer", () => {
	const renderFooter = (ruta = "/") =>
		render(
			<MemoryRouter initialEntries={[ruta]}>
				<LocaleSync>
					<Footer />
				</LocaleSync>
			</MemoryRouter>,
		);

	it("renderiza información esencial correctamente", () => {
		renderFooter();

		expect(screen.getByText(/Full Stack Web Developer/i)).toBeInTheDocument();

		// Verificar links de redes sociales (por aria-label)
		expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();

		// Verificar Copyright
		expect(screen.getByText(/© 2026 Ivan Cruz/i)).toBeInTheDocument();
	});

	it("enlaza las secciones con las anclas del idioma", () => {
		renderFooter("/es");

		expect(screen.getByRole("link", { name: "Proyectos" })).toHaveAttribute(
			"href",
			"/es#proyectos",
		);
		expect(
			screen.getByRole("link", { name: /Política de Privacidad/i }),
		).toHaveAttribute("href", "/es/privacidad");
	});

	it("contiene enlaces a redes sociales", () => {
		renderFooter();

		const links = screen.getAllByRole("link");
		const githubExists = links.some(
			(link) => link.getAttribute("href") === "https://github.com/ivndv",
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
