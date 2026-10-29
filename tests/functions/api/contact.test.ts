// @vitest-environment node
// Vitest
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mocks de los servicios que usa el handler
const { verifyTurnstile, sendContactEmail } = vi.hoisted(() => ({
	verifyTurnstile: vi.fn(),
	sendContactEmail: vi.fn(),
}));

vi.mock("../../../functions/_services/turnstileService", () => ({
	verifyTurnstile,
}));
vi.mock("../../../functions/_services/emailService", () => ({
	sendContactEmail,
}));

// Handler
import { app } from "../../../functions/api/[[route]]";

const env = {
	RESEND_API_KEY: "resend-key",
	RESEND_TO_EMAIL: "destino@example.com",
	RESEND_FROM_EMAIL: "no-reply@mgdc.site",
	TURNSTILE_SECRET_KEY: "turnstile-secret",
};

const cuerpoValido = {
	name: "Ivan Cruz",
	email: "ivan@example.com",
	subject: "Colaboración",
	message: "Mensaje de prueba con longitud suficiente.",
	turnstileToken: "token",
};

const enviar = (body: unknown, bindings: Partial<typeof env> = {}) =>
	app.request(
		"/api/contact",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		},
		{ ...env, ...bindings },
	);

describe("POST /api/contact", () => {
	beforeEach(() => {
		verifyTurnstile.mockReset();
		sendContactEmail.mockReset();
		verifyTurnstile.mockResolvedValue(true);
		sendContactEmail.mockResolvedValue({ data: { id: "1" }, error: null });
		vi.spyOn(console, "error").mockImplementation(() => {});
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("responde 200 cuando todo es válido", async () => {
		const res = await enviar(cuerpoValido);

		expect(res.status).toBe(200);
		await expect(res.json()).resolves.toEqual({ success: true });
	});

	it("responde 400 si el cuerpo es inválido", async () => {
		const res = await enviar({ ...cuerpoValido, email: "no-es-email" });

		expect(res.status).toBe(400);
		const data = (await res.json()) as { success: boolean; error: string };
		expect(data.success).toBe(false);
		expect(data.error).toBe("El email no es valido.");
	});

	it("responde 403 cuando Turnstile rechaza el token", async () => {
		verifyTurnstile.mockResolvedValue(false);

		const res = await enviar(cuerpoValido);

		expect(res.status).toBe(403);
		const data = (await res.json()) as { error: string };
		expect(data.error).toContain("Verificacion de seguridad fallida");
	});

	it("no envía el correo si Turnstile falla", async () => {
		verifyTurnstile.mockResolvedValue(false);

		await enviar(cuerpoValido);

		expect(sendContactEmail).not.toHaveBeenCalled();
	});

	it("responde 500 cuando Resend devuelve error", async () => {
		sendContactEmail.mockResolvedValue({
			data: null,
			error: { message: "fallo" },
		});

		const res = await enviar(cuerpoValido);

		expect(res.status).toBe(500);
		const data = (await res.json()) as { error: string };
		expect(data.error).toBe("Error al enviar el mensaje.");
	});

	it("usa los valores por defecto si faltan los correos del entorno", async () => {
		await enviar(cuerpoValido, { RESEND_TO_EMAIL: "", RESEND_FROM_EMAIL: "" });

		expect(sendContactEmail).toHaveBeenCalledWith(
			"resend-key",
			"ivangtx19@proton.me",
			"onboarding@resend.dev",
			expect.objectContaining({ name: cuerpoValido.name }),
		);
	});

	it("responde 500 si el JSON viene malformado", async () => {
		const res = await app.request(
			"/api/contact",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: "{ no-es-json",
			},
			env,
		);

		expect(res.status).toBe(500);
		const data = (await res.json()) as { error: string };
		expect(data.error).toBe("Error interno del servidor.");
	});

	it("pasa los datos validados al servicio de email", async () => {
		await enviar(cuerpoValido);

		expect(sendContactEmail).toHaveBeenCalledWith(
			"resend-key",
			"destino@example.com",
			"no-reply@mgdc.site",
			{
				name: cuerpoValido.name,
				email: cuerpoValido.email,
				subject: cuerpoValido.subject,
				message: cuerpoValido.message,
			},
		);
	});
});
