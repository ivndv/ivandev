import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../context/ThemeContext";
import Header from "./Header";

describe("Header Component", () => {
	const renderHeader = () =>
		render(
			<MemoryRouter>
				<ThemeProvider>
					<Header />
				</ThemeProvider>
			</MemoryRouter>,
		);

	it("renders the logo image", () => {
		renderHeader();

		const logo = screen.getByAltText(/logo/i);
		expect(logo).toBeInTheDocument();
	});

	it("renders navigation links", () => {
		renderHeader();

		expect(screen.getByText("Inicio")).toBeInTheDocument();
		expect(screen.getByText("Proyectos")).toBeInTheDocument();
		expect(screen.getByText("Contacto")).toBeInTheDocument();
	});

	it("toggles mobile menu when hamburger button is clicked", () => {
		renderHeader();

		// Buscamos el botón hamburguesa (tercer botón: desktop toggle, mobile toggle, hamburger)
		const menuButton = screen.getAllByRole("button")[2];

		// Por defecto, el menú móvil no debería estar (los links del menú móvil se renderizan condicionalmente)
		// NOTA: Como screen.getByText fallaría si no lo encuentra, usamos queryByText para verificar ausencia
		expect(screen.queryAllByText("Experiencia").length).toBe(1); // El de desktop siempre está (aunque esté oculto por CSS, RTL lo ve en el DOM)

		// Simulamos el click
		fireEvent.click(menuButton);

		// Ahora deberían aparecer los links del menú móvil duplicados en el DOM
		// El Header renderiza los mismos links en desktop y en el condicional de móvil
		const experienceLinks = screen.getAllByText("Experiencia");
		expect(experienceLinks.length).toBe(2); // Uno en desktop y otro en el menú móvil abierto

		// Simulamos click para cerrar
		fireEvent.click(menuButton);
		expect(screen.getAllByText("Experiencia").length).toBe(1);
	});
});
