// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// CSS
import "./index.css";
// React Router
import { BrowserRouter } from "react-router-dom";
// Componentes
import App from "./App.tsx";

// Punto de entrada
// biome-ignore lint/style/noNonNullAssertion: root element always exists in index.html
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* React Router */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
