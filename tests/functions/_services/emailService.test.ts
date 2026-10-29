// @vitest-environment node
// Vitest
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock de Resend: capturamos lo que se envía
const { send } = vi.hoisted(() => ({ send: vi.fn() }));

vi.mock("resend", () => ({
	Resend: class {
		emails = { send };
	},
}));

// Servicios
import { sendContactEmail } from "../../../functions/_services/emailService";

const datos = {
	name: "Ivan <b>Cruz</b>",
	email: "ivan@example.com",
	subject: "Hola & adiós",
	message: "Primera línea\nSegunda línea",
};

describe("sendContactEmail", () => {
	beforeEach(() => {
		send.mockReset();
		send.mockResolvedValue({ data: { id: "email-1" }, error: null });
	});

	it("envía el correo con el remitente formateado", async () => {
		await sendContactEmail(
			"api-key",
			"destino@example.com",
			"no-reply@mgdc.site",
			datos,
		);

		const [payload] = send.mock.calls[0] as [Record<string, unknown>];
		expect(payload.from).toBe("Portafolio <no-reply@mgdc.site>");
	});

	it("envía al destinatario como arreglo", async () => {
		await sendContactEmail(
			"api-key",
			"destino@example.com",
			"no-reply@mgdc.site",
			datos,
		);

		const [payload] = send.mock.calls[0] as [{ to: string[] }];
		expect(payload.to).toEqual(["destino@example.com"]);
	});

	it("prefija el asunto con [Portafolio]", async () => {
		await sendContactEmail(
			"api-key",
			"destino@example.com",
			"no-reply@mgdc.site",
			datos,
		);

		const [payload] = send.mock.calls[0] as [{ subject: string }];
		expect(payload.subject).toBe("[Portafolio] Hola &amp; adiós");
	});

	it("escapa el HTML del mensaje para evitar XSS", async () => {
		await sendContactEmail(
			"api-key",
			"destino@example.com",
			"no-reply@mgdc.site",
			datos,
		);

		const [payload] = send.mock.calls[0] as [{ html: string }];
		// El <b> del nombre debe llegar escapado
		expect(payload.html).toContain("Ivan &lt;b&gt;Cruz&lt;/b&gt;");
		expect(payload.html).not.toContain("<b>Cruz</b>");
	});

	it("convierte los saltos de línea en <br/>", async () => {
		await sendContactEmail(
			"api-key",
			"destino@example.com",
			"no-reply@mgdc.site",
			datos,
		);

		const [payload] = send.mock.calls[0] as [{ html: string }];
		expect(payload.html).toContain("Primera línea<br/>Segunda línea");
	});

	it("devuelve el error de Resend sin lanzar excepción", async () => {
		send.mockResolvedValue({
			data: null,
			error: { message: "dominio no verificado" },
		});

		const resultado = await sendContactEmail(
			"api-key",
			"destino@example.com",
			"no-reply@mgdc.site",
			datos,
		);

		expect(resultado.error).toEqual({ message: "dominio no verificado" });
	});
});
