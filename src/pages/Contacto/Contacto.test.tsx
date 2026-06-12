// Testing Library
import { fireEvent, render, screen } from "@testing-library/react";
// Vitest
import { beforeEach, describe, expect, it, vi } from "vitest";
// Componentes
import Contacto from "./Contacto";

// Mock de navigator.clipboard
const mockWriteText = vi.fn();
Object.assign(navigator, {
	clipboard: {
		writeText: mockWriteText,
	},
});

describe("Página Contacto", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.useFakeTimers();
	});

	it("renderiza tarjetas de contacto e información", () => {
		render(<Contacto />);

		expect(screen.getByText(/Ponte en Contacto/i)).toBeInTheDocument();
		expect(screen.getByText("ivangtx19@gmail.com")).toBeInTheDocument();
		expect(screen.getByText("+52 56 5745 5765")).toBeInTheDocument();
	});

	it("copia el email al portapapeles al hacer clic en copiar", async () => {
		render(<Contacto />);

		// 1. Obtener botones de copiar
		const copyButtons = screen.getAllByTitle(/Copiar/i);
		const emailCopyButton = copyButtons[0]; // El primero es el de email

		fireEvent.click(emailCopyButton);

		expect(mockWriteText).toHaveBeenCalledWith("ivangtx19@gmail.com");
	});

	it("renderiza el formulario con todos los campos", () => {
		render(<Contacto />);

		expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Asunto/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Enviar Mensaje/i }),
		).toBeInTheDocument();
	});

	it("permite escribir en los campos del formulario", () => {
		render(<Contacto />);

		const nameInput = screen.getByLabelText(/Nombre/i) as HTMLInputElement;
		const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
		const messageInput = screen.getByLabelText(
			/Mensaje/i,
		) as HTMLTextAreaElement;

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
