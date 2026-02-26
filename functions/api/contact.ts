import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
import { Resend } from "resend";
import { z } from "zod";

type Env = {
    RESEND_API_KEY: string;
    RESEND_TO_EMAIL: string;
    TURNSTILE_SECRET_KEY: string;
};

const ContactSchema = z.object({
    name: z.string().min(1, "El nombre es requerido.").max(100),
    email: z.string().email("El email no es válido."),
    subject: z.string().min(1, "El asunto es requerido.").max(200),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(2000),
    turnstileToken: z.string().min(1, "Token de seguridad requerido."),
});

const app = new Hono<{ Bindings: Env }>();

app.post("/api/contact", async (c) => {
    const body = await c.req.json();

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
        const firstError = parsed.error.issues[0]?.message ?? "Datos inválidos.";
        return c.json({ success: false, error: firstError }, 400);
    }

    const { name, email, subject, message, turnstileToken } = parsed.data;

    // Verificar Turnstile
    const tsRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: c.env.TURNSTILE_SECRET_KEY,
                response: turnstileToken,
            }),
        },
    );

    const tsData = (await tsRes.json()) as { success: boolean };
    if (!tsData.success) {
        return c.json({ success: false, error: "Verificación de seguridad fallida. Intenta de nuevo." }, 403);
    }

    // Enviar email via Resend
    const resend = new Resend(c.env.RESEND_API_KEY);
    const toEmail = c.env.RESEND_TO_EMAIL || "ivangtx19@gmail.com";

    const { error } = await resend.emails.send({
        from: "Portafolio <onboarding@resend.dev>",
        to: [toEmail],
        subject: `[Portafolio] ${subject}`,
        html: `
      <h2>Nuevo mensaje desde tu portafolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <hr />
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
    });

    if (error) {
        console.error("Resend error:", error);
        return c.json({ success: false, error: "Error al enviar el mensaje." }, 500);
    }

    return c.json({ success: true });
});

export const onRequest = handle(app);
