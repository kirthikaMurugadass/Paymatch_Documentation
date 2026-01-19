"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarContent } from "@/components/sidebar-content"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export function MobileMenu() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label={t("common.openMenu")}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 h-screen w-80 max-w-[85vw] bg-background border-r border-border shadow-lg flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
                <h2 className="text-lg font-semibold tracking-wide text-foreground">{t("common.navigation")}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label={t("common.closeMenu")}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Sidebar Content - Scrollable */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <SidebarContent onNavigate={() => setIsOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
