// Turnstile
import { Turnstile } from "@marsidev/react-turnstile";
// Iconos
import {
	Check,
	Copy,
	Loader2,
	Mail,
	MapPin,
	MessageCircle,
	Send,
} from "lucide-react";
// React
import { useEffect, useState } from "react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// Contacto
const Contacto = () => {
	// 1. Estado del campo copiado (email o teléfono)
	const [copiedField, setCopiedField] = useState<string | null>(null);
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	// 2. Actualizar título SEO
	useEffect(() => { document.title = t.seo.contacto; }, [t.seo.contacto]);

	// 3. Estado del formulario
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errorMsg, setErrorMsg] = useState("");

	// 4. Copiar texto al portapapeles
	const handleCopy = (text: string, field: string) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2000);
	};

	// 5. Actualizar campo del formulario
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	// 6. Enviar formulario
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
			setErrorMsg(
				err instanceof Error ? err.message : t.contacto.error,
			);
		}
	};

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-6xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						{t.contacto.title}
					</h2>
					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
						<p className="text-text-muted text-lg italic">
							{t.contacto.subtitle}
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
					{/* Tarjetas de contacto */}
					<div className="lg:col-span-2 space-y-6">
						{/* Email */}
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm hover:shadow-md transition-shadow group">
							<div className="flex items-start justify-between mb-4">
								<div className="p-3 bg-accent-muted text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
									<Mail size={24} />
								</div>
								<button
									type="button"
									onClick={() => handleCopy("ivangtx19@gmail.com", "email")}
									className="text-text-muted/50 hover:text-text-muted transition-colors"
									title={t.contacto.copiar}
								>
									{copiedField === "email" ? (
										<Check size={20} className="text-green-500" />
									) : (
										<Copy size={20} />
									)}
								</button>
							</div>
							<h3 className="text-lg font-bold text-text-main mb-1">
								{t.contacto.emailTitulo}
							</h3>
							<p className="text-text-muted text-sm mb-4">
								{t.contacto.emailDesc}
							</p>
							<a
								href="mailto:ivangtx19@gmail.com"
								className="text-lg font-semibold text-text-main hover:text-accent transition-colors break-all"
							>
								ivangtx19@gmail.com
							</a>
						</div>

						{/* WhatsApp */}
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm hover:shadow-md transition-shadow group">
							<div className="flex items-start justify-between mb-4">
								<div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
									<MessageCircle size={24} />
								</div>
								<button
									type="button"
									onClick={() => handleCopy("+525657455765", "phone")}
									className="text-text-muted/50 hover:text-text-muted transition-colors"
									title={t.contacto.copiarPhone}
								>
									{copiedField === "phone" ? (
										<Check size={20} className="text-green-500" />
									) : (
										<Copy size={20} />
									)}
								</button>
							</div>
							<h3 className="text-lg font-bold text-text-main mb-1">
								{t.contacto.whatsappTitulo}
							</h3>
							<p className="text-text-muted text-sm mb-4">
								{t.contacto.whatsappDesc}
							</p>
							<a
								href="https://wa.me/525657455765"
								target="_blank"
								rel="noreferrer"
								className="text-lg font-semibold text-text-main hover:text-green-600 transition-colors"
							>
								+52 56 5745 5765
							</a>
						</div>

						{/* Ubicación */}
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm flex items-center gap-4">
							<div className="p-3 bg-surface-border/50 text-text-muted rounded-xl">
								<MapPin size={24} />
							</div>
							<div>
								<h3 className="font-bold text-text-main">{t.contacto.ubicacionTitulo}</h3>
								<p className="text-text-muted text-sm">{t.contacto.ubicacionValor}</p>
							</div>
						</div>
					</div>

					{/* Formulario */}
					<div className="lg:col-span-3">
						<div className="bg-surface-bg p-8 md:p-10 rounded-2xl border border-surface-border shadow-lg">
							<h3 className="text-2xl font-bold mb-6">{t.contacto.formTitulo}</h3>

							{/* Mensaje de éxito */}
							{status === "success" && (
								<div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
									<Check size={20} />
									<span className="font-medium">{t.contacto.success}</span>
								</div>
							)}

							{/* Mensaje de error */}
							{status === "error" && (
								<div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
									{errorMsg || t.contacto.error}
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Nombre y Email */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label
											htmlFor="name"
											className="text-sm font-semibold text-text-muted"
										>
											{t.contacto.labelNombre}
										</label>
										<input
											type="text"
											id="name"
											value={form.name}
											onChange={handleChange}
											required
											placeholder={t.contacto.placeholderNombre}
											className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-sm font-semibold text-text-muted"
										>
											{t.contacto.labelEmail}
										</label>
										<input
											type="email"
											id="email"
											value={form.email}
											onChange={handleChange}
											required
											placeholder={t.contacto.placeholderEmail}
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
										{t.contacto.labelAsunto}
									</label>
									<input
										type="text"
										id="subject"
										value={form.subject}
										onChange={handleChange}
										required
										placeholder={t.contacto.placeholderAsunto}
										className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none"
									/>
								</div>

								{/* Mensaje */}
								<div className="space-y-2">
									<label
										htmlFor="message"
										className="text-sm font-semibold text-text-muted"
									>
										{t.contacto.labelMensaje}
									</label>
									<textarea
										id="message"
										rows={5}
										value={form.message}
										onChange={handleChange}
										required
										placeholder={t.contacto.placeholderMensaje}
										className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none resize-none"
									/>
								</div>

								{/* Turnstile */}
								<Turnstile
									siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
									onSuccess={(token) => setTurnstileToken(token)}
								/>

								{/* Botón enviar */}
								<button
									type="submit"
									disabled={status === "loading" || !turnstileToken}
									className="w-full bg-accent hover:opacity-90 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
								>
									{status === "loading" ? (
										<Loader2 size={20} className="animate-spin" />
									) : (
										<Send size={20} />
									)}
									{status === "loading" ? t.contacto.enviando : t.contacto.enviar}
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
