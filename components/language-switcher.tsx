"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"
import { languages } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation(language)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (langCode: "en" | "de") => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 hover:bg-muted/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("common.changeLanguage")}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 rounded-lg border bg-background shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => {
            const isActive = lang.code === language
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-muted transition-colors",
                  isActive && "bg-muted font-semibold"
                )}
              >
                <span className="text-foreground">{lang.nativeLabel}</span>
                {isActive && <Check className="h-4 w-4 text-primary" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
