// Zustand
import { create } from "zustand";
// Slices
import { type ThemeSlice, createThemeSlice } from "./themeSlice";
import { type LanguageSlice, createLanguageSlice } from "./languageSlice";

// Store global combinado
export type AppState = ThemeSlice & LanguageSlice;

export const useAppStore = create<AppState>()((...a) => ({
  ...createThemeSlice(...a),
  ...createLanguageSlice(...a),
}));

// 1. Aplicar clase dark al <html> en SSR si corresponde
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("theme") as "light" | "dark";
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
}
