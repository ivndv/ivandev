// Componentes

// i18n
import { LocaleSync } from "./i18n/LocaleSync";
import { Router } from "./router/Router";

// App
// Componente raíz de la aplicación
function App() {
	return (
		<LocaleSync>
			<Router />
		</LocaleSync>
	);
}

export default App;
