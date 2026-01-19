"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export function Header() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <MobileMenu />
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold text-foreground tracking-wide">
              PAYMATCH
            </span>
            <span className="hidden sm:inline text-sm text-muted-foreground">{t("common.documentation")}</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9"
          >
            <Link href="/" aria-label={t("common.goToHome")}>
              <Home className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
