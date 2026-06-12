// URL base de la API de verificacion de Turnstile
const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Verifica el token de Turnstile con la API de Cloudflare
export async function verifyTurnstile(
	secretKey: string,
	token: string,
): Promise<boolean> {
	// 1. Enviar solicitud de verificacion a Cloudflare
	const res = await fetch(VERIFY_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({ secret: secretKey, response: token }),
	});
	// 2. Devolver si el token es valido
	const data = (await res.json()) as { success: boolean };
	return data.success;
}
