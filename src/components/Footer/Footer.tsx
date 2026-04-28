import { Send } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Componente Footer rediseñado basado en la estética de Flux/Sinx.
 * Incluye secciones de marca, navegación, legal, suscripción y badges de tecnologías.
 */
const Footer = () => {
	return (
		<footer className="bg-surface-bg text-text-muted py-16 border-t border-accent/20 font-sans transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* TOP SECTION: 4 Columns */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* COLUMNA 1: Marca y Redes */}
					<div className="space-y-6">
						<h3 className="text-3xl font-bold text-text-main tracking-tighter flex items-center gap-2">
							<img
								src="/logo.png"
								alt="Logo"
								className="h-8 w-8 rounded-full"
							/>
							Ivan Cruz
						</h3>
						<p className="text-sm text-text-muted leading-relaxed max-w-xs transition-colors duration-300">
							Desarrollador Web Full Stack con enfoque en Cloud Computing y
							DevOps, apasionado por crear aplicaciones modernas, funcionales y
							optimizadas.
						</p>
						{/* Redes Sociales Sincronizadas con Hero */}
						<div className="flex flex-wrap gap-3">
							<a
								href="https://github.com/Ivandv19"
								target="_blank"
								rel="noreferrer"
								className="p-2 bg-accent/5 hover:bg-accent/10 rounded-lg text-text-muted hover:text-accent transition-all duration-300"
							>
								<span className="icon-[mdi--github] text-white" aria-hidden="true" />
							</a>
							<a
								href="https://www.linkedin.com/in/ivan-cruz-1906mx"
								target="_blank"
								rel="noreferrer"
								className="p-2 bg-accent/5 hover:bg-accent/10 rounded-lg text-text-muted hover:text-accent transition-all duration-300"
							>
								<span className="icon-[mdi--linkedin] text-white" aria-hidden="true" />
							</a>
							<a
								href="https://discord.com/users/ivandv19"
								target="_blank"
								rel="noreferrer"
								className="p-2 bg-accent/5 hover:bg-accent/10 rounded-lg text-text-muted hover:text-accent transition-all duration-300"
							>
								<Send size={18} className="rotate-[-45deg]" />
							</a>
						</div>
					</div>

					{/* COLUMNA 2: Navegación Principal */}
					<div>
						<h4 className="text-text-main font-bold mb-6 uppercase tracking-widest text-xs">
							Navegación
						</h4>
						<ul className="space-y-4 text-sm font-medium">
							<li>
								<Link to="/" className="hover:text-accent transition-colors">
									Inicio
								</Link>
							</li>
							<li>
								<Link
									to="/skills"
									className="hover:text-accent transition-colors"
								>
									Skills
								</Link>
							</li>
							<li>
								<Link
									to="/experiencia"
									className="hover:text-accent transition-colors"
								>
									Experiencia
								</Link>
							</li>
							<li>
								<Link
									to="/proyectos"
									className="hover:text-accent transition-colors"
								>
									Proyectos
								</Link>
							</li>
						</ul>
					</div>

					{/* COLUMNA 3: Más Navegación */}
					<div className="md:pt-10">
						<ul className="space-y-4 text-sm font-medium">
							<li>
								<Link
									to="/sobre-mi"
									className="hover:text-accent transition-colors"
								>
									Sobre Mí
								</Link>
							</li>
							<li>
								<Link
									to="/formacion"
									className="hover:text-accent transition-colors"
								>
									Formacion
								</Link>
							</li>
							<li>
								<Link
									to="/contacto"
									className="hover:text-accent transition-colors"
								>
									Contacto
								</Link>
							</li>
						</ul>
					</div>

					{/* COLUMNA 4: Legal */}
					<div>
						<h4 className="text-text-main font-bold mb-6 uppercase tracking-widest text-xs">
							Legal
						</h4>
						<ul className="space-y-4 text-sm font-medium">
							<li>
								<Link
									to="/terminos"
									className="hover:text-accent transition-colors"
								>
									Términos y Condiciones
								</Link>
							</li>
							<li>
								<Link
									to="/privacidad"
									className="hover:text-accent transition-colors"
								>
									Política de Privacidad
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* MIDDLE BAR: Thin Line */}
				<div className="h-[1px] w-full bg-surface-border mb-12"></div>

				{/* BOTTOM SECTION: Badges & Copyright */}
				<div className="flex flex-col items-center space-y-8">
					<div className="text-center">
						<p className="text-xs uppercase tracking-[0.2em] text-text-muted font-bold mb-4">
							Desarrollado por <span className="text-text-main">Ivan Cruz</span>
						</p>
						<div className="flex flex-wrap justify-center gap-2">
							{["React", "Vite", "Tailwind", "Cloudflare"].map((tech) => (
								<span
									key={tech}
									className="px-4 py-1.5 bg-accent/5 border border-accent/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-text-muted hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 cursor-default"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					<div className="flex flex-col items-center gap-4 py-4">
						<p className="text-[11px] text-text-muted opacity-60 tracking-wider">
							© {new Date().getFullYear()} Ivan Cruz. Todos los derechos
							reservados.
						</p>
						<img
							src="/CircleFlagsMx.svg"
							alt="México"
							className="h-4 w-4 opacity-80"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
