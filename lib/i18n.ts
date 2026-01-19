export type Language = "en" | "de";

export const languages: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "de", label: "German", nativeLabel: "Deutsch" },
];

export const defaultLanguage: Language = "en";

export const getStoredLanguage = (): Language => {
  if (typeof window === "undefined") return defaultLanguage;
  const stored = localStorage.getItem("language");
  return (stored === "en" || stored === "de") ? stored : defaultLanguage;
};

export const setStoredLanguage = (lang: Language): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("language", lang);
};
