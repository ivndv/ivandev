// @vitest-environment node
// Vitest
import { afterEach, describe, expect, it, vi } from "vitest";
// Servicios
import { verifyTurnstile } from "../../../functions/_services/turnstileService";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

describe("verifyTurnstile", () => {
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it("devuelve true cuando Cloudflare valida el token", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			json: async () => ({ success: true }),
		});
		vi.stubGlobal("fetch", fetchMock);

		await expect(verifyTurnstile("secreto", "token")).resolves.toBe(true);
	});

	it("devuelve false cuando Cloudflare rechaza el token", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			json: async () => ({ success: false }),
		});
		vi.stubGlobal("fetch", fetchMock);

		await expect(verifyTurnstile("secreto", "token")).resolves.toBe(false);
	});

	it("llama al endpoint de siteverify con POST y formulario", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			json: async () => ({ success: true }),
		});
		vi.stubGlobal("fetch", fetchMock);

		await verifyTurnstile("secreto", "token");

		const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
		expect(url).toBe(VERIFY_URL);
		expect(init.method).toBe("POST");
		expect(init.headers).toEqual({
			"Content-Type": "application/x-www-form-urlencoded",
		});
	});

	it("envía el secreto y el token en el cuerpo", async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			json: async () => ({ success: true }),
		});
		vi.stubGlobal("fetch", fetchMock);

		await verifyTurnstile("secreto", "token-123");

		const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
		const cuerpo = init.body as URLSearchParams;
		expect(cuerpo.get("secret")).toBe("secreto");
		expect(cuerpo.get("response")).toBe("token-123");
	});

	it("propaga el error si la red falla", async () => {
		vi.stubGlobal(
			"fetch",
			vi.fn().mockRejectedValue(new Error("network down")),
		);

		await expect(verifyTurnstile("secreto", "token")).rejects.toThrow(
			"network down",
		);
	});
});
