import { RichText } from "@/components/ui/RichText";
// Componentes
import { SocialLinks } from "@/components/ui/SocialLinks";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// Navegación
import { idSeccion } from "@/i18n/navigation";
// Mensajes
import { m } from "@/paraglide/messages";
// Paraglide
import { getLocale } from "@/paraglide/runtime";

// Hero
const Hero = () => {
	const { ref, isVisible } = useScrollAnimation(0.1);

	return (
		<section
			id={idSeccion("home", getLocale())}
			data-section="home"
			className="bg-page-bg min-h-svh flex items-center px-4 sm:px-6 lg:px-8 pt-16 pb-16 scroll-mt-16 transition-colors duration-300"
		>
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-6xl 2xl:max-w-7xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				<div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
					{/* Columna Izquierda: Información */}
					<div className="text-center lg:text-left space-y-6 max-w-xl">
						{/* Título Principal */}
						<h1 className="text-h1 font-extrabold text-text-main tracking-tight">
							<span className="block font-mono text-[11px] sm:text-xs font-medium uppercase tracking-widest text-accent mb-3">
								{m.hero_greeting()}
							</span>
							{m.hero_role()}
						</h1>

						{/* Descripción */}
						<div className="text-text-muted font-normal text-base leading-relaxed space-y-3">
							<p>
								<RichText
									text={m.hero_desc_1()}
									className="font-medium text-text-main"
								/>
							</p>
							<p>
								<RichText
									text={m.hero_desc_2()}
									className="font-medium text-text-main"
								/>
							</p>
							<p>
								<RichText
									text={m.hero_desc_3()}
									className="font-medium text-text-main"
								/>
							</p>
						</div>

						{/* Acciones: Botón CV y Redes Sociales */}
						<div className="pt-2 space-y-6">
							<SocialLinks className="justify-center lg:justify-start" />

							{/* Botón Descargar CV */}
							<div className="flex justify-center lg:justify-start">
								<a
									href="https://assets.mgdc.site/ivandev/cv.pdf"
									target="_blank"
									rel="noopener noreferrer"
									download="cv.pdf"
									className="bg-accent hover:opacity-90 text-white text-[13px] font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 shadow-sm"
								>
									{m.hero_cv()}
								</a>
							</div>
						</div>
					</div>

					{/* Columna Derecha: Avatar */}
					<div className="flex-shrink-0 flex justify-center">
						<div className="relative group p-2 rounded-full border-2 border-surface-border bg-surface-bg shadow-2xl transition-all duration-500 hover:border-accent">
							<img
								src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4"
								alt={m.hero_alt()}
								className="w-40 h-40 sm:w-44 sm:h-44 lg:w-64 lg:h-64 rounded-full object-cover shadow-inner"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
