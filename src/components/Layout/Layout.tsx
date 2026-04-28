import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

/**
 * Componente Layout que actúa como contenedor principal de la aplicación.
 * Renderiza el Header, el contenido principal (hijos) y el Footer.
 */
export const Layout = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="layout-container">
			<Header />
			<main style={{ minHeight: "80vh" }}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
