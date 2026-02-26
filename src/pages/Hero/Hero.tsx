import { ArrowUpRight, Github, GraduationCap, Linkedin } from "lucide-react";

const DiscordIcon = ({ size = 18, className = "" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor"
		className={className}
	>
		<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.843 13.843 0 0 0-1.282 2.628 17.513 17.513 0 0 0-5.717 0 13.882 13.882 0 0 0-1.29-2.628.077.077 0 0 0-.079-.037 19.728 19.728 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-2.313-9.117-6.319-13.636a.074.074 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
	</svg>
);

/**
 * Sección Hero (Presentación) de la página principal.
 * Incluye foto de perfil, título impactante, descripción corta y botones de acción.
 */
const Hero = () => {
	return (
		<section
			id="inicio"
			className="bg-page-bg min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 transition-colors duration-300"
		>
			{/* 1. CONTENEDOR PRINCIPAL */}
			<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 mb-8 w-full max-w-5xl">
				{/* Título */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main text-center md:text-right tracking-tight leading-tight">
					Hola, soy Ivan Cruz y <br />
					construyo páginas web
				</h1>

				{/* Foto de Perfil */}
				<div className="relative group">
					<img
						src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4"
						alt="Foto de perfil"
						className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover transition-all duration-500"
					/>
				</div>
			</div>

			{/* 2. DESCRIPCIÓN */}
			<div className="max-w-4xl mx-auto text-center mb-10">
				<p className="text-text-muted font-light text-center sm:text-base text-[4vw]">
					Soy un{" "}
					<span className="font-semibold text-text-main">
						Desarrollador Web Frontend Jr
					</span>{" "}
					apasionado por la{" "}
					<span className="font-semibold text-text-main">tecnología</span>. Me
					encanta{" "}
					<span className="font-semibold text-text-main">
						crear interfaces atractivas, modernas, funcionales y optimizadas
					</span>
					, utilizando{" "}
					<span className="font-semibold text-text-main">
						tecnologías actuales
					</span>{" "}
					para
					<span className="font-semibold text-text-main">
						mejorar la experiencia del usuario
					</span>
					.
					<br />
					Actualmente, me encuentro cursando programas y certificaciones en{" "}
					<span className="font-semibold text-text-main">desarrollo web</span>,{" "}
					<span className="font-semibold text-text-main">
						computación en la nube
					</span>{" "}
					y{" "}
					<span className="font-semibold text-text-main">
						tecnologías modernas
					</span>
					, fortaleciendo mis habilidades para aportar valor en proyectos
					desafiantes.
					<br />
					Estoy en{" "}
					<span className="font-semibold text-text-main">
						constante aprendizaje
					</span>
					, perfeccionando tanto mis{" "}
					<span className="font-semibold text-text-main">
						habilidades profesionales como personales
					</span>
					.
				</p>
			</div>

			{/* 3. LINKS REDES SOCIALES */}
			<div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12 text-sm md:text-base">
				<a
					href="https://github.com/Ivandv19"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
				>
					<Github size={18} /> Github <span className="font-medium"></span>{" "}
					<ArrowUpRight size={16} />
				</a>
				<a
					href="https://www.linkedin.com/in/ivan-cruz-1906mx"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
				>
					<Linkedin size={18} /> Linkedin <span className="font-medium"></span>{" "}
					<ArrowUpRight size={16} />
				</a>

				<a
					href="https://discord.com/users/ivandv19"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
				>
					<DiscordIcon size={18} /> Discord <ArrowUpRight size={16} />
				</a>

				<a
					href="https://app.aluracursos.com/user/ivanmx19"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
				>
					<span className="font-bold text-lg">a</span>{" "}
					<span className="font-medium"></span> Alura <ArrowUpRight size={16} />
				</a>

				<a
					href="https://codigofacilito.com/usuarios/Ivandv19"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
				>
					<GraduationCap size={18} /> Codigo facilito <ArrowUpRight size={16} />
				</a>
			</div>

			{/* 4. BOTONES (CV  */}
			<div className="flex flex-col items-center gap-4">
				{/* Botón Descargar CV */}
				<a
					href="/cv.pdf"
					download
					className="bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_15px_var(--accent)]"
				>
					Descargar CV
				</a>
			</div>
		</section>
	);
};

export default Hero;
