// React
import { lazy, Suspense } from "react";
// React Router
import { Route, Routes } from "react-router-dom";
// Componentes
import { Layout } from "@/components/Layout/Layout.tsx";

// Carga diferida (lazy) de páginas
const Home = lazy(() => import("@/pages/Home/Home"));
const Privacidad = lazy(() => import("@/pages/Legal/Privacidad"));
const Terminos = lazy(() => import("@/pages/Legal/Terminos"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));

// Router
// Página única en la raíz y en /es, más las rutas legales
export const Router = () => {
	return (
		// Suspense con fallback de carga
		<Suspense
			fallback={
				<div className="min-h-screen flex items-center justify-center text-text-muted">
					…
				</div>
			}
		>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/es" element={<Home />} />
					<Route path="/privacy" element={<Privacidad />} />
					<Route path="/es/privacidad" element={<Privacidad />} />
					<Route path="/terms" element={<Terminos />} />
					<Route path="/es/terminos" element={<Terminos />} />
					{/* 404 */}
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
};
