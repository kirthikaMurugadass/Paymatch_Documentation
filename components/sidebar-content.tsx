"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"
import {
  Users,
  Package,
  FileText,
  Receipt,
  CreditCard,
  FileX,
  Repeat,
  DollarSign,
  User,
  Wallet,
  Building2,
  Palette,
  Users2,
  FolderOpen,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

interface NavItem {
  nameKey: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavSection {
  titleKey: string
  items: NavItem[]
}

const navigationSections: NavSection[] = [
  {
    titleKey: "navigation.masterData",
    items: [
      { nameKey: "navigation.clients", href: "/clients", icon: Users },
      { nameKey: "navigation.products", href: "/products", icon: Package },
    ],
  },
  {
    titleKey: "navigation.salesBilling",
    items: [
      { nameKey: "navigation.quotes", href: "/quotes", icon: FileText },
      { nameKey: "navigation.invoices", href: "/invoices", icon: Receipt },
      { nameKey: "navigation.payments", href: "/payments", icon: CreditCard },
      { nameKey: "navigation.creditNotes", href: "/credit-notes", icon: FileX },
      { nameKey: "navigation.recurringInvoices", href: "/recurring-invoices", icon: Repeat },
    ],
  },
  {
    titleKey: "navigation.expenses",
    items: [
      { nameKey: "navigation.expenses", href: "/expenses", icon: DollarSign },
    ],
  },
  {
    titleKey: "navigation.settingsSupport",
    items: [
      { nameKey: "navigation.profile", href: "/profile", icon: User },
      { nameKey: "navigation.billing", href: "/billing", icon: Wallet },
      { nameKey: "navigation.account", href: "/account", icon: Building2 },
      { nameKey: "navigation.branding", href: "/branding", icon: Palette },
      { nameKey: "navigation.team", href: "/team", icon: Users2 },
      { nameKey: "navigation.documents", href: "/documents", icon: FolderOpen },
      { nameKey: "navigation.emails", href: "/emails", icon: Mail },
    ],
  },
]

interface SidebarContentProps {
  onNavigate?: () => void
}

export function SidebarContent({ onNavigate }: SidebarContentProps) {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  // Auto-expand section containing active item, and expand all sections on initial load
  useEffect(() => {
    const newOpenSections = new Set<string>()
    
    navigationSections.forEach((section) => {
      const hasActiveItem = section.items.some((item) => item.href === pathname)
      if (hasActiveItem) {
        newOpenSections.add(section.titleKey)
      }
    })

    // If no active item, expand all sections by default for better UX
    if (newOpenSections.size === 0) {
      navigationSections.forEach((section) => {
        newOpenSections.add(section.titleKey)
      })
    }

    setOpenSections(newOpenSections)
  }, [pathname])

  const toggleSection = (titleKey: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(titleKey)) {
        next.delete(titleKey)
      } else {
        next.add(titleKey)
      }
      return next
    })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Close mobile menu if open
    if (onNavigate) {
      onNavigate()
    }

    // Smooth scroll for same-page navigation
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      // For different pages, let Next.js handle navigation
      // but ensure smooth scroll after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <nav className="p-4 space-y-2">
      {navigationSections.map((section) => {
        const isOpen = openSections.has(section.titleKey)
        const hasActiveItem = section.items.some((item) => item.href === pathname)

        return (
          <div key={section.titleKey} className="space-y-1">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.titleKey)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-muted-foreground",
                "hover:text-foreground transition-colors rounded-lg group relative",
                "hover:bg-muted",
                hasActiveItem && "text-foreground bg-muted"
              )}
            >
              <span className="tracking-wide">{t(section.titleKey as any)}</span>
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 transition-colors text-muted-foreground group-hover:text-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-colors text-muted-foreground group-hover:text-foreground" />
                )}
              </motion.div>
            </button>

            {/* Section Items */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 space-y-1 border-l border-border pl-3 overflow-hidden"
                >
                {section.items.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        "group relative",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-1 h-6 bg-primary rounded-r-full" />
                      )}
                      <Icon
                        className={cn(
                          "h-4 w-4 transition-colors",
                          isActive && "text-primary",
                          "group-hover:text-primary"
                        )}
                      />
                      <span className="tracking-wide">{t(item.nameKey as any)}</span>
                    </Link>
                  )
                })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </nav>
  )
}
