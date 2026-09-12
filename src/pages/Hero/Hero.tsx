// React

// Iconos
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { useEffect } from "react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// Hero
const Hero = () => {
	const { ref, isVisible } = useScrollAnimation(0.1);
	const t = useTranslation();

	// 1. Actualizar título SEO
	useEffect(() => {
		document.title = t.seo.hero;
	}, [t.seo.hero]);

	// 2. Renderizar texto con partes en negrita
	const renderDescription = (parts: { text: string; bold: boolean }[]) =>
		parts.map((part) =>
			part.bold ? (
				<span key={part.text} className="font-semibold text-text-main">
					{part.text}
				</span>
			) : (
				part.text
			),
		);

	return (
		<section
			id="inicio"
			className="bg-page-bg min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 transition-colors duration-300"
		>
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-5xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
					{/* Columna Izquierda: Información */}
					<div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
						{/* Título Principal */}
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main tracking-tight leading-tight">
							<span className="block text-accent font-semibold text-lg sm:text-xl tracking-wide mb-2">
								{t.hero.title[0]}
							</span>
							{t.hero.title[1]}
						</h1>

						{/* Descripción */}
						<div className="text-text-muted font-light text-base sm:text-lg leading-relaxed space-y-3">
							<p>{renderDescription(t.hero.description)}</p>
							<p>{renderDescription(t.hero.description2)}</p>
							<p>{renderDescription(t.hero.description3)}</p>
						</div>

						{/* Acciones: Botón CV y Redes Sociales */}
						<div className="pt-2 space-y-6">
							{/* Botón Descargar CV */}
							<div className="flex justify-center lg:justify-start">
								<a
									href="https://assets.mgdc.site/ivandev/cv.pdf"
									target="_blank"
									rel="noopener noreferrer"
									download="cv.pdf"
									className="bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_15px_var(--accent)]"
								>
									{t.hero.cv}
								</a>
							</div>

							{/* Redes sociales */}
							<div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 text-sm sm:text-base">
								<a
									href="https://github.com/ivndv"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
								>
									<span
										className="icon-[mdi--github] text-lg text-text-main"
										aria-hidden="true"
									/>
									{t.hero.social[0]} <ArrowUpRight size={16} />
								</a>
								<a
									href="https://www.linkedin.com/in/ivan-cruz-1906mx"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
								>
									<span
										className="icon-[mdi--linkedin] text-lg text-text-main"
										aria-hidden="true"
									/>
									{t.hero.social[1]} <ArrowUpRight size={16} />
								</a>

								<a
									href="https://discord.com/users/ivndv1"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
								>
									<span
										className="icon-[mdi--discord] text-lg text-text-main"
										aria-hidden="true"
									/>
									{t.hero.social[2]} <ArrowUpRight size={16} />
								</a>

								<a
									href="https://app.aluracursos.com/user/ivndv1"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
								>
									<span className="font-bold text-lg text-text-main leading-none">
										a
									</span>{" "}
									{t.hero.social[3]} <ArrowUpRight size={16} />
								</a>

								<a
									href="https://codigofacilito.com/usuarios/ivndv"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors"
								>
									<GraduationCap size={18} className="text-text-main" />{" "}
									{t.hero.social[4]} <ArrowUpRight size={16} />
								</a>
							</div>
						</div>
					</div>

					{/* Columna Derecha: Avatar */}
					<div className="flex-shrink-0 flex justify-center lg:justify-end">
						<div className="relative group p-2 rounded-full border-2 border-surface-border bg-surface-bg shadow-2xl transition-all duration-500 hover:border-accent">
							<img
								src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4"
								alt={t.hero.alt}
								className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full object-cover shadow-inner"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
