// Testing Library
import { fireEvent, render, screen } from "@testing-library/react";
// React Router
import { MemoryRouter } from "react-router-dom";
// Vitest
import { describe, expect, it } from "vitest";
// Componentes
import Header from "./Header";

describe("Componente Header", () => {
	// Renderizar Header envuelto en MemoryRouter
	const renderHeader = () =>
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);

	it("renderiza el logo", () => {
		renderHeader();

		const logo = screen.getByAltText(/logo/i);
		expect(logo).toBeInTheDocument();
	});

	it("renderiza los enlaces de navegación", () => {
		renderHeader();

		const nav = screen.getAllByRole("navigation")[0];
		expect(nav).toBeInTheDocument();
	});

	it("abre y cierra el menú mobile al hacer clic en el hamburguesa", () => {
		renderHeader();

		// 1. Obtener botón de menú (último botón)
		const buttons = screen.getAllByRole("button");
		const menuButton = buttons[buttons.length - 1];

		const navLinks = document.querySelectorAll("nav a");
		const desktopCount = navLinks.length;

		// 2. Abrir menú y verificar que aparecen más enlaces
		fireEvent.click(menuButton);

		const allLinks = document.querySelectorAll("a");
		expect(allLinks.length).toBeGreaterThan(desktopCount);

		// 3. Cerrar menú y verificar que vuelve al estado inicial
		fireEvent.click(menuButton);

		const linksAfterClose = document.querySelectorAll("nav a");
		expect(linksAfterClose.length).toBe(desktopCount);
	});
});
