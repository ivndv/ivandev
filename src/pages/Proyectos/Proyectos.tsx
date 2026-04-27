import {
	Code2,
	Dog,
	ExternalLink,
	Lock,
	MonitorPlay,
	Rocket,
	BookOpen,
} from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * Página de Proyectos que renderiza una lista de tarjetas (cards)
 * con información sobre proyectos personales, tecnologías usadas y enlaces.
 */
const Projects = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);

	type ProjectLinks = {
		demo?: string;
		docs?: string;
		github?: string;
		githubFrontend?: string;
		githubBackend?: string;
	};

	type Project = {
		id: number;
		title: string;
		description: string;
		image?: string;
		tags: string[];
		links: ProjectLinks;
	};

	const projects: Project[] = [
		{
			id: 1,
			title: "Fluxbeats",
			description:
				"Fluxbeats es una landing page para mostrar un servicio de ventas de licencias de beats musicales libres de derechos de autor.",
			image: "https://portafolio-web-front.mgdc.site/fluxbeats.png",
			tags: ["React", "Vite", "Tailwindcss", "Node.js", "Cloudflare"],
			links: {
				demo: "https://landing-page.mgdc.site/",
				github: "https://github.com/Ivandv19/landing-page-1906",
			},
		},
		{
			id: 2,
			title: "Fluxdev Blog V1",
			description:
				"Fluxdev blog es un gestor de contenido diseñado como un espacio personal y profesional para compartir artículos, tutoriales y experiencias sobre el desarrollo web.",
			image: "https://portafolio-web-front.mgdc.site/fluxdev.png",
			tags: ["Astro", "Cloudflare", "D1 (SQLite)", "TailwindCSS"],
			links: {
				demo: "https://fluxdev-nebula.mgdc.site/",
				github: "https://github.com/Ivandv19/blog-personal-fluxdev",
			},
		},
		{
			id: 3,
			title: "Gestor de activos",
			description:
				"Aplicación web diseñada para centralizar y administrar los equipos físicos de una empresa, facilitando el control de inventario y las asignaciones de personal.",
			image: "/gestor-activos.png",
			tags: ["Angular", "TypeScript", "Node.js", "Express", "MySQL"],
			links: {
				demo: "https://gestor.mgdc.site/",
				docs: "https://gestor-activos-backend.fluxdv.icu/api/docs/",
				githubFrontend: "https://github.com/Ivandv19/gestor-activos-frontend.git",
				githubBackend: "https://github.com/Ivandv19/gestor-activos.git",
			},
		},
		{
			id: 4,
			title: "MXWatch",
			description:
				"Dashboard interactivo diseñado para visualizar y monitorear la presencia de grupos organizados en territorio mexicano a través de mapas dinámicos.",
			image: "https://portafolio-web-front.mgdc.site/mxwatch.png",
			tags: ["Next.js", "D3-Geo", "Hono", "Drizzle ORM", "PostgreSQL", "Cloudflare"],
			links: {
				demo: "https://mxwatch.mgdc.site",
				docs: "https://mxwatch-api.fluxdv.icu/api/docs",
				githubFrontend: "https://github.com/Ivandv19/mxwatch",
				githubBackend: "https://github.com/Ivandv19/mxwatch-api",
			},
		},
		{
			id: 5,
			title: "Sinx Pomodoro",
			description:
				"Aplicación web de productividad que ayuda a gestionar el tiempo de trabajo y estudio mediante bloques de enfoque y descansos programados.",
			image: "https://portafolio-web-front.mgdc.site/sinxpomodoro.png",
			tags: ["Astro", "React", "Hono", "Better Auth", "Drizzle ORM", "Cloudflare D1"],
			links: {
				demo: "https://sinx-pomodoro.mgdc.site/",
				github: "https://github.com/Ivandv19/sinx-pomodoro-v2",
			},
		},
		{
			id: 6,
			title: "Portafolio Web",
			description:
				"Landing page enfocada en la presentación y oferta de servicios de desarrollo de software con un diseño moderno y captura de leads.",
			image: "https://portafolio-web-front.mgdc.site/portafolioweb.png",
			tags: ["Astro", "React", "Tailwind v4", "DaisyUI", "Resend", "Cloudflare Pages"],
			links: {
				demo: "https://web-portfolio-f.mgdc.site/",
				github: "https://github.com/Ivandv19/portafolio-web-serv-front",
			},
		},
		{
			id: 7,
			title: "Space App V3",
			description:
				"Plataforma interactiva que permite explorar el universo, consultar noticias astronómicas y visualizar datos sobre el sistema solar.",
			image: "/space-app-v3.png",
			tags: ["React", "React Router", "API NASA", "CSS Modules"],
			links: {
				demo: "https://space-app-v3.pages.dev/",
				github: "https://github.com/Ivandv19/space-app-v3.git",
			},
		},
		{
			id: 8,
			title: "Fluxdev Blog V2",
			description:
				"Fluxdev blog es un gestor de contenido avanzado diseñado como un espacio personal y profesional para compartir artículos, tutoriales y experiencias sobre el desarrollo web.",
			image: "https://portafolio-web-front.mgdc.site/fluxdevV2.png",
			tags: ["Astro", "React", "Payload CMS", "PostgreSQL", "Docker", "Tailwind"],
			links: {
				demo: "https://fluxdev-nova.mgdc.site/",
				docs: "http://blog-personal-fluxdev-backend.fluxdv.icu/api/docs",
				githubFrontend: "https://github.com/Ivandv19/blog-personal-fluxdev-frontend",
				githubBackend: "https://github.com/Ivandv19/blog-personal-fluxdev-backend",
			},
		},
	];

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-7xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* ENCABEZADO */}
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						Mis Proyectos Destacados
					</h2>

					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
						<p className="text-text-muted text-lg italic">
							Algunos de mis proyectos personales y de práctica
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]" />
					</div>
				</div>

				{/* GRID DE PROYECTOS */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<article
							key={project.id}
							className="group bg-surface-bg rounded-2xl overflow-hidden border border-surface-border shadow-sm hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] hover:border-accent/30 hover:-translate-y-2 flex flex-col"
						>
							{/* IMAGEN DEL PROYECTO */}
							<div className="relative h-48 overflow-hidden bg-surface-border/20 flex justify-center items-center">
								{project.image && (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
										onError={(e) => {
											e.currentTarget.style.display = "none";
											e.currentTarget.parentElement?.classList.add("bg-surface-border/50");
										}}
									/>
								)}
								{/* Overlay oscuro al hacer hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
							</div>

							{/* CONTENIDO */}
							<div className="p-6 flex-1 flex flex-col">
								<div className="flex justify-between items-start mb-4">
									{/* TÍTULO */}
									<h3 className="text-xl font-bold text-text-main">{project.title}</h3>
									<div className="p-2 bg-surface-border/30 rounded-lg text-text-muted">
										{project.title.includes("Music") || project.title.includes("Flux") ? (
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

								<p className="text-text-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
									{project.description}
								</p>

								{/* TAGS */}
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

								{/* BOTONES DE ACCIÓN */}
								<div className="flex flex-col gap-2 mt-auto pt-4 border-t border-surface-border/50">
									{/* Demos / Docs */}
									{(project.links.demo || project.links.docs) && (
										<div className="flex gap-2">
											{project.links.demo && (
												<a
													href={project.links.demo}
													target="_blank"
													rel="noreferrer"
													className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent-muted text-accent rounded-lg hover:bg-accent hover:text-white text-xs font-medium transition-colors"
												>
													<ExternalLink size={14} /> Demo Web
												</a>
											)}
											{project.links.docs && (
												<a
													href={project.links.docs}
													target="_blank"
													rel="noreferrer"
													className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/40 text-text-main hover:bg-surface-border/60 rounded-lg text-xs font-medium transition-colors"
												>
													<BookOpen size={14} /> Docs API
												</a>
											)}
										</div>
									)}

									{/* GitHubLinks */}
									<div className="flex gap-2">
										{project.links.github && (
											<a
												href={project.links.github}
												target="_blank"
												rel="noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors"
											>
												<span className="icon-[mdi--github] text-white" aria-hidden="true" /> Código
											</a>
										)}
										{project.links.githubFrontend && (
											<a
												href={project.links.githubFrontend}
												target="_blank"
												rel="noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors"
											>
												<span className="icon-[mdi--github] text-white" aria-hidden="true" /> Frontend
											</a>
										)}
										{project.links.githubBackend && (
											<a
												href={project.links.githubBackend}
												target="_blank"
												rel="noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-xs font-medium transition-colors"
											>
												<span className="icon-[mdi--github] text-white" aria-hidden="true" /> Backend
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
