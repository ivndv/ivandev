// React
import { useEffect } from "react";
// Iconos
import { Briefcase, GraduationCap, MapPin, User } from "lucide-react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// SobreMi
const SobreMi = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	// 1. Actualizar título SEO
	useEffect(() => { document.title = t.seo.sobreMi; }, [t.seo.sobreMi]);

	// 2. Renderizar párrafo con partes en negrita
	const renderParrafo = (parts: { text: string; bold: boolean }[]) =>
		parts.map((part) =>
			part.bold ? (
				<span key={part.text} className="font-bold text-text-main">
					{part.text}
				</span>
			) : (
				part.text
			),
		);

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`max-w-6xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				<div className="text-center mb-16 space-y-4 mt-16">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						{t.sobreMi.title}
					</h2>
					<div className="flex items-center justify-center gap-4">
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
						<p className="text-text-muted text-lg italic">
							{t.sobreMi.subtitle}
						</p>
						<div className="h-px bg-text-main flex-1 rounded-full opacity-20 max-w-[100px]"></div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Info personal */}
					<div className="lg:col-span-1 space-y-6">
						<div className="bg-surface-bg p-6 rounded-2xl border border-surface-border shadow-sm">
							<h3 className="text-xl font-bold mb-6 border-b border-surface-border/50 pb-2">
								{t.sobreMi.infoTitulo}
							</h3>

							<ul className="space-y-4">
								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<User size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											{t.sobreMi.edad}
										</span>
										<span className="font-medium text-text-main">{t.sobreMi.edadValor}</span>
									</div>
								</li>

								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<MapPin size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											{t.sobreMi.ubicacion}
										</span>
										<span className="font-medium text-text-main">{t.sobreMi.ubicacionValor}</span>
									</div>
								</li>

								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<GraduationCap size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											{t.sobreMi.formacion}
										</span>
										<span className="font-medium text-text-main">{t.sobreMi.formacionValor}</span>
									</div>
								</li>

								<li className="flex items-start gap-3 text-text-muted">
									<div className="p-2 bg-accent-muted text-accent rounded-lg">
										<Briefcase size={20} />
									</div>
									<div>
										<span className="block text-xs font-bold text-text-muted/70 uppercase tracking-wider">
											{t.sobreMi.estado}
										</span>
										<span className="font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs inline-block mt-1">
											{t.sobreMi.estadoValor}
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>

					{/* Párrafos descriptivos */}
					<div className="lg:col-span-2">
						<div className="bg-surface-bg p-8 md:p-10 rounded-2xl border border-surface-border shadow-sm leading-relaxed text-lg text-text-muted space-y-6">
							<p>{renderParrafo(t.sobreMi.parrafo1)}</p>
							<p>{renderParrafo(t.sobreMi.parrafo2)}</p>
							<div>{renderParrafo(t.sobreMi.parrafo3)}</div>
							<p>{renderParrafo(t.sobreMi.parrafo4)}</p>
							<p className="pt-4 border-t border-surface-border/50">
								{t.sobreMi.parrafo5}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SobreMi;
