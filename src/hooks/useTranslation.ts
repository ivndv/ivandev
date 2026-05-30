import { useAppStore } from "../store/appStore";
import { es } from "../i18n/es";
import { en } from "../i18n/en";
import type { Translations } from "../i18n/es";

export const useTranslation = (): Translations => {
  const language = useAppStore((s) => s.language);
  return language === "es" ? es : en;
};
