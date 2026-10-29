// React Router
import { Outlet } from "react-router-dom";
// Mensajes
import { m } from "@/paraglide/messages";
// Componentes
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// Layout
// Contenedor principal que envuelve Header, contenido y Footer
export const Layout = () => {
	return (
		<div className="layout-container">
			{/* Salto directo al contenido para lectores de pantalla */}
			<a
				href="#contenido"
				className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-white focus:font-semibold"
			>
				{m.a11y_skip()}
			</a>
			<Header />
			{/* Contenido principal */}
			<main id="contenido" style={{ minHeight: "80vh" }}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
