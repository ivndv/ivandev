import { create } from "zustand";

type Theme = "light" | "dark";
type Language = "es" | "en";

interface AppState {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setLanguage: (lang: Language) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: (() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme") as Theme;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  })(),
  language: (() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("language") as Language;
    return saved || "es";
  })(),
  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return { theme: next };
    }),
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    set({ theme });
  },
  setLanguage: (language) => {
    localStorage.setItem("language", language);
    set({ language });
  },
}));

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("theme") as Theme;
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
}
