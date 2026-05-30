import { useEffect } from "react";
import {
	Award,
	BookOpen,
	Calendar,
	CheckCircle2,
	GraduationCap,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

const Formacion = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	useEffect(() => { document.title = t.seo.formacion; }, [t.seo.formacion]);
	const educationData = [
		{
			id: 1,
			institution: "Código Facilito",
			title: "Desarrollador Backend | DevOps & Cloud Computing",
			date: "Nov 2024 - Dic 2025",
			type: "Bootcamp / Especialización",
			description:
				"Formación especializada en arquitectura Backend y despliegue en la nube. Enfoque en Microsoft Azure, CI/CD y buenas prácticas de desarrollo.",
			skills: [
				"Cloud Computing",
				"Microsoft Azure",
				"DevOps",
				"Node.js",
				"IA Generativa",
				"AngularJS",
			],
			logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGvT-5yZf8V3w/company-logo_200_200/company-logo_200_200/0/1719256667793?e=1741824000&v=beta&t=H-SgF_qXz-uE7j9c7d8s9d8s9d8s9d8s9d8s9d8s9d8",
			certified: true,
		},
		{
			id: 2,
			institution: "Alura Latam / Oracle Next Education",
			title: "Desarrollador Frontend & Cloud Computing (OCI)",
			date: "Ene 2024 - Oct 2024",
			type: "Bootcamp / Especialización",
			description:
				"Graduado del programa Oracle Next Education (ONE). Desarrollo de aplicaciones web completas, bases de datos y fundamentos de infraestructura en la nube.",
			skills: [
				"React.js",
				"SQL & MySQL",
				"Oracle Cloud (OCI)",
				"Git/GitHub",
				"Metodologías Ágiles",
				"HTML5 & CSS3",
			],
			logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGHj4y1yZf8V3w/company-logo_200_200/company-logo_200_200/0/1630616667793?e=1741824000&v=beta&t=uE7j9c7d8s9d8s9d8s9d8s9d8s9d8s9d8s9d8s9d8",
			certified: true,
		},
		{
			id: 3,
			institution: "CECYTEM Chimalhuacán II",
			title: "Técnico en Programación",
			date: "Jun 2017 - Jun 2020",
			type: "Bachillerato Tecnológico",
			description:
				"Bases fundamentales de la lógica de programación, mantenimiento de equipos, redes informáticas y desarrollo de software estructurado.",
			skills: [
				"Lógica de Programación",
				"Bases de Datos",
				"Redes",
				"Soporte Técnico",
				"Java (Fundamentos)",
			],
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8&s",
			certified: true,
		},
	];

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-5xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						{t.formacion.title}
					</h2>
					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
						<p className="text-text-muted text-lg italic">
							{t.formacion.subtitle}
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
					</div>
				</div>

				<div className="space-y-8">
					{educationData.map((edu) => (
						<div
							key={edu.id}
							className="bg-surface-bg rounded-2xl p-6 md:p-8 border border-surface-border shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] relative overflow-hidden group"
						>
							<div className="absolute -right-6 -bottom-6 text-page-bg group-hover:text-accent-muted/50">
								<Award size={180} strokeWidth={0.5} />
							</div>
							<div className="relative z-10 flex flex-col md:flex-row gap-6">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<span className="bg-accent-muted text-accent p-2 rounded-lg">
											<GraduationCap size={24} />
										</span>
										<span className="text-sm font-bold text-accent uppercase tracking-wider">
											{edu.type}
										</span>
									</div>
									<h3 className="text-2xl font-bold text-text-main mb-2">
										{edu.title}
									</h3>

									<div className="flex flex-wrap items-center gap-4 text-text-muted mb-4 font-medium">
										<span className="flex items-center gap-1.5">
											<BookOpen size={16} className="text-accent" />
											{edu.institution}
										</span>
										<span className="hidden md:inline text-surface-border">|</span>
										<span className="flex items-center gap-1.5 bg-surface-border/50 px-3 py-1 rounded-full text-sm text-text-main">
											<Calendar size={14} />
											{edu.date}
										</span>
									</div>

									<p className="text-text-muted leading-relaxed mb-6 max-w-2xl">
										{edu.description}
									</p>

									<div>
										<h4 className="text-sm font-bold text-text-main mb-3 flex items-center gap-2">
											<CheckCircle2 size={14} className="text-accent" />{" "}
											Competencias Adquiridas:
										</h4>
										<div className="flex flex-wrap gap-2">
											{edu.skills.map((skill) => (
												<span
													key={skill}
													className="px-3 py-1 bg-surface-border/30 text-text-muted text-xs font-semibold rounded-md border border-surface-border group-hover:border-accent-muted group-hover:bg-page-bg transition-colors"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>
								<div className="md:w-1/4 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-surface-border/50 pt-6 md:pt-0 md:pl-6 mt-6 md:mt-0">
									{edu.certified ? (
										<div className="text-center">
											<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
												<Award size={32} />
											</div>
											<span className="block font-bold text-green-700">
												Completado
											</span>
											<span className="text-xs text-green-600">
												Certificado obtenido
											</span>
										</div>
									) : (
										<div className="text-center">
											<div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 animate-pulse">
												<BookOpen size={32} />
											</div>
											<span className="block font-bold text-blue-700">
												En Curso
											</span>
											<span className="text-xs text-blue-600">
												Actualmente cursando
											</span>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Formacion;
