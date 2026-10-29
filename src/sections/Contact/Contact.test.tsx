// Testing Library
import { fireEvent, render, screen } from "@testing-library/react";
// Vitest
import { beforeEach, describe, expect, it, vi } from "vitest";
// Secciones
import Contact from "./Contact";

// Mock de navigator.clipboard
const mockWriteText = vi.fn();
Object.assign(navigator, {
	clipboard: {
		writeText: mockWriteText,
	},
});

describe("Sección Contacto", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.useFakeTimers();
	});

	it("renderiza tarjetas de contacto e información", () => {
		render(<Contact />);

		expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
		expect(screen.getByText("ivangtx19@proton.me")).toBeInTheDocument();
		expect(screen.getByText("+52 56 5745 5765")).toBeInTheDocument();
	});

	it("copia el email al portapapeles al hacer clic en copiar", () => {
		render(<Contact />);

		// 1. Obtener botones de copiar
		const copyButtons = screen.getAllByTitle(/Copy/i);
		const emailCopyButton = copyButtons[0]; // El primero es el de email

		fireEvent.click(emailCopyButton);

		expect(mockWriteText).toHaveBeenCalledWith("ivangtx19@proton.me");
	});

	it("renderiza el formulario con todos los campos", () => {
		render(<Contact />);

		expect(
			screen.getByRole("textbox", { name: /^Name$/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: /^Email$/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: /^Subject$/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: /^Message$/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Send Message/i }),
		).toBeInTheDocument();
	});

	it("permite escribir en los campos del formulario", () => {
		render(<Contact />);

		const nameInput = screen.getByRole("textbox", {
			name: /^Name$/i,
		}) as HTMLInputElement;
		const emailInput = screen.getByRole("textbox", {
			name: /^Email$/i,
		}) as HTMLInputElement;
		const messageInput = screen.getByRole("textbox", {
			name: /^Message$/i,
		}) as HTMLTextAreaElement;

		fireEvent.change(nameInput, { target: { value: "Ivan Test" } });
		fireEvent.change(emailInput, { target: { value: "test@example.com" } });
		fireEvent.change(messageInput, {
			target: { value: "Hola, este es un test" },
		});

		expect(nameInput.value).toBe("Ivan Test");
		expect(emailInput.value).toBe("test@example.com");
		expect(messageInput.value).toBe("Hola, este es un test");
	});
});
