import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * Página de Experiencia que muestra una línea de tiempo (timeline) con
 * los roles y empresas donde se ha trabajado o realizado prácticas.
 */
const Experience = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const experienceData = [
		{
			id: 1,
			role: "Gestión de Procesos y Soluciones",
			company: "MBQ GROUP BUSINESS SOLUTIONS",
			location: "Remoto",
			date: "Ene 2025 - Abr 2025",
			description:
				"Contrato de prácticas. Apoyo en el análisis y optimización de flujos de trabajo, asegurando la calidad en la entrega de soluciones empresariales y colaborando con equipos multidisciplinarios.",
			skills: [
				"Análisis de Procesos",
				"Gestión",
				"Resolución de Problemas",
				"Trabajo Remoto",
			],
		},
	];

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-4xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* ENCABEZADO */}
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						Mi Trayectoria Profesional
					</h2>
					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
						<p className="text-text-muted text-lg italic">
							Experiencia y Formación
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
					</div>
				</div>

				{/* TIMELINE CONTAINER */}
				<div className="relative border-l-2 border-surface-border ml-4 md:ml-6 space-y-12">
					{experienceData.map((job) => (
						<div key={job.id} className="relative pl-8 md:pl-12 group">
							{/* PUNTO DE LA LÍNEA DE TIEMPO */}
							<div className="absolute -left-[9px] md:-left-[11px] top-0 p-1 bg-page-bg border-2 border-surface-border rounded-full group-hover:border-accent group-hover:scale-110 z-10">
								<div className="w-2 h-2 md:w-3 md:h-3 bg-text-muted rounded-full group-hover:bg-accent"></div>
							</div>

							{/* TARJETA DE EXPERIENCIA */}
							<div className="bg-surface-bg p-6 rounded-xl border border-surface-border shadow-sm hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:border-accent/30 relative overflow-hidden">
								{/* Decoración de fondo */}
								<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
									<Briefcase
										size={80}
										className="text-accent transform rotate-12"
									/>
								</div>

								{/* Encabezado */}
								<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4 relative z-10">
									<div>
										<h3 className="text-xl font-bold text-text-main">
											{job.role}
										</h3>
										<div className="flex items-center gap-2 text-text-muted font-medium mt-1">
											<Building2 size={16} />
											<span>{job.company}</span>
										</div>
									</div>

									{/* Fecha Badge */}
									<div className="flex items-center gap-1 text-xs font-semibold text-text-muted bg-surface-border/50 px-3 py-1 rounded-full whitespace-nowrap">
										<Calendar size={12} />
										{job.date}
									</div>
								</div>

								{/* Ubicación */}
								<div className="flex items-center gap-2 text-sm text-text-muted mb-4">
									<MapPin size={14} />
									{job.location}
								</div>

								{/* Descripción */}
								<p className="text-text-muted text-sm leading-relaxed mb-6">
									{job.description}
								</p>

								{/* Tags de Tecnologías/Habilidades */}
								<div className="flex flex-wrap gap-2">
									{job.skills.map((skill) => (
										<span
											key={skill}
											className="px-3 py-1 text-xs font-medium text-text-muted bg-surface-border/30 rounded-md border border-surface-border/50"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
