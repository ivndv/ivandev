import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

/**
 * Componente Header que contiene la navegación principal y el logo.
 * Incluye una versión desktop con enlaces y una versión móvil con menú de hamburguesa.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experiencia', path: '/experiencia' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Formacion', path: '/formacion' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-bg/95 backdrop-blur-sm border-b border-accent shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-transparent hover:ring-accent transition-all duration-300"
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-text-muted hover:text-accent font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* ICONOS */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-text-muted hover:text-accent hover:bg-accent/10 p-2 rounded-full transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* BOTÓN HAMBURGUESA Y TOGGLE MÓVIL */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="text-text-muted p-2"
            >
              {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-muted hover:text-accent focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-bg border-t border-accent absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-text-muted hover:text-accent hover:bg-accent/5 transition-all border-l-2 border-transparent hover:border-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
