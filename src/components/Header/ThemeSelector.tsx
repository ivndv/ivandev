// Iconos
import { Moon, Sun } from "lucide-react";
// Mensajes
import { m } from "@/paraglide/messages";
// Store
import { useAppStore } from "@/store/appStore";

// ThemeSelector
// Alterna entre tema claro y oscuro con persistencia en localStorage
const ThemeSelector = () => {
	const theme = useAppStore((s) => s.theme);
	const toggleTheme = useAppStore((s) => s.toggleTheme);
	const oscuro = theme === "dark";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={m.a11y_toggle_theme()}
			aria-pressed={oscuro}
			title={m.a11y_theme()}
			className="p-2 rounded-full text-text-muted hover:text-accent hover:bg-accent/10 transition-colors"
		>
			<span className="block transition-transform duration-500 rotate-0">
				{oscuro ? <Sun size={18} /> : <Moon size={18} />}
			</span>
		</button>
	);
};

export default ThemeSelector;
