// React Router
import { Link, useLocation } from "react-router-dom";
// Hooks
import { useSeo } from "@/hooks/useSeo";
// Navegación
import { parseLocale, RUTAS } from "@/i18n/navigation";
// Mensajes
import { m } from "@/paraglide/messages";

// NotFound
const NotFound = () => {
	const { pathname } = useLocation();
	const locale = parseLocale(pathname);

	useSeo(m.seo_notfound_title(), m.notfound_text());

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4">
			<div className="max-w-3xl mx-auto text-center mt-16">
				<h1 className="text-8xl md:text-9xl font-bold text-accent">404</h1>
				<h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
					{m.notfound_title()}
				</h2>
				<p className="text-text-muted text-lg mb-8">{m.notfound_text()}</p>
				{/* Botón volver */}
				<Link
					to={RUTAS.home[locale]}
					className="inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
				>
					{m.notfound_back()}
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
