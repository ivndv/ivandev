import { ArrowUpRight, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";


/**
 * Sección Hero (Presentación) de la página principal.
 * Incluye foto de perfil, título impactante, descripción corta y botones de acción.
 */
const Hero = () => {
	const { ref, isVisible } = useScrollAnimation(0.1);
	return (
		<section
			id="inicio"
			className="bg-page-bg min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 transition-colors duration-300"
		>
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-5xl mx-auto space-y-12 animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* 1. CONTENEDOR SUPERIOR (Título y Foto) */}
				<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 w-full px-4">
					{/* Título - Columna Izquierda */}
					<div className="text-center md:text-left max-w-2xl">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tight leading-tight">
							Hola, soy Ivan Cruz, <br />
							desarrollador web con conocimientos en DevOps y Cloud
						</h1>
					</div>

					{/* Foto de Perfil - Columna Derecha */}
					<div className="relative group flex-shrink-0">
						<img
							src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4"
							alt="Foto de perfil"
							className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl transition-all duration-500 border-2 border-surface-border group-hover:border-accent"
						/>
					</div>
				</div>

				{/* 2. CONTENEDOR INFERIOR (Descripción, Redes y CTA) */}
				<div className="flex flex-col items-center gap-10">
					{/* Descripción */}
					<div className="max-w-4xl text-center">
						<p className="text-text-muted font-light sm:text-base text-[4vw]">
							Soy un{" "}
							<span className="font-semibold text-text-main">
								Desarrollador Full Stack
							</span>{" "}
							apasionado por la{" "}
							<span className="font-semibold text-text-main">tecnología</span>.
							Me encanta{" "}
							<span className="font-semibold text-text-main">
								construir soluciones integrales
							</span>
							, desde interfaces modernas y optimizadas hasta{" "}
							<span className="font-semibold text-text-main">
								servicios backend robustos
							</span>
							.
							<br />
							Además, integro{" "}
							<span className="font-semibold text-text-main">
								DevOps y Cloud
							</span>{" "}
							para automatizar despliegues y garantizar{" "}
							<span className="font-semibold text-text-main">
								infraestructura escalable y confiable
							</span>
							.
							<br />
							Estoy en{" "}
							<span className="font-semibold text-text-main">
								constante evolución
							</span>
							, ampliando mis habilidades en{" "}
							<span className="font-semibold text-text-main">
								desarrollo, infraestructura y arquitectura de sistemas
							</span>
							.
						</p>
					</div>

					{/* LINKS REDES SOCIALES */}
					<div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base">
						<a
							href="https://github.com/Ivandv19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span className="icon-[mdi--github] text-white" aria-hidden="true" />
							Github <ArrowUpRight size={16} />
						</a>
						<a
							href="https://www.linkedin.com/in/ivan-cruz-1906mx"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span className="icon-[mdi--linkedin] text-white" aria-hidden="true" />
							Linkedin <ArrowUpRight size={16} />
						</a>

						<a
							href="https://discord.com/users/ivandv19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span className="icon-[mdi--discord] text-white" aria-hidden="true" /> Discord <ArrowUpRight size={16} />
						</a>

						<a
							href="https://app.aluracursos.com/user/ivanmx19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span className="font-bold text-lg">a</span> Alura{" "}
							<ArrowUpRight size={16} />
						</a>

						<a
							href="https://codigofacilito.com/usuarios/Ivandv19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<GraduationCap size={18} /> Codigo facilito{" "}
							<ArrowUpRight size={16} />
						</a>
					</div>

					{/* BOTÓN CV */}
					<div className="w-full flex justify-center">
						<a
							href="/cv.pdf"
							download
							className="bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_15px_var(--accent)]"
						>
							Descargar CV
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
