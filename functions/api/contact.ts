// Hono
import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
// Validaciones
import { ContactSchema } from "../_shared/schema";
// Turnstile
import { verifyTurnstile } from "../_shared/turnstile";
// Email
import { sendContactEmail } from "../_shared/email";

// Bindings del Worker: claves de Resend y Turnstile
type Env = {
	RESEND_API_KEY: string;
	RESEND_TO_EMAIL: string;
	RESEND_FROM_EMAIL?: string;
	TURNSTILE_SECRET_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

// POST /api/contact - Envia un mensaje con validacion, captcha y email
app.post("/api/contact", async (c) => {
	try {
		// 1. Validar cuerpo de la solicitud con Zod
		const body = await c.req.json();
		const parsed = ContactSchema.safeParse(body);
		if (!parsed.success) {
			const firstError =
				parsed.error.issues[0]?.message ?? "Datos invalidos.";
			return c.json({ success: false, error: firstError }, 400);
		}

		const { name, email, subject, message, turnstileToken } = parsed.data;

		// 2. Verificar captcha con Turnstile
		const isValid = await verifyTurnstile(
			c.env.TURNSTILE_SECRET_KEY,
			turnstileToken,
		);
		if (!isValid) {
			return c.json(
				{
					success: false,
					error: "Verificacion de seguridad fallida. Intenta de nuevo.",
				},
				403,
			);
		}

		// 3. Enviar email mediante Resend
		const toEmail = c.env.RESEND_TO_EMAIL || "ivangtx19@gmail.com";
		const fromEmail =
			c.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

		const { error } = await sendContactEmail(
			c.env.RESEND_API_KEY,
			toEmail,
			fromEmail,
			{ name, email, subject, message },
		);

		if (error) {
			console.error("[Contact API] Resend error:", error);
			return c.json(
				{ success: false, error: "Error al enviar el mensaje." },
				500,
			);
		}

		return c.json({ success: true });
	} catch (err) {
		console.error("[Contact API] Error:", err);
		return c.json(
			{ success: false, error: "Error interno del servidor." },
			500,
		);
	}
});

export const onRequest = handle(app);
