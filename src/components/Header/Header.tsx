// Iconos
import { Menu, X } from "lucide-react";
// React
import { useEffect, useState } from "react";
// React Router
import { Link, useLocation, useNavigate } from "react-router-dom";
// Navegación
import {
	hrefSeccion,
	idSeccion,
	parseLocale,
	RUTAS,
	resolverRuta,
	rutaLocalizada,
	SECCIONES,
	type SeccionKey,
} from "@/i18n/navigation";
// Mensajes
import { m } from "@/paraglide/messages";
// Paraglide
import type { Locale } from "@/paraglide/runtime";
// Componentes
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

// Header
// Barra fija con navegación por anclas, scroll-spy e idioma en la ruta
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activa, setActiva] = useState<SeccionKey>(SECCIONES[0].key);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const locale = parseLocale(pathname);
	const esInicio = resolverRuta(pathname) === "home";

	// 1. Estilo del header según el scroll
	useEffect(() => {
		const alDesplazar = () => setScrolled(window.scrollY > 8);
		alDesplazar();
		window.addEventListener("scroll", alDesplazar, { passive: true });
		return () => window.removeEventListener("scroll", alDesplazar);
	}, []);

	// 2. Scroll-spy sobre las secciones de la página única
	useEffect(() => {
		if (!esInicio) {
			setActiva(SECCIONES[0].key);
			return;
		}

		const alDesplazar = () => {
			let actual: SeccionKey = SECCIONES[0].key;
			for (const seccion of SECCIONES) {
				const nodo = document.querySelector(`[data-section="${seccion.key}"]`);
				if (nodo && nodo.getBoundingClientRect().top <= 96) {
					actual = seccion.key;
				}
			}
			setActiva(actual);
		};

		alDesplazar();
		window.addEventListener("scroll", alDesplazar, { passive: true });
		return () => window.removeEventListener("scroll", alDesplazar);
	}, [esInicio]);

	// 3. Cerrar el menú mobile al cambiar de ruta
	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	// 4. Bloquear el scroll del fondo mientras el menú mobile está abierto
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	// 5. Cambiar de idioma conservando la sección visible
	const cambiarIdioma = (siguiente: Locale) => {
		const ruta = resolverRuta(pathname);

		if (ruta === "home") {
			navigate(`${RUTAS.home[siguiente]}#${idSeccion(activa, siguiente)}`);
			return;
		}

		navigate(ruta ? rutaLocalizada(ruta, siguiente) : RUTAS.home[siguiente]);
	};

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
					scrolled
						? "bg-page-bg/85 border-b border-surface-border shadow-sm"
						: "bg-page-bg/60 border-b border-transparent"
				}`}
			>
				<nav
					aria-label={m.a11y_main()}
					className="mx-auto max-w-6xl 2xl:max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center gap-4"
				>
					{/* Logo + nombre */}
					<Link
						to={RUTAS.home[locale]}
						className="flex items-center gap-2.5 shrink-0 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
					>
						<img
							src="https://assets.mgdc.site/ivandev/logo.png"
							alt="Logo"
							className="h-8 w-8 rounded-full object-cover ring-1 ring-surface-border transition-transform duration-300 group-hover:scale-105"
						/>
						<span className="hidden sm:block text-sm font-semibold tracking-tight text-text-main group-hover:text-accent transition-colors">
							Portafolio Web
						</span>
					</Link>

					{/* Navegación desktop */}
					<div className="hidden lg:flex flex-1 justify-center">
						<div className="flex items-center gap-1">
							{SECCIONES.map((seccion) => {
								const activo = esInicio && activa === seccion.key;
								return (
									<Link
										key={seccion.key}
										to={hrefSeccion(seccion.key, locale)}
										aria-current={activo ? "true" : undefined}
										className={`relative inline-flex items-center min-h-11 px-2.5 py-1.5 text-[13px] font-medium tracking-[-0.01em] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg ${
											activo
												? "text-accent"
												: "text-text-muted hover:text-text-main"
										}`}
									>
										{seccion.label()}
										<span
											className={`absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 rounded-full bg-accent transition-all duration-300 ${
												activo ? "opacity-100" : "opacity-0"
											}`}
										/>
									</Link>
								);
							})}
						</div>
					</div>

					{/* Espaciador mobile */}
					<div className="flex-1 lg:hidden" />

					{/* Acciones */}
					<div className="flex items-center gap-2 shrink-0">
						<div className="hidden lg:flex items-center gap-2">
							<LanguageSelector locale={locale} onChange={cambiarIdioma} />
							<ThemeSelector />
						</div>
						<button
							type="button"
							onClick={() => setMenuOpen((abierto) => !abierto)}
							aria-expanded={menuOpen}
							aria-label={menuOpen ? m.a11y_close_menu() : m.a11y_open_menu()}
							className="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 rounded-md text-text-muted hover:text-accent hover:bg-accent/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
						>
							{menuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</nav>
			</header>

			{/* Sheet mobile */}
			<div
				inert={!menuOpen}
				className={`fixed inset-x-0 top-16 bottom-0 z-40 lg:hidden bg-page-bg/95 backdrop-blur-xl transition-all duration-300 ease-out ${
					menuOpen
						? "translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-3 opacity-0"
				}`}
			>
				<div className="h-full overflow-y-auto px-6 py-8 flex flex-col gap-8">
					<ul className="flex flex-col gap-1">
						{SECCIONES.map((seccion) => {
							const activo = esInicio && activa === seccion.key;
							return (
								<li key={seccion.key}>
									<Link
										to={hrefSeccion(seccion.key, locale)}
										onClick={() => setMenuOpen(false)}
										aria-current={activo ? "true" : undefined}
										className={`flex items-center justify-between py-3 text-lg font-medium border-b border-surface-border/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg ${
											activo ? "text-accent" : "text-text-main"
										}`}
									>
										{seccion.label()}
										<span className="text-xs text-text-muted">
											{String(
												SECCIONES.findIndex((s) => s.key === seccion.key) + 1,
											).padStart(2, "0")}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="flex items-center justify-between gap-4">
						<LanguageSelector locale={locale} onChange={cambiarIdioma} />
						<ThemeSelector />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
