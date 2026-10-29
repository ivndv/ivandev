// Testing Library
import { fireEvent, render, screen } from "@testing-library/react";
// React Router
import { MemoryRouter, useLocation } from "react-router-dom";
// Vitest
import { describe, expect, it } from "vitest";
// i18n
import { LocaleSync } from "@/i18n/LocaleSync";
// Componentes
import Header from "./Header";

// Sonda para inspeccionar la ruta resultante tras cambiar de idioma
const LocationProbe = () => {
	const { pathname, hash } = useLocation();
	return <span data-testid="ruta">{`${pathname}${hash}`}</span>;
};

describe("Componente Header", () => {
	const renderHeader = (ruta = "/") =>
		render(
			<MemoryRouter initialEntries={[ruta]}>
				<LocaleSync>
					<Header />
					<LocationProbe />
				</LocaleSync>
			</MemoryRouter>,
		);

	it("renderiza el logo", () => {
		renderHeader();
		expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
	});

	it("navega por anclas localizadas en inglés", () => {
		renderHeader();

		const proyectos = screen.getAllByRole("link", { name: "Projects" });
		expect(proyectos.length).toBeGreaterThan(0);
		expect(proyectos[0]).toHaveAttribute("href", "/#projects");
	});

	it("usa anclas traducidas en la ruta española", () => {
		renderHeader("/es");

		const proyectos = screen.getAllByRole("link", { name: "Proyectos" });
		expect(proyectos[0]).toHaveAttribute("href", "/es#proyectos");
	});

	it("marca la sección activa al entrar en la página", () => {
		renderHeader();

		const inicio = screen.getAllByRole("link", { name: "Home" })[0];
		expect(inicio).toHaveAttribute("aria-current", "true");
		expect(inicio).toHaveAttribute("href", "/#home");
	});

	it("cambia de idioma conservando la sección", () => {
		renderHeader();

		fireEvent.click(screen.getAllByRole("button", { name: "Español" })[0]);

		expect(screen.getByTestId("ruta")).toHaveTextContent("/es#inicio");
	});

	it("abre y cierra el menú mobile", () => {
		renderHeader();

		const boton = screen.getByRole("button", { name: /abrir menú|open menu/i });
		expect(boton).toHaveAttribute("aria-expanded", "false");

		fireEvent.click(boton);

		expect(boton).toHaveAttribute("aria-expanded", "true");
	});

	it("alterna el tema desde el selector", () => {
		renderHeader();

		const boton = screen.getAllByRole("button", { name: /tema|theme/i })[0];
		expect(boton).toHaveAttribute("aria-pressed", "false");

		fireEvent.click(boton);

		expect(boton).toHaveAttribute("aria-pressed", "true");
	});
});
