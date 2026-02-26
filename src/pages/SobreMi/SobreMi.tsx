import { Briefcase, GraduationCap, MapPin, User } from "lucide-react";

/**
 * Página "Sobre Mí" con información biográfica detallada,
 * historia personal y datos de contacto rápido.
 */
const SobreMi = () => {
	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* ENCABEZADO "SÁNDWICH" */}
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						Sobre Mí
					</h2>
					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
						<p className="text-text-muted text-lg italic">
							Mi historia y quién soy
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-1 space-y-6">
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm">
							<h3 className="text-xl font-bold mb-6 border-b border-surface-border/50 pb-2">
								Información Rápida
							</h3>

							<ul className="space-y-4">
								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<User size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											Edad
										</span>
										<span className="font-medium text-text-main">23 Años</span>
									</div>
								</li>

								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<MapPin size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											Ubicación
										</span>
										<span className="font-medium text-text-main">
											Chimalhuacán, Edomex
										</span>
									</div>
								</li>

								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<GraduationCap size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											Formación
										</span>
										<span className="font-medium text-text-main">
											Autodidacta / Téc. Informática
										</span>
									</div>
								</li>

								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<Briefcase size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											Estado
										</span>
										<span className="font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs inline-block mt-1">
											Open to Work
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className="lg:col-span-2">
						<div className="bg-surface-bg p-8 md:p-10 rounded-2xl border border-surface-border shadow-sm leading-relaxed text-lg text-text-muted space-y-6">
							<p>
								Soy <span className="font-bold text-text-main">Ivan Cruz</span>,
								tengo <span className="font-bold text-text-main">23 años</span>{" "}
								y soy de{" "}
								<span className="font-bold text-text-main">
									Chimalhuacán, Edomex, México
								</span>
								. Desde muy pequeño, me interesé en el mundo de la{" "}
								<span className="font-bold text-text-main">tecnología</span>.
							</p>

							<p>
								Cursé la preparatoria en una carrera técnica que me proporcionó
								las{" "}
								<span className="font-bold text-text-main">
									bases de la informática
								</span>
								. Sin embargo, la pandemia me llevó a dejar la universidad, lo
								que me impulsó hacia un{" "}
								<span className="font-bold text-text-main">
									aprendizaje autodidacta
								</span>
								.
							</p>

							<div>
								"Decidí inscribirme en cursos especializados en{" "}
								<span className="font-bold text-text-main not-italic">
									desarrollo frontend
								</span>{" "}
								de páginas web, lo que me permitió conocer diversos conceptos,
								técnicas y tecnologías enfocadas en el desarrollo web."
							</div>

							<p>
								Además, tuve la oportunidad de crear{" "}
								<span className="font-bold text-text-main">
									varios proyectos
								</span>
								, lo que me brindó{" "}
								<span className="font-bold text-text-main">
									valiosa experiencia
								</span>{" "}
								en el campo.
							</p>

							<p className="pt-4 border-t border-surface-border/50">
								Actualmente, estoy en búsqueda de oportunidadespara entrar al
								mercado laboral y aportar valor con mis habilidades.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SobreMi;
