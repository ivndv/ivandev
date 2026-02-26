const Privacidad = () => {
    return (
        <div className="min-h-screen bg-page-bg text-text-main pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-colors duration-300">
            <h1 className="text-4xl font-bold mb-8 text-accent">Política de Privacidad</h1>
            <section className="space-y-6 text-text-muted leading-relaxed">
                <p>
                    En el portafolio de <strong>Ivan Cruz</strong>, la privacidad de nuestros visitantes es de suma importancia.
                    Este documento detalla los tipos de información personal que se reciben y recopilan y cómo se utilizan.
                </p>
                <h2 className="text-2xl font-semibold text-text-main mt-8">1. Recopilación de Información</h2>
                <p>
                    Este sitio es estático y no recopila datos personales de forma activa, a menos que utilices el formulario de contacto
                    o te pongas en contacto directamente vía email.
                </p>
                <h2 className="text-2xl font-semibold text-text-main mt-8">2. Uso de la Información</h2>
                <p>
                    Cualquier información que nos proporciones se utilizará únicamente para responder a tus consultas o para
                    proporcionarte la información que hayas solicitado. Nunca compartiremos tus datos con terceros.
                </p>
                <h2 className="text-2xl font-semibold text-text-main mt-8">3. Cookies</h2>
                <p>
                    Podemos utilizar cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio de forma anónima.
                </p>
            </section>
        </div>
    );
};

export default Privacidad;
