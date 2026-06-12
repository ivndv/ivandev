// React
import { useEffect } from "react";
// React Router
import { Outlet, useLocation } from "react-router-dom";
// Componentes
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// Layout
// Contenedor principal que envuelve Header, contenido y Footer
export const Layout = () => {
	const { pathname } = useLocation();

	// 1. Scroll al inicio en cada cambio de ruta
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="layout-container">
			<Header />
			{/* Contenido principal */}
			<main style={{ minHeight: "80vh" }}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
