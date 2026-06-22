// Iconos
import { Menu, Moon, Sun, X } from "lucide-react";
// React
import { useState } from "react";
// React Router
import { Link } from "react-router-dom";
// Store
import { useAppStore } from "@/store/appStore";
// Hooks
import { useTranslation } from "@/hooks/useTranslation";

// Header
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const theme = useAppStore((s) => s.theme);
	const language = useAppStore((s) => s.language);
	const toggleTheme = useAppStore((s) => s.toggleTheme);
	const setLanguage = useAppStore((s) => s.setLanguage);
	const t = useTranslation();

	// 1. Mapear nombres de navegación desde traducciones
	const navLinks = t.header.navLinks.map((name, i) => ({
		name,
		path: ["/", "/skills", "/experiencia", "/proyectos", "/sobre-mi", "/formacion", "/contacto"][i],
	}));

	return (
		<header className="fixed top-0 w-full z-50 bg-surface-bg/95 backdrop-blur-sm border-b border-accent shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link
						to="/"
						className="flex-shrink-0 flex items-center cursor-pointer"
					>
						<img
							src="https://assets.portafolioweb.mgdc.site/logo.png"
							alt="Logo"
							className="h-10 w-10 rounded-full object-cover ring-2 ring-transparent hover:ring-accent transition-all duration-300"
						/>
					</Link>

					{/* Navegación desktop */}
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

					{/* Botones: idioma y tema */}
					<div className="hidden md:flex items-center space-x-4">
						<button
							type="button"
							onClick={() => setLanguage(language === "es" ? "en" : "es")}
							className="text-text-muted hover:text-accent font-semibold text-sm transition-colors duration-200"
							aria-label="Toggle Language"
						>
							{language === "es" ? "EN" : "ES"}
						</button>
						<button
							type="button"
							onClick={toggleTheme}
							className="text-text-muted hover:text-accent hover:bg-accent/10 p-2 rounded-full transition-all duration-300"
							aria-label="Toggle Theme"
						>
							{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
						</button>
					</div>

					{/* Menú mobile */}
					<div className="md:hidden flex items-center space-x-3">
						<button
							type="button"
							onClick={() => setLanguage(language === "es" ? "en" : "es")}
							className="text-text-muted hover:text-accent font-semibold text-sm transition-colors duration-200"
						>
							{language === "es" ? "EN" : "ES"}
						</button>
						<button
							type="button"
							onClick={toggleTheme}
							className="text-text-muted p-2"
						>
							{theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
						</button>
						<button
							type="button"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-text-muted hover:text-accent focus:outline-none transition-colors"
						>
							{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Menú desplegable mobile */}
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
