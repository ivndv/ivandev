// React
import { useEffect } from "react";
// React Router
import { useLocation, useNavigate } from "react-router-dom";
// Hooks
import { useSeo } from "@/hooks/useSeo";
// Navegación
import { idSeccion, seccionDesdeHash } from "@/i18n/navigation";
// Mensajes
import { m } from "@/paraglide/messages";
// Paraglide
import { getLocale } from "@/paraglide/runtime";
// Secciones
import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Education from "@/sections/Education/Education";
import Experience from "@/sections/Experience/Experience";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";
import Skills from "@/sections/Skills/Skills";

// Home
// Página única con todas las secciones y navegación por anclas
const Home = () => {
	const { hash } = useLocation();
	const navigate = useNavigate();
	const locale = getLocale();

	// 1. Título y descripción del documento
	useSeo(m.seo_home_title(), m.seo_home_description());

	// 2. Resolver el ancla, aceptando el idioma contrario y desplazando a la sección
	useEffect(() => {
		if (!hash) return;

		const clave = seccionDesdeHash(hash);
		if (!clave) return;

		const id = idSeccion(clave, locale);

		// Corrige la URL si el ancla venía en el otro idioma
		if (hash.slice(1) !== id) {
			navigate({ hash: id }, { replace: true });
		}

		const destino = document.getElementById(id);
		const sinMovimiento = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		destino?.scrollIntoView({
			behavior: sinMovimiento ? "auto" : "smooth",
			block: "start",
		});
	}, [hash, locale, navigate]);

	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Education />
			<Contact />
		</>
	);
};

export default Home;
