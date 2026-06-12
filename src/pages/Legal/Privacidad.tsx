// React
import { useEffect } from "react";

// Privacidad
const Privacidad = () => {
	useEffect(() => { document.title = "Privacidad | Ivan Cruz"; }, []);
	return (
		<div className="min-h-screen bg-page-bg text-text-main pt-32 pb-20 transition-colors duration-300">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Título */}
				<h1 className="text-4xl font-bold mb-8 text-accent">
					Política de Privacidad
				</h1>
				<section className="space-y-6 text-text-muted leading-relaxed">
					<p>
						En el portafolio profesional de <strong>Ivan Cruz</strong>, tu
						privacidad es una prioridad. Este documento explica cómo manejamos
						la información que compartes al interactuar con este sitio web.
					</p>
					{/* 1. Información que Recopilamos */}
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						1. Información que Recopilamos
					</h2>
					<p>
						Este sitio está diseñado para ser principalmente informativo. La
						única información personal que recopilamos es aquella que decides
						proporcionar voluntariamente a través de nuestro{" "}
						<strong>Formulario de Contacto</strong> (Nombre, Correo Electrónico
						y el Mensaje).
					</p>
					{/* 2. Uso de tu Información */}
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						2. Uso de tu Información
					</h2>
					<p>
						Los datos proporcionados en el formulario de contacto se utilizan{" "}
						<strong>exclusivamente</strong> para responder a tu mensaje o
						propuesta profesional. No almacenamos tus datos en bases de datos de
						marketing, ni los vendemos o compartimos con terceros.
					</p>
					{/* 3. Seguridad y Prevención de Spam */}
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						3. Seguridad y Prevención de Spam
					</h2>
					<p>
						Para proteger este sitio contra el spam y el abuso de bots,
						utilizamos el servicio <strong>Cloudflare Turnstile</strong>. Este
						servicio puede analizar ciertos datos técnicos del navegador de
						forma anónima para verificar que eres un usuario humano, cumpliendo
						con altos estándares de privacidad.
					</p>
					{/* 4. Analíticas de Privacidad */}
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						4. Analíticas de Privacidad
					</h2>
					<p>
						Para entender cómo los visitantes interactúan con el portafolio y
						mejorar la experiencia, utilizamos un servicio de métricas web
						enfocado 100% en la privacidad. Esta herramienta{" "}
						<strong>no utiliza cookies</strong> y no recopila información
						personal identificable. Todos los datos estadísticos recogidos son
						completamente anónimos y no se rastrea tu actividad a través de
						otros sitios web.
					</p>
				</section>
			</div>
		</div>
	);
};

export default Privacidad;
