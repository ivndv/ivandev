import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
import { Resend } from "resend";

type Env = {
    RESEND_API_KEY: string;
    RESEND_TO_EMAIL: string;
};

const app = new Hono<{ Bindings: Env }>();

app.post("/api/contact", async (c) => {
    const body = await c.req.json<{
        name: string;
        email: string;
        subject: string;
        message: string;
    }>();

    const { name, email, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
        return c.json({ success: false, error: "Todos los campos son requeridos." }, 400);
    }

    const resend = new Resend(c.env.RESEND_API_KEY);
    const toEmail = c.env.RESEND_TO_EMAIL || "ivangtx19@gmail.com";

    const { error } = await resend.emails.send({
        from: "Portafolio <onboarding@resend.dev>", // Cambiar por tu dominio verificado
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
