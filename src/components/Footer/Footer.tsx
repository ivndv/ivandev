
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Componente Footer que muestra información de contacto, redes sociales,
 * enlaces legales y copyright.
 */
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-red-900/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* COLUMNA 1: Marca y Descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              <Link
                to="/"
                className="flex-shrink-0 flex items-center cursor-pointer"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-transparent hover:ring-red-600 transition-all duration-300"
                />
              </Link>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Desarrollador Web Frontend Jr apasionado por crear interfaces
              modernas, funcionales y optimizadas.
            </p>

            {/* Redes Sociales */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Ivandv19"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-cruz-1906mx"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="hover:text-red-500 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/experiencia"
                  className="hover:text-red-500 transition-colors"
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  to="/proyectos"
                  className="hover:text-red-500 transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-mi"
                  className="hover:text-red-500 transition-colors"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  to="/formacion"
                  className="hover:text-red-500 transition-colors"
                >
                  Formacion
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-red-500 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Legal / Info Extra */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacidad"
                  className="hover:text-red-500 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos"
                  className="hover:text-red-500 transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <a
                  href="mailto:tu@email.com"
                  className="hover:text-red-500 transition-colors"
                >
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Ivan Cruz. Todos los derechos reservados.</p>
          <p className="h-6 w-6 ">
            <img src="/CircleFlagsMx.svg" alt="Bandera de México" />
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;