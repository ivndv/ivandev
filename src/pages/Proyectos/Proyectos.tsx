import {
	Code2,
	Dog,
	ExternalLink,
	Github,
	Lock,
	MonitorPlay,
	Rocket,
} from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * Página de Proyectos que renderiza una lista de tarjetas (cards)
 * con información sobre proyectos personales, tecnologías usadas y enlaces.
 */
const Projects = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const projects = [
		{
			id: 1,
			title: "Fluxbeats",
			description:
				"Fluxbeats es una aplicación web para mostrar un servicio de ventas de licencias de beats musicales libres de derechos de autor.",
			image: "https://portafolio-web-front.mgdc.site/fluxbeats.png",
			tags: ["React", "Vite", "Tailwindcss", "Node.js", "Cloudflare"],
			links: {
				demo: "https://landing-page.mgdc.site/",
				github: "https://github.com/Ivandv19/landing-page-1906",
			},
		},

		{
			id: 2,
			title: "Fluxdev Blog",
			description:
				"Blog personal y profesional construido con Astro y Cloudflare D1, enfocado en compartir conocimiento sobre desarrollo web y tecnología.",
			image: "https://portafolio-web-front.mgdc.site/fluxdev.png",
			tags: ["Astro", "Cloudflare", "D1 (SQLite)", "TailwindCSS"],
			links: {
				demo: "https://fluxdev.mgdc.site",
				github: "https://github.com/Ivandv19/blog-personal-fluxdev",
			},
		},

		{
			id: 3,
			title: "Gestor de activos",
			description:
				"Gestor de activos es una aplicacion web para administrqar activos de una empresa, permitiendo llevar un control detallado de los mismos.",
			image: "/gestor-activos.png",
			tags: ["Angular", "TypeScript", "Node.js", "Express", "MySQL"],
			links: {
				demo: "https://gestor.mgdc.site/",
				github: "https://github.com/Ivandv19/gestor-activos.git",
			},
		},

		{
			id: 4,
			title: "Alura Flix",
			description:
				"Aluraflix es una aplicación web diseñada para gestionar y explorar una colección de videos. La aplicación permite a los usuarios visualizar videos filtrados por categoría, eliminar y editar videos, y crear nuevos videos mediante un formulario.",
			image: "/aluraflix.png",
			tags: ["HTML", "CSS", "JavaScript", "React"],
			links: {
				demo: "https://alura-flix-flax.vercel.app/",
				github: "https://github.com/Ivandv19/challenge-aluraflix.git",
			},
		},
		{
			id: 5,
			title: "Space App V3",
			description:
				"Space App V3 es una aplicación interactiva para gestionar y visualizar contenido diverso sobre el espacio, incluyendo una galería de imágenes, noticias y un apartado del sistema solar.",
			image: "/space-app-v3.png",
			tags: ["React", "React Router", "API NASA", "CSS Modules"],
			links: {
				demo: "https://space-app-v3.vercel.app/",
				github: "https://github.com/Ivandv19/space-app-v3.git",
			},
		},
		{
			id: 6,
			title: "Space App v2",
			description:
				"Este proyecto es una aplicación para gestionar y visualizar una galería de fotos, con funcionalidades para filtrar y buscar contenido por una palabra o por tags. Está diseñado para proporcionar una experiencia interactiva y visualmente atractiva.",
			image: "/space-app-v2.png",
			tags: ["HTML", "CSS", "JavaScript", "React"],
			links: {
				demo: "https://space-appv2.vercel.app/",
				github: "https://github.com/Ivandv19/space-app-v2.git",
			},
		},
		{
			id: 7,
			title: "Alura Cinema",
			description:
				"Este proyecto es una aplicación para gestionar y visualizar videos, con funcionalidades como vizualizar y agregar a una seccion especial de favoritos. Está diseñado para proporcionar una experiencia interactiva y visualmente atractiva.",
			image: "/alura-cinema.png",
			tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
			links: {
				demo: "https://alura-cinema-gamma.vercel.app/",
				github: "https://github.com/Ivandv19/alura-cinema.git",
			},
		},
		{
			id: 8,
			title: "Encriptador de Texto",
			description:
				"Desafío de Lógica. Aplicación que encripta y desencripta mensajes para intercambiar información secreta usando llaves de sustitución.",
			image: "/encriptador-de-texto.png",
			tags: ["HTML5", "CSS3", "JavaScript"],
			links: {
				demo: "https://encriptador-nine-eta.vercel.app/",
				github: "https://github.com/Ivandv19/challenge-encriptador.git",
			},
		},
		{
			id: 9,
			title: "PetShop",
			description:
				"Sitio web para tienda de mascotas. Enfoque en validación de formularios (Regex) y arquitectura de navegación fluida.",
			image: "/petshop.png",
			tags: ["HTML", "CSS", "JavaScript", "React"],
			links: {
				demo: "https://petshop-kappa-ten.vercel.app/",
				github: "https://github.com/Ivandv19/petshop.git",
			},
		},
		{
			id: 10,
			title: "Fokus",
			description:
				"App de productividad basada en la técnica Pomodoro. Manejo de temporizadores, audio y estados de la aplicación para enfoque y descanso.",
			image: "/fokus.png",
			tags: ["HTML5", "CSS3", "JavaScript"],
			links: {
				demo: "https://fokus-chi-ten.vercel.app/",
				github: "https://github.com/Ivandv19/Fokus.git",
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
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
						<p className="text-text-muted text-lg italic">
							Algunos de mis proyectos personales y de práctica
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
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
							<div className="relative h-48 overflow-hidden bg-surface-border/20">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110"
								/>
								{/* Overlay oscuro al hacer hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"></div>
							</div>

							{/* CONTENIDO */}
							<div className="p-6 flex-1 flex flex-col">
								<div className="flex justify-between items-start mb-4">
									{/* TÍTULO */}
									<h3 className="text-xl font-bold text-text-main">
										{project.title}
									</h3>
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

								<p className="text-text-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
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
								<div className="flex gap-3 mt-auto pt-4 border-t border-surface-border/50">
									{project.links.github && (
										<a
											href={project.links.github}
											target="_blank"
											rel="noreferrer"
											className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-surface-border/30 text-text-main hover:bg-text-main hover:text-page-bg rounded-lg text-sm font-medium"
										>
											<Github size={16} /> Código
										</a>
									)}
									{project.links.demo && (
										<a
											href={project.links.demo}
											target="_blank"
											rel="noreferrer"
											className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent-muted text-accent rounded-lg hover:bg-accent hover:text-white text-sm font-medium"
										>
											<ExternalLink size={16} /> Demo
										</a>
									)}
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
