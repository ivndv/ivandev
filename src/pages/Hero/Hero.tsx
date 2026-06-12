// React
import { useEffect } from "react";
// Iconos
import { ArrowUpRight, GraduationCap } from "lucide-react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// Hero
const Hero = () => {
	const { ref, isVisible } = useScrollAnimation(0.1);
	const t = useTranslation();

	// 1. Actualizar título SEO
	useEffect(() => { document.title = t.seo.hero; }, [t.seo.hero]);

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
			className="bg-page-bg min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 transition-colors duration-300"
		>
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-5xl mx-auto space-y-12 animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* Título + avatar */}
				<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 w-full px-4">
					<div className="text-center md:text-left max-w-2xl">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tight leading-tight">
							{t.hero.title[0]} <br />
							{t.hero.title[1]}
						</h1>
					</div>

					{/* Avatar */}
					<div className="relative group flex-shrink-0">
						<img
							src="https://avatars.githubusercontent.com/u/157653669?s=400&u=883ac80aa9d82dd7d1b3eaa81fa500ca2060640f&v=4"
							alt={t.hero.alt}
							className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl transition-all duration-500 border-2 border-surface-border group-hover:border-accent"
						/>
					</div>
				</div>

				<div className="flex flex-col items-center gap-10">
					{/* Descripción */}
					<div className="max-w-4xl text-center">
						<p className="text-text-muted font-light sm:text-base text-[4vw]">
							{renderDescription(t.hero.description)}
							<br />
							{renderDescription(t.hero.description2)}
							<br />
							{renderDescription(t.hero.description3)}
						</p>
					</div>

					{/* Redes sociales */}
					<div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base">
						<a
							href="https://github.com/Ivandv19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span
								className="icon-[mdi--github] text-white"
								aria-hidden="true"
							/>
							{t.hero.social[0]} <ArrowUpRight size={16} />
						</a>
						<a
							href="https://www.linkedin.com/in/ivan-cruz-1906mx"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span
								className="icon-[mdi--linkedin] text-white"
								aria-hidden="true"
							/>
							{t.hero.social[1]} <ArrowUpRight size={16} />
						</a>

						<a
							href="https://discord.com/users/ivandv19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span
								className="icon-[mdi--discord] text-white"
								aria-hidden="true"
							/>{" "}
							{t.hero.social[2]} <ArrowUpRight size={16} />
						</a>

						<a
							href="https://app.aluracursos.com/user/ivanmx19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<span className="font-bold text-lg">a</span> {t.hero.social[3]}{" "}
							<ArrowUpRight size={16} />
						</a>

						<a
							href="https://codigofacilito.com/usuarios/Ivandv19"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
						>
							<GraduationCap size={18} /> {t.hero.social[4]}{" "}
							<ArrowUpRight size={16} />
						</a>
					</div>

					{/* Descargar CV */}
					<div className="w-full flex justify-center">
						<a
							href="/docs/cv.pdf"
							download
							className="bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_15px_var(--accent)]"
						>
							{t.hero.cv}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
