// @vitest-environment node
// Vitest
import { describe, expect, it } from "vitest";
// Validadores
import { ContactSchema } from "../../../functions/_validators/contactValidator";

const valido = {
	name: "Ivan Cruz",
	email: "ivangtx19@proton.me",
	subject: "Colaboración",
	message: "Hola, me interesa colaborar en un proyecto de desarrollo web.",
	turnstileToken: "token-de-prueba",
};

describe("ContactSchema", () => {
	it("acepta un payload válido", () => {
		const resultado = ContactSchema.safeParse(valido);
		expect(resultado.success).toBe(true);
	});

	it("rechaza el nombre vacío", () => {
		const resultado = ContactSchema.safeParse({ ...valido, name: "" });
		expect(resultado.success).toBe(false);
		expect(resultado.error?.issues[0]?.message).toBe("El nombre es requerido.");
	});

	it("rechaza un nombre de más de 100 caracteres", () => {
		const resultado = ContactSchema.safeParse({
			...valido,
			name: "a".repeat(101),
		});
		expect(resultado.success).toBe(false);
	});

	it("rechaza un email inválido", () => {
		const resultado = ContactSchema.safeParse({
			...valido,
			email: "no-es-email",
		});
		expect(resultado.success).toBe(false);
		expect(resultado.error?.issues[0]?.message).toBe("El email no es valido.");
	});

	it("rechaza el asunto vacío", () => {
		const resultado = ContactSchema.safeParse({ ...valido, subject: "" });
		expect(resultado.success).toBe(false);
		expect(resultado.error?.issues[0]?.message).toBe("El asunto es requerido.");
	});

	it("rechaza un asunto de más de 200 caracteres", () => {
		const resultado = ContactSchema.safeParse({
			...valido,
			subject: "a".repeat(201),
		});
		expect(resultado.success).toBe(false);
	});

	it("rechaza un mensaje de menos de 10 caracteres", () => {
		const resultado = ContactSchema.safeParse({ ...valido, message: "corto" });
		expect(resultado.success).toBe(false);
		expect(resultado.error?.issues[0]?.message).toBe(
			"El mensaje debe tener al menos 10 caracteres.",
		);
	});

	it("rechaza un mensaje de más de 2000 caracteres", () => {
		const resultado = ContactSchema.safeParse({
			...valido,
			message: "a".repeat(2001),
		});
		expect(resultado.success).toBe(false);
	});

	it("rechaza un token de seguridad vacío", () => {
		const resultado = ContactSchema.safeParse({
			...valido,
			turnstileToken: "",
		});
		expect(resultado.success).toBe(false);
		expect(resultado.error?.issues[0]?.message).toBe(
			"Token de seguridad requerido.",
		);
	});

	it("rechaza un payload sin campos", () => {
		const resultado = ContactSchema.safeParse({});
		expect(resultado.success).toBe(false);
	});
});
