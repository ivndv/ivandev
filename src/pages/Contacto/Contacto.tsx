import { Turnstile } from "@marsidev/react-turnstile";
import { Check, Copy, Loader2, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * Página de Contacto que incluye tarjetas de información (email, WhatsApp)
 * y un formulario para enviar mensajes conectado a /api/contact (CF Pages Function).
 */
const Contacto = () => {
	const [copiedField, setCopiedField] = useState<string | null>(null);
	const { ref, isVisible } = useScrollAnimation(0.05);

	const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [errorMsg, setErrorMsg] = useState("");

	const handleCopy = (text: string, field: string) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2000);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMsg("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...form, turnstileToken }),
			});

			const data = (await res.json()) as { success: boolean; error?: string };

			if (!res.ok || !data.success) {
				throw new Error(data.error || "Error desconocido");
			}

			setStatus("success");
			setForm({ name: "", email: "", subject: "", message: "" });
			setTurnstileToken(null);
		} catch (err) {
			setStatus("error");
			setErrorMsg(err instanceof Error ? err.message : "Error al enviar el mensaje.");
		}
	};

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-6xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* ENCABEZADO "SÁNDWICH" */}
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						Ponte en Contacto
					</h2>
					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
						<p className="text-text-muted text-lg italic">
							¿Tienes un proyecto en mente? ¡Hablemos!
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
					{/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO (2/5 del ancho) */}
					<div className="lg:col-span-2 space-y-6">
						{/* Tarjeta Email */}
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm hover:shadow-md transition-shadow group">
							<div className="flex items-start justify-between mb-4">
								<div className="p-3 bg-accent-muted text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
									<Mail size={24} />
								</div>
								<button
									type="button"
									onClick={() => handleCopy("ivangtx19@gmail.com", "email")}
									className="text-text-muted/50 hover:text-text-muted transition-colors"
									title="Copiar correo"
								>
									{copiedField === "email" ? (
										<Check size={20} className="text-green-500" />
									) : (
										<Copy size={20} />
									)}
								</button>
							</div>
							<h3 className="text-lg font-bold text-text-main mb-1">
								Correo Electrónico
							</h3>
							<p className="text-text-muted text-sm mb-4">
								Para consultas detalladas o colaboraciones formales.
							</p>
							<a
								href="mailto:ivangtx19@gmail.com"
								className="text-lg font-semibold text-text-main hover:text-accent transition-colors break-all"
							>
								ivangtx19@gmail.com
							</a>
						</div>
						{/* Tarjeta WhatsApp */}
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm hover:shadow-md transition-shadow group">
							<div className="flex items-start justify-between mb-4">
								<div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
									<MessageCircle size={24} />
								</div>
								<button
									type="button"
									onClick={() => handleCopy("+525667723938", "phone")}
									className="text-text-muted/50 hover:text-text-muted transition-colors"
									title="Copiar número"
								>
									{copiedField === "phone" ? (
										<Check size={20} className="text-green-500" />
									) : (
										<Copy size={20} />
									)}
								</button>
							</div>
							<h3 className="text-lg font-bold text-text-main mb-1">
								WhatsApp / Teléfono
							</h3>
							<p className="text-text-muted text-sm mb-4">
								Respuesta rápida para consultas breves.
							</p>
							<a
								href="https://wa.me/525667723938"
								target="_blank"
								rel="noreferrer"
								className="text-lg font-semibold text-text-main hover:text-green-600 transition-colors"
							>
								+52 56 6772 3938
							</a>
						</div>
						{/* Tarjeta Ubicación */}
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm flex items-center gap-4">
							<div className="p-3 bg-surface-border/50 text-text-muted rounded-xl">
								<MapPin size={24} />
							</div>
							<div>
								<h3 className="font-bold text-text-main">Ubicación</h3>
								<p className="text-text-muted text-sm">
									Chimalhuacán, Estado de México
								</p>
							</div>
						</div>
					</div>

					{/* COLUMNA DERECHA: FORMULARIO (3/5 del ancho) */}
					<div className="lg:col-span-3">
						<div className="bg-surface-bg p-8 md:p-10 rounded-2xl border border-surface-border shadow-lg">
							<h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>

							{/* SUCCESS */}
							{status === "success" && (
								<div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
									<Check size={20} />
									<span className="font-medium">¡Mensaje enviado! Te responderé pronto.</span>
								</div>
							)}

							{/* ERROR */}
							{status === "error" && (
								<div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
									{errorMsg || "Hubo un error al enviar. Intenta de nuevo."}
								</div>
							)}


							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Nombre */}
									<div className="space-y-2">
										<label
											htmlFor="name"
											className="text-sm font-semibold text-text-muted"
										>
											Nombre
										</label>
										<input
											type="text"
											id="name"
											value={form.name}
											onChange={handleChange}
											required
											placeholder="Tu nombre"
											className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none"
										/>
									</div>
									{/* Email */}
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-sm font-semibold text-text-muted"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											value={form.email}
											onChange={handleChange}
											required
											placeholder="tu@correo.com"
											className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none"
										/>
									</div>
								</div>
								{/* Asunto */}
								<div className="space-y-2">
									<label
										htmlFor="subject"
										className="text-sm font-semibold text-text-muted"
									>
										Asunto
									</label>
									<input
										type="text"
										id="subject"
										value={form.subject}
										onChange={handleChange}
										required
										placeholder="¿En qué puedo ayudarte?"
										className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none"
									/>
								</div>
								{/* Mensaje */}
								<div className="space-y-2">
									<label
										htmlFor="message"
										className="text-sm font-semibold text-text-muted"
									>
										Mensaje
									</label>
									<textarea
										id="message"
										rows={5}
										value={form.message}
										onChange={handleChange}
										required
										placeholder="Cuéntame sobre tu proyecto..."
										className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none resize-none"
									/>
								</div>
								{/* Turnstile Widget */}
								<Turnstile
									siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
									onSuccess={setTurnstileToken}
									onExpire={() => setTurnstileToken(null)}
									options={{ theme: "auto" }}
								/>
								{/* Botón Submit */}
								<button
									type="submit"
									disabled={status === "loading" || !turnstileToken}
									className="w-full py-4 px-6 bg-accent hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 transition-all"
								>
									{status === "loading" ? (
										<>
											<Loader2 size={20} className="animate-spin" />
											Enviando...
										</>
									) : (
										<>
											<Send size={20} />
											Enviar Mensaje
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacto;
