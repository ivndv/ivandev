// React Router
import { Link, useLocation } from "react-router-dom";
// Componentes
import { Chip } from "@/components/ui/Chip";
// Componentes
import { SocialLinks } from "@/components/ui/SocialLinks";
// Navegación
import {
	hrefSeccion,
	parseLocale,
	RUTAS,
	rutaLocalizada,
	SECCIONES,
} from "@/i18n/navigation";
// Mensajes
import { m } from "@/paraglide/messages";

// Footer
const Footer = () => {
	const { pathname } = useLocation();
	const locale = parseLocale(pathname);

	return (
		<footer className="bg-surface-bg text-text-muted py-12 border-t border-accent/20 font-sans transition-colors duration-300">
			<div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 items-start">
					{/* Info personal + redes */}
					<div className="space-y-6 sm:col-span-2">
						<Link
							to={RUTAS.home[locale]}
							className="text-xl font-bold text-text-main tracking-tight flex items-center gap-2 w-fit"
						>
							<img
								src="https://assets.mgdc.site/ivandev/logo.png"
								alt="Logo"
								className="h-8 w-8 rounded-full"
							/>
							Ivan Cruz
						</Link>
						<p className="text-xs text-text-muted leading-relaxed max-w-sm transition-colors duration-300">
							{m.footer_brand()}
						</p>
						<SocialLinks variante="icono" className="gap-3" />
					</div>

					{/* Navegación por secciones */}
					<div>
						<h4 className="text-text-main font-bold mb-4 uppercase tracking-widest text-[11px]">
							{m.footer_nav()}
						</h4>
						<ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-2 text-xs font-medium">
							{SECCIONES.map((seccion) => (
								<li key={seccion.key}>
									<Link
										to={hrefSeccion(seccion.key, locale)}
										className="inline-block rounded-md py-1 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
									>
										{seccion.label()}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h4 className="text-text-main font-bold mb-4 uppercase tracking-widest text-[11px]">
							{m.footer_legal()}
						</h4>
						<ul className="space-y-2 text-xs font-medium">
							<li>
								<Link
									to={rutaLocalizada("terms", locale)}
									className="inline-block rounded-md py-1 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
								>
									{m.footer_terms()}
								</Link>
							</li>
							<li>
								<Link
									to={rutaLocalizada("privacy", locale)}
									className="inline-block rounded-md py-1 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
								>
									{m.footer_privacy()}
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="h-[1px] w-full bg-surface-border mb-8"></div>

				{/* Tecnologías + copyright */}
				<div className="flex flex-col items-center space-y-6">
					<div className="text-center">
						<p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-3">
							{m.footer_developed()}{" "}
							<span className="text-text-main">Ivan Cruz</span>
						</p>
						<div className="flex flex-wrap justify-center gap-2">
							{["React", "Tailwind", "Hono", "GitHub", "Cloudflare"].map(
								(tech) => (
									<Chip key={tech}>{tech}</Chip>
								),
							)}
						</div>
					</div>

					<div className="flex flex-col items-center gap-3 py-2">
						<p className="text-[11px] text-text-muted opacity-60 tracking-wider">
							© {new Date().getFullYear()} Ivan Cruz. {m.footer_rights()}
						</p>
						<img
							src="https://assets.mgdc.site/ivandev/bandera-mx.svg"
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
