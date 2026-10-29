// Testing Library
import { render, screen } from "@testing-library/react";
// React Router
import { MemoryRouter, Route, Routes } from "react-router-dom";
// Vitest
import { describe, expect, it } from "vitest";
// i18n
import { LocaleSync } from "@/i18n/LocaleSync";
// Páginas
import Home from "./Home";

describe("Página Home", () => {
	const renderHome = (ruta = "/") =>
		render(
			<MemoryRouter initialEntries={[ruta]}>
				<LocaleSync>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/es" element={<Home />} />
					</Routes>
				</LocaleSync>
			</MemoryRouter>,
		);

	it("monta todas las secciones en una sola página", () => {
		const { container } = renderHome();

		for (const key of [
			"home",
			"about",
			"skills",
			"experience",
			"projects",
			"education",
			"contact",
		]) {
			expect(container.querySelector(`[data-section="${key}"]`)).not.toBeNull();
		}
	});

	it("usa anclas en inglés en la raíz", () => {
		const { container } = renderHome();

		expect(container.querySelector("#projects")).not.toBeNull();
		expect(container.querySelector("#proyectos")).toBeNull();
	});

	it("traduce las anclas en la ruta española", () => {
		const { container } = renderHome("/es");

		expect(container.querySelector("#proyectos")).not.toBeNull();
		expect(screen.getByText(/Mis Proyectos Destacados/i)).toBeInTheDocument();
	});

	it("asigna el título SEO según el idioma", () => {
		renderHome("/es");

		expect(document.title).toBe("Ivan Cruz | Portafolio");
	});
});
