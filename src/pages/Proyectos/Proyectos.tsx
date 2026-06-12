// React
import { useEffect } from "react";
// Iconos
import {
	BookOpen,
	Code2,
	Dog,
	ExternalLink,
	Lock,
	MonitorPlay,
	Rocket,
} from "lucide-react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
// Datos
import { projects } from "@/data/projects";

// Proyectos
const Projects = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	// 1. Actualizar título SEO
	useEffect(() => { document.title = t.seo.proyectos; }, [t.seo.proyectos]);

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-7xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						{t.proyectos.title}
					</h2>

					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
						<p className="text-text-muted text-lg italic">
							{t.proyectos.subtitle}
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
					</div>
				</div>

				{/* Lista de proyectos */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<article
							key={project.id}
							className="group bg-surface-bg rounded-2xl overflow-hidden border border-surface-border shadow-sm hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] hover:border-accent/30 hover:-translate-y-2 flex flex-col"
						>
							{/* Imagen del proyecto */}
							<div className="relative h-48 overflow-hidden bg-surface-border/20 flex justify-center items-center">
								{project.image && (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
										onError={(e) => {
											e.currentTarget.style.display = "none";
											e.currentTarget.parentElement?.classList.add(
												"bg-surface-border/50",
											);
										}}
									/>
								)}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
							</div>

							<div className="p-6 flex-1 flex flex-col">
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-xl font-bold text-text-main">
										{project.title}
									</h3>
									{/* Icono según tipo de proyecto */}
									<div className="p-2 bg-surface-border/30 rounded-lg text-text-muted">
										{project.title.includes("Music") ||
										project.title.includes("Flux") ? (
											<MonitorPlay size={20} />
										) : project.title.includes("Space") ? (
											<Rocket size={20} />
										) : project.title.includes("Pet") ? (
											<Dog size={20} />
										) : project.title.includes("Encriptador") ? (
											<Lock size={20} />
										) : (
											<Code2 size={20} />
										)}
									</div>
								</div>

								{/* Descripción */}
								<p className="text-text-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
									{project.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2.5 py-1 text-[11px] font-semibold text-text-muted bg-surface-border/30 rounded-md border border-surface-border/50"
										>
											{tag}
										</span>
									))}
								</div>

								{/* Enlaces */}
								<div className="flex flex-col gap-2 mt-auto pt-4 border-t border-surface-border/50">
									{(project.links.demo || project.links.docs) && (
										<div className="flex gap-2">
											{project.links.demo && (
												<a
													href={project.links.demo}
													target="_blank"
													rel="noreferrer"
													className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent-muted text-accent rounded-lg hover:bg-accent hover:text-white text-xs font-medium transition-colors"
												>
													<ExternalLink size={14} /> {t.proyectos.demo}
												</a>
											)}
											{project.links.docs && (
												<a
													href={project.links.docs}
													target="_blank"
													rel="noreferrer"
													className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/40 text-text-main hover:bg-surface-border/60 rounded-lg text-xs font-medium transition-colors"
												>
													<BookOpen size={14} /> {t.proyectos.docs}
												</a>
											)}
										</div>
									)}

									{/* GitHub links */}
									<div className="flex gap-2">
										{project.links.github && (
											<a
												href={project.links.github}
												target="_blank"
												rel="noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors"
											>
												<span
													className="icon-[mdi--github] text-white"
													aria-hidden="true"
												/>{" "}
												{t.proyectos.codigo}
											</a>
										)}
										{project.links.githubFrontend && (
											<a
												href={project.links.githubFrontend}
												target="_blank"
												rel="noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors"
											>
												<span
													className="icon-[mdi--github] text-white"
													aria-hidden="true"
												/>{" "}
												{t.proyectos.frontend}
											</a>
										)}
										{project.links.githubBackend && (
											<a
												href={project.links.githubBackend}
												target="_blank"
												rel="noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors"
											>
												<span
													className="icon-[mdi--github] text-white"
													aria-hidden="true"
												/>{" "}
												{t.proyectos.backend}
											</a>
										)}
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
