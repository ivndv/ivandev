// Zod
import { z } from "zod";

// Esquema de validacion para el formulario de contacto
export const ContactSchema = z.object({
	name: z.string().min(1, "El nombre es requerido.").max(100),
	email: z.string().email("El email no es valido."),
	subject: z.string().min(1, "El asunto es requerido.").max(200),
	message: z
		.string()
		.min(10, "El mensaje debe tener al menos 10 caracteres.")
		.max(2000),
	turnstileToken: z.string().min(1, "Token de seguridad requerido."),
});

// Tipo inferido del schema (sin token, solo datos utiles)
export type ContactInput = z.infer<typeof ContactSchema>;
