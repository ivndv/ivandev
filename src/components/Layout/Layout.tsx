import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

/**
 * Componente Layout que actúa como contenedor principal de la aplicación.
 * Renderiza el Header, el contenido principal (hijos) y el Footer.
 */
export const Layout = () => {
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
