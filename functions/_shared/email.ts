// Resend
import { Resend } from "resend";
// Sanitizacion
import { escapeHtml } from "./sanitize";

// Construye el template HTML del email de contacto
function buildEmailHtml(
	name: string,
	email: string,
	subject: string,
	message: string,
): string {
	return `
		<h2>Nuevo mensaje desde tu portafolio</h2>
		<p><strong>Nombre:</strong> ${name}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Asunto:</strong> ${subject}</p>
		<hr />
		<p><strong>Mensaje:</strong></p>
		<p>${message.replace(/\n/g, "<br/>")}</p>
	`;
}

// Envia un email de contacto usando Resend con los datos del formulario
export async function sendContactEmail(
	apiKey: string,
	to: string,
	from: string,
	data: { name: string; email: string; subject: string; message: string },
) {
	// 1. Inicializar cliente Resend
	const resend = new Resend(apiKey);
	// 2. Escapar contenido para prevenir XSS
	const safeName = escapeHtml(data.name);
	const safeEmail = escapeHtml(data.email);
	const safeSubject = escapeHtml(data.subject);
	const safeMessage = escapeHtml(data.message);
	// 3. Enviar el email con template HTML
	return resend.emails.send({
		from: `Portafolio <${from}>`,
		to: [to],
		subject: `[Portafolio] ${safeSubject}`,
		html: buildEmailHtml(safeName, safeEmail, safeSubject, safeMessage),
	});
}
