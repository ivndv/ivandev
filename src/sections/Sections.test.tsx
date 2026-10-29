// Testing Library
import { render, screen } from "@testing-library/react";
// React Router
import { MemoryRouter } from "react-router-dom";
// Vitest
import { describe, expect, it } from "vitest";
// Secciones
import About from "./About/About";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

// Las secciones usan <Link>, así que necesitan contexto de router
const renderSeccion = (ui: React.ReactElement) =>
	render(<MemoryRouter>{ui}</MemoryRouter>);

// Smoke Test
// Verifica que cada sección renderice sin errores y con su ancla estable
describe("Smoke Test - Secciones", () => {
	it("renderiza About con su ancla y sin disponibilidad", () => {
		const { container } = renderSeccion(<About />);
		expect(screen.getByText(/Professional Profile/i)).toBeInTheDocument();
		expect(container.querySelector('[data-section="about"]')).not.toBeNull();
		// Los tres pilares del perfil
		expect(screen.getByText("Full Stack")).toBeInTheDocument();
		expect(screen.getByText("DevOps")).toBeInTheDocument();
		expect(screen.getByText("Cloud")).toBeInTheDocument();
		// Datos de contexto, sin repetir el stack
		expect(screen.getByText("State of Mexico, Mexico")).toBeInTheDocument();
		expect(screen.queryByText(/Availability/i)).toBeNull();
	});

	it("renderiza Skills sin errores", () => {
		renderSeccion(<Skills />);
		expect(screen.getByText(/My Technical Skills/i)).toBeInTheDocument();
	});

	it("renderiza Experience sin errores", () => {
		renderSeccion(<Experience />);
		expect(screen.getByText(/My Professional Journey/i)).toBeInTheDocument();
	});

	it("renderiza Education sin errores", () => {
		renderSeccion(<Education />);
		expect(screen.getByText(/My Academic Background/i)).toBeInTheDocument();
	});

	it("renderiza Projects sin errores", () => {
		renderSeccion(<Projects />);
		expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
	});
});
