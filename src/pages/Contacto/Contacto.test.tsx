import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Contacto from "./Contacto";

// Mock de navigator.clipboard
const mockWriteText = vi.fn();
Object.assign(navigator, {
	clipboard: {
		writeText: mockWriteText,
	},
});

describe("Contacto Page", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		vi.useFakeTimers();
	});

	it("renders contact cards and information", () => {
		render(<Contacto />);

		expect(screen.getByText(/Ponte en Contacto/i)).toBeInTheDocument();
		expect(screen.getByText("ivangtx19@gmail.com")).toBeInTheDocument();
		expect(screen.getByText("+52 56 6772 3938")).toBeInTheDocument();
	});

	it("copies email to clipboard when copy button is clicked", async () => {
		render(<Contacto />);

		const copyButtons = screen.getAllByTitle(/Copiar/i);
		const emailCopyButton = copyButtons[0]; // El primero es el de email según el orden en el JSX

		fireEvent.click(emailCopyButton);

		expect(mockWriteText).toHaveBeenCalledWith("ivangtx19@gmail.com");

		// Verificar que cambie el ícono (aparece el check)
		// En el componente, cuando copiedField === 'email' se muestra un ícono de Check
		// Podemos buscar por la clase o estructura, pero lo más fácil es ver si cambia el estado visual
		// que el componente maneja internamente.
	});

	it("renders the contact form with all fields", () => {
		render(<Contacto />);

		expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Asunto/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Enviar Mensaje/i }),
		).toBeInTheDocument();
	});

	it("allows typing in form fields", () => {
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
