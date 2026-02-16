
import { MapPin, User, GraduationCap, Briefcase } from "lucide-react";

/**
 * Página "Sobre Mí" con información biográfica detallada, 
 * historia personal y datos de contacto rápido.
 */
const SobreMi = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO "SÁNDWICH" */}
        <div className="text-center mb-16 space-y-4 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Sobre Mí
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-black flex-1 rounded-full opacity-20 max-w-[100px]"></div>
            <p className="text-gray-600 text-lg italic">Mi historia y quién soy</p>
            <div className="h-px bg-black flex-1 rounded-full opacity-20 max-w-[100px]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-100 pb-2">
                Información Rápida
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Edad
                    </span>
                    <span className="font-medium text-gray-900">23 Años</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-gray-600">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Ubicación
                    </span>
                    <span className="font-medium text-gray-900">Chimalhuacán, Edomex</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-gray-600">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Formación
                    </span>
                    <span className="font-medium text-gray-900">Autodidacta / Téc. Informática</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-gray-600">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Estado
                    </span>
                    <span className="font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs inline-block mt-1">
                      Open to Work
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-lg text-gray-600 space-y-6">
              <p>
                Soy <span className="font-bold text-gray-900">Ivan Cruz</span>, tengo{" "}
                <span className="font-bold text-gray-900">23 años</span> y soy de{" "}
                <span className="font-bold text-gray-900">Chimalhuacán, Edomex, México</span>.
                Desde muy pequeño, me interesé en el mundo de la{" "}
                <span className="font-bold text-gray-900">tecnología</span>.
              </p>

              <p>
                Cursé la preparatoria en una carrera técnica que me proporcionó las{" "}
                <span className="font-bold text-gray-900">bases de la informática</span>.
                Sin embargo, la pandemia me llevó a dejar la universidad, lo que me impulsó
                hacia un <span className="font-bold text-gray-900">aprendizaje autodidacta</span>.
              </p>

              <div>
                "Decidí inscribirme en cursos especializados en{" "}
                <span className="font-bold text-gray-900 not-italic">desarrollo frontend</span>{" "}
                de páginas web, lo que me permitió conocer diversos conceptos, técnicas y
                tecnologías enfocadas en el desarrollo web."
              </div>

              <p>
                Además, tuve la oportunidad de crear{" "}
                <span className="font-bold text-gray-900">varios proyectos</span>, lo que me
                brindó <span className="font-bold text-gray-900">valiosa experiencia</span> en el campo.
              </p>

              <p className="pt-4 border-t border-gray-100">
                Actualmente, estoy en
                búsqueda de oportunidadespara
                entrar al mercado laboral y aportar valor con mis habilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;