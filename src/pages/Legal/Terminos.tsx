const Terminos = () => {
	return (
		<div className="min-h-screen bg-page-bg text-text-main pt-32 pb-20 transition-colors duration-300">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold mb-8 text-accent">
					Términos y Condiciones
				</h1>
				<section className="space-y-6 text-text-muted leading-relaxed">
					<p>
						Al acceder a este portafolio web, aceptas estar sujeto a los
						siguientes términos y condiciones de uso. Si no estás de acuerdo con
						alguno de estos términos, te pedimos no utilizar nuestro formulario
						ni extraer material del sitio.
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						1. Propiedad Intelectual
					</h2>
					<p>
						El código fuente, diseño, estructura y los proyectos originales
						exhibidos en este portafolio son propiedad de{" "}
						<strong>Ivan Cruz</strong>. Se concede permiso para visualizar el
						contenido con fines informativos o de evaluación profesional. No se
						permite la copia, reproducción o uso comercial sin autorización
						previa.
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						2. Uso del Formulario de Contacto
					</h2>
					<p>
						El formulario de contacto está destinado exclusivamente para
						consultas profesionales, ofertas laborales o networking. Queda
						estrictamente prohibido su uso para el envío de spam, promociones
						comerciales no solicitadas o cualquier tipo de contenido malicioso.
					</p>
					<h2 className="text-2xl font-semibold text-text-main mt-8">
						3. Descargo de Responsabilidad
					</h2>
					<p>
						Los proyectos y materiales en este sitio web se proporcionan "tal
						cual", principalmente como demostración técnica. Ivan Cruz no ofrece
						garantías, expresas o implícitas, sobre la disponibilidad continua
						de proyectos de terceros o servicios externos aquí mencionados.
					</p>
				</section>
			</div>
		</div>
	);
};

export default Terminos;
