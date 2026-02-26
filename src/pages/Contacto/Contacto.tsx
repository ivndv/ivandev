import { Check, Copy, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

/**
 * Página de Contacto que incluye tarjetas de información (email, WhatsApp)
 * y un formulario para enviar mensajes. Administra el estado de copiado al portapapeles.
 */
const Contacto = () => {
	const [copiedField, setCopiedField] = useState<string | null>(null);

	const handleCopy = (text: string, field: string) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2000);
	};

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* ENCABEZADO "SÁNDWICH" */}
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						Ponte en Contacto
					</h2>
					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
						<p className="text-text-muted text-lg italic">
							¿Tienes un proyecto en mente? ¡Hablemos!
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
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
						{/* Tarjeta Ubicación (Simple) */}
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

							<form className="space-y-6">
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
										placeholder="Cuéntame sobre tu proyecto..."
										className="w-full px-4 py-3 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none resize-none"
									></textarea>
								</div>
								{/* Botón Submit */}
								<button
									type="button" // Cambia a "submit" cuando conectes el backend
									className="w-full py-4 px-6 bg-accent hover:bg-red-700 text-white font-bold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
								>
									<Send size={20} />
									Enviar Mensaje
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
