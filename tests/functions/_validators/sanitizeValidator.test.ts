// @vitest-environment node
// Vitest
import { describe, expect, it } from "vitest";
// Validadores
import { escapeHtml } from "../../../functions/_validators/sanitizeValidator";

describe("escapeHtml", () => {
	it("escapa ampersands", () => {
		expect(escapeHtml("A & B")).toBe("A &amp; B");
	});

	it("escapa etiquetas HTML", () => {
		expect(escapeHtml("<script>alert(1)</script>")).toBe(
			"&lt;script&gt;alert(1)&lt;/script&gt;",
		);
	});

	it("escapa comillas dobles y simples", () => {
		expect(escapeHtml("\"doble\" y 'simple'")).toBe(
			"&quot;doble&quot; y &#039;simple&#039;",
		);
	});

	it("no vuelve a escapar el ampersand ya escapado", () => {
		// El & se escapa primero, así que no debe quedar &amp;lt;
		expect(escapeHtml("<")).toBe("&lt;");
	});

	it("deja intacto el texto sin caracteres especiales", () => {
		expect(escapeHtml("Hola mundo")).toBe("Hola mundo");
	});

	it("devuelve una cadena vacía si la entrada está vacía", () => {
		expect(escapeHtml("")).toBe("");
	});

	it("conserva caracteres unicode y acentos", () => {
		expect(escapeHtml("Colaboración — México")).toBe("Colaboración — México");
	});
});
