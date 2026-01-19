import { Language } from "./i18n"
import enTranslations from "@/translations/en.json"
import deTranslations from "@/translations/de.json"

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

type TranslationKey = NestedKeyOf<typeof enTranslations>

const translations = {
  en: enTranslations,
  de: deTranslations,
} as const

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

export function useTranslation(language: Language) {
  const t = (key: TranslationKey): string => {
    const translation = getNestedValue(translations[language], key)
    if (typeof translation === 'string') {
      return translation
    }
    const fallback = getNestedValue(translations.en, key)
    return typeof fallback === 'string' ? fallback : key
  }

  return { t }
}

export type { TranslationKey }
