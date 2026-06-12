// Hooks
import { useTranslation } from "@/hooks/useTranslation";

// NotFound
const NotFound = () => {
	const t = useTranslation();

	return (
		<section className="min-h-screen bg-page-bg text-text-main py-20 px-4">
			<div className="max-w-3xl mx-auto text-center mt-16">
				<h1 className="text-8xl md:text-9xl font-bold text-accent">404</h1>
				<h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
					{t.notFound.title}
				</h2>
				<p className="text-text-muted text-lg mb-8">{t.notFound.mensaje}</p>
				{/* Botón volver */}
				<a
					href="/"
					className="inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
				>
					{t.notFound.volver}
				</a>
			</div>
		</section>
	);
};

export default NotFound;
