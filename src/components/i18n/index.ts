import english from "./en.json";
import spanish from "./es.json";
import { getRelativeLocaleUrl } from "astro:i18n";

const translations = { en: english, es: spanish };

const getI18N = ({ currentLocale = "en" }: { currentLocale?: string }) =>
  translations[currentLocale as keyof typeof translations] ?? english;

export const useI18N = (currentLocale: string = "en") => ({
  currentLocale,
  i18n: getI18N({ currentLocale }),
  homeHref: getRelativeLocaleUrl(currentLocale, "/"),
  localeUrl: (path: string) => getRelativeLocaleUrl(currentLocale, path),
});
