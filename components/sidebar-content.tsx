"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Info,
  Sparkles,
  Users,
  Shield,
  LayoutDashboard,
  CreditCard,
  TrendingUp,
  Lock,
  Network,
  Monitor,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

interface NavItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigationSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/", icon: Home },
      { name: "About PayMatch", href: "/about", icon: Info },
      { name: "Key Features", href: "/features", icon: Sparkles },
    ],
  },
  {
    title: "User Guide",
    items: [
      { name: "User Roles", href: "/user-roles", icon: Users },
      { name: "Authentication", href: "/authentication", icon: Shield },
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "Core Features",
    items: [
      { name: "Transactions", href: "/transactions", icon: CreditCard },
      { name: "Settlement", href: "/settlement", icon: TrendingUp },
      { name: "Security", href: "/security", icon: Lock },
    ],
  },
  {
    title: "Technical",
    items: [
      { name: "Architecture", href: "/architecture", icon: Network },
      { name: "Screens & Modules", href: "/screens", icon: Monitor },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "FAQs", href: "/faqs", icon: HelpCircle },
      { name: "Conclusion", href: "/conclusion", icon: CheckCircle2 },
    ],
  },
]

interface SidebarContentProps {
  onNavigate?: () => void
}

export function SidebarContent({ onNavigate }: SidebarContentProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  // Auto-expand section containing active item
  useEffect(() => {
    navigationSections.forEach((section) => {
      const hasActiveItem = section.items.some((item) => item.href === pathname)
      if (hasActiveItem) {
        setOpenSections((prev) => new Set(prev).add(section.title))
      }
    })
  }, [pathname])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
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
        const isOpen = openSections.has(section.title)
        const hasActiveItem = section.items.some((item) => item.href === pathname)

        return (
          <div key={section.title} className="space-y-1">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.title)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-muted-foreground",
                "hover:text-foreground transition-all duration-200 rounded-xl",
                "hover:bg-accent/50 hover:shadow-soft",
                hasActiveItem && "text-foreground"
              )}
            >
              <span>{section.title}</span>
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                {isOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
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
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300",
                        "group relative",
                        isActive
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-primary shadow-soft border border-blue-500/20"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground hover:shadow-soft"
                      )}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
                      )}
                      <Icon
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isActive && "scale-110",
                          "group-hover:scale-110"
                        )}
                      />
                      <span>{item.name}</span>
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
