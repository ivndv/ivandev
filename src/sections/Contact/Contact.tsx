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
import { useState } from "react";
// Componentes
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Hooks
import { useHoraLocal } from "@/hooks/useHoraLocal";
// Mensajes
import { m } from "@/paraglide/messages";

// Contact
const Contact = () => {
	// 1. Estado del campo copiado (email o teléfono)
	const hora = useHoraLocal();
	const [copiedField, setCopiedField] = useState<string | null>(null);

	// 2. Estado del formulario
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

	// 3. Copiar texto al portapapeles
	const handleCopy = (text: string, field: string) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2000);
	};

	// 4. Actualizar campo del formulario
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	// 5. Enviar formulario
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
				throw new Error(data.error || m.contact_unknown_error());
			}

			setStatus("success");
			setForm({ name: "", email: "", subject: "", message: "" });
			setTurnstileToken(null);
		} catch (err) {
			setStatus("error");
			setErrorMsg(err instanceof Error ? err.message : m.contact_error());
		}
	};

	return (
		<Section seccion="contact">
			<SectionHeader
				title={m.contact_title()}
				subtitle={m.contact_subtitle()}
			/>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
				{/* Canales directos / Info (Linear Style) */}
				<div className="lg:col-span-5 flex flex-col justify-between gap-4 rounded-2xl border border-surface-border bg-surface-bg p-6">
					<div className="space-y-6">
						<div>
							<span className="block text-[11px] font-mono font-medium uppercase tracking-widest text-text-muted/60 mb-2">
								{m.contact_channels_label()}
							</span>
							<h3 className="text-lg sm:text-xl font-bold text-text-main tracking-tight">
								{m.contact_subtitle()}
							</h3>
						</div>

						{/* Lista de canales limpia (idéntica al estilo Overview de Sobre Mí) */}
						<ul className="divide-y divide-surface-border/40">
							{/* Email */}
							<li className="py-3.5 first:pt-0">
								<div className="flex items-center justify-between gap-3 mb-1">
									<div className="flex items-center gap-2">
										<Mail
											size={15}
											className="text-text-muted/60 flex-shrink-0"
										/>
										<span className="text-[11px] font-mono uppercase tracking-wider text-text-muted/60">
											{m.contact_email_title()}
										</span>
									</div>
									<button
										type="button"
										onClick={() => handleCopy("ivangtx19@proton.me", "email")}
										className="inline-flex items-center justify-center min-h-10 min-w-10 rounded-lg text-text-muted/50 hover:text-text-main hover:bg-page-bg transition-all"
										title={m.contact_copy_email()}
										aria-label={m.contact_copy_email()}
									>
										{copiedField === "email" ? (
											<Check size={14} className="text-emerald-500" />
										) : (
											<Copy size={14} />
										)}
									</button>
								</div>
								<a
									href="mailto:ivangtx19@proton.me"
									className="block text-xs sm:text-sm font-semibold text-text-main hover:text-accent transition-colors break-all pl-6"
								>
									ivangtx19@proton.me
								</a>
								<p className="text-[11px] sm:text-xs text-text-muted/70 mt-0.5 pl-6">
									{m.contact_email_desc()}
								</p>
							</li>

							{/* WhatsApp */}
							<li className="py-3.5">
								<div className="flex items-center justify-between gap-3 mb-1">
									<div className="flex items-center gap-2">
										<MessageCircle
											size={15}
											className="text-text-muted/60 flex-shrink-0"
										/>
										<span className="text-[11px] font-mono uppercase tracking-wider text-text-muted/60">
											{m.contact_phone_title()}
										</span>
									</div>
									<button
										type="button"
										onClick={() => handleCopy("+525657455765", "phone")}
										className="inline-flex items-center justify-center min-h-10 min-w-10 rounded-lg text-text-muted/50 hover:text-text-main hover:bg-page-bg transition-all"
										title={m.contact_copy_phone()}
										aria-label={m.contact_copy_phone()}
									>
										{copiedField === "phone" ? (
											<Check size={14} className="text-emerald-500" />
										) : (
											<Copy size={14} />
										)}
									</button>
								</div>
								<a
									href="https://wa.me/525657455765"
									target="_blank"
									rel="noreferrer"
									className="block text-xs sm:text-sm font-semibold text-text-main hover:text-accent transition-colors pl-6"
								>
									+52 56 5745 5765
								</a>
								<p className="text-[11px] sm:text-xs text-text-muted/70 mt-0.5 pl-6">
									{m.contact_phone_desc()}
								</p>
							</li>

							{/* Ubicación */}
							<li className="py-3.5 last:pb-0">
								<div className="flex items-center gap-2 mb-1">
									<MapPin
										size={15}
										className="text-text-muted/60 flex-shrink-0"
									/>
									<span className="text-[11px] font-mono uppercase tracking-wider text-text-muted/60">
										{m.contact_location_title()}
									</span>
								</div>
								<p className="text-xs sm:text-sm font-medium text-text-main pl-6">
									{m.contact_location_value()}
								</p>
							</li>
						</ul>
					</div>

					{/* Hora local del autor */}
					<div className="mt-4 pt-4 border-t border-surface-border/50 flex items-center gap-2 text-xs text-text-muted/80">
						<span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
						<span className="font-mono text-[11px]">
							{m.contact_local_time({ hora })}
						</span>
					</div>
				</div>

				{/* Formulario (Linear Style) */}
				<div className="lg:col-span-7 rounded-2xl border border-surface-border bg-surface-bg p-6 sm:p-7 flex flex-col justify-between">
					<div>
						<div className="mb-6">
							<span className="block text-[11px] font-mono font-medium uppercase tracking-widest text-text-muted/60 mb-1.5">
								{m.contact_form_label()}
							</span>
							<h3 className="text-lg sm:text-xl font-bold text-text-main tracking-tight">
								{m.contact_form_title()}
							</h3>
						</div>

						{/* Mensaje de éxito */}
						{status === "success" && (
							<div className="mb-6 p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center gap-3 text-xs sm:text-sm">
								<Check size={16} className="flex-shrink-0" />
								<span className="font-medium">{m.contact_success()}</span>
							</div>
						)}

						{/* Mensaje de error */}
						{status === "error" && (
							<div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-xs sm:text-sm">
								{errorMsg || m.contact_error()}
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-4">
							{/* Nombre y Email */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<Field
									id="name"
									label={m.contact_label_name()}
									value={form.name}
									onChange={handleChange}
									placeholder={m.contact_placeholder_name()}
									required
								/>
								<Field
									id="email"
									type="email"
									label={m.contact_label_email()}
									value={form.email}
									onChange={handleChange}
									placeholder={m.contact_placeholder_email()}
									required
								/>
							</div>

							{/* Asunto */}
							<Field
								id="subject"
								label={m.contact_label_subject()}
								value={form.subject}
								onChange={handleChange}
								placeholder={m.contact_placeholder_subject()}
								required
							/>

							{/* Mensaje */}
							<Field
								id="message"
								multiline
								rows={4}
								label={m.contact_label_message()}
								value={form.message}
								onChange={handleChange}
								placeholder={m.contact_placeholder_message()}
								required
							/>

							{/* Acciones: Turnstile + Botón enviar alineados */}
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
								<div className="overflow-hidden">
									<Turnstile
										siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
										onSuccess={(token) => setTurnstileToken(token)}
									/>
								</div>

								<Button
									type="submit"
									disabled={status === "loading" || !turnstileToken}
									className="w-full sm:w-auto px-6 py-2.5 self-end"
								>
									{status === "loading" ? (
										<Loader2 size={15} className="animate-spin" />
									) : (
										<Send size={15} />
									)}
									{status === "loading"
										? m.contact_sending()
										: m.contact_send()}
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Contact;
