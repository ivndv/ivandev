// Zustand
import type { StateCreator } from "zustand";

// Tipos del slice de idioma
export interface LanguageSlice {
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;
}

// Slice de idioma
export const createLanguageSlice: StateCreator<LanguageSlice, [], [], LanguageSlice> = (set) => ({
  // 1. Inicializar idioma desde localStorage
  language: (() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("language") as "es" | "en";
    return saved || "es";
  })(),
  // 2. Fijar idioma y persistir
  setLanguage: (language) => {
    localStorage.setItem("language", language);
    set({ language });
  },
});
