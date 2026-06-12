// Testing Library
import { render, screen } from "@testing-library/react";
// Vitest
import { describe, expect, it } from "vitest";
// Páginas
import Experience from "./Experiencia/Experiencia";
import Formacion from "./Formacion/Formacion";
import Skills from "./Skills/Skills";
import SobreMi from "./SobreMi/SobreMi";

// Smoke Test
// Verifica que cada página renderice sin errores (prueba de humo)
describe("Smoke Test - Páginas estáticas", () => {
	it("renderiza Skills sin errores", () => {
		render(<Skills />);
		expect(
			screen.getByText(/Mis Habilidades Tecnológicas/i),
		).toBeInTheDocument();
	});

	it("renderiza Experiencia sin errores", () => {
		render(<Experience />);
		expect(screen.getByText(/Mi Trayectoria Profesional/i)).toBeInTheDocument();
	});

	it("renderiza Formacion sin errores", () => {
		render(<Formacion />);
		expect(screen.getByText(/Mi Formación Académica/i)).toBeInTheDocument();
	});

	it("renderiza Sobre Mí sin errores", () => {
		render(<SobreMi />);
		expect(screen.getByText(/Sobre Mí/i)).toBeInTheDocument();
	});
});
