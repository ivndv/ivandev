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
// Componentes
import { Chip } from "@/components/ui/Chip";
// Componentes
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
// Datos
import { projects } from "@/data/projects";
// Mensajes
import { m } from "@/paraglide/messages";

// Projects
// Un proyecto por fila: imagen a la izquierda, detalle y enlaces a la derecha
const Projects = () => {
	return (
		<Section seccion="projects">
			<SectionHeader
				title={m.projects_title()}
				subtitle={m.projects_subtitle()}
			/>

			{/* Lista de proyectos */}
			<div className="space-y-6">
				{projects.map((project) => (
					<article
						key={project.id}
						className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-surface-bg rounded-2xl overflow-hidden border border-surface-border hover:border-accent/30 transition-colors duration-300"
					>
						{/* Imagen del proyecto */}
						<div className="relative aspect-video lg:aspect-auto lg:min-h-full lg:col-span-2 bg-surface-border/20 overflow-hidden">
							{project.image && (
								<img
									src={project.image}
									alt={project.title}
									loading="lazy"
									className="absolute inset-0 w-full h-full object-cover"
									onError={(e) => {
										e.currentTarget.style.display = "none";
										e.currentTarget.parentElement?.classList.add(
											"bg-surface-border/50",
										);
									}}
								/>
							)}
						</div>

						{/* Detalle */}
						<div className="p-5 sm:p-6 md:p-7 lg:col-span-3 flex flex-col">
							<div className="flex justify-between items-start gap-4 mb-2.5">
								<h3 className="text-lg sm:text-xl font-bold text-text-main tracking-tight">
									{project.title}
								</h3>
								{/* Icono según tipo de proyecto */}
								<div className="p-1.5 bg-surface-border/30 rounded-lg text-text-muted shrink-0">
									{project.title.includes("Music") ||
									project.title.includes("Flux") ? (
										<MonitorPlay size={16} />
									) : project.title.includes("Space") ||
										project.title.includes("Cosmos") ? (
										<Rocket size={16} />
									) : project.title.includes("Pet") ? (
										<Dog size={16} />
									) : project.title.includes("Encriptador") ? (
										<Lock size={16} />
									) : (
										<Code2 size={16} />
									)}
								</div>
							</div>

							{/* Descripción */}
							<p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-3">
								{project.description()}
							</p>

							{/* Funciones principales */}
							<ul className="space-y-1 mb-4">
								{project.features().map((funcion) => (
									<li
										key={funcion}
										className="flex gap-2 text-xs text-text-muted/80 leading-relaxed"
									>
										<span className="text-accent/80 mt-0.5" aria-hidden="true">
											•
										</span>
										{funcion}
									</li>
								))}
							</ul>

							{/* Tags */}
							<div className="flex flex-wrap gap-1.5 mb-5">
								{project.tags.map((tag) => (
									<Chip key={tag}>{tag}</Chip>
								))}
							</div>

							{/* Enlaces */}
							<div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-surface-border/50">
								{project.links.demo && (
									<a
										href={project.links.demo}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 px-3 py-2 bg-accent-muted text-accent rounded-lg hover:bg-accent hover:text-white text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg rounded-lg"
									>
										<ExternalLink size={14} /> {m.projects_demo()}
									</a>
								)}
								{project.links.docs && (
									<a
										href={project.links.docs}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 px-3 py-2 bg-surface-border/40 text-text-main hover:bg-surface-border/60 rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg rounded-lg"
									>
										<BookOpen size={14} /> {m.projects_docs()}
									</a>
								)}
								{project.links.github && (
									<a
										href={project.links.github}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg rounded-lg"
									>
										<span
											className="icon-[mdi--github] text-white"
											aria-hidden="true"
										/>{" "}
										{m.projects_code()}
									</a>
								)}
								{project.links.githubFrontend && (
									<a
										href={project.links.githubFrontend}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg rounded-lg"
									>
										<span
											className="icon-[mdi--github] text-white"
											aria-hidden="true"
										/>{" "}
										{m.projects_frontend()}
									</a>
								)}
								{project.links.githubBackend && (
									<a
										href={project.links.githubBackend}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg rounded-lg"
									>
										<span
											className="icon-[mdi--github] text-white"
											aria-hidden="true"
										/>{" "}
										{m.projects_backend()}
									</a>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</Section>
	);
};

export default Projects;
