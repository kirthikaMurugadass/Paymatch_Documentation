"use client"

import * as React from "react"
import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeOption = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"

const THEME_OPTIONS: Array<{
  value: ThemeOption
  label: string
  icon: typeof Sun
  
}> = [
  { value: "light", label: "Light", icon: Sun, },
  { value: "dark", label: "Dark", icon: Moon,  },
  { value: "system", label: "System", icon: Monitor,  },
]

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [systemPreference, setSystemPreference] = React.useState<ResolvedTheme>("light")
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Track system theme so "System" stays in sync live
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setSystemPreference(event.matches ? "dark" : "light")
    }

    handleChange(mediaQuery)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Close dropdown on outside click or Escape
  React.useEffect(() => {
    if (!open) return

    const handleClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return
      }
      setOpen(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("touchstart", handleClick)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("touchstart", handleClick)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  if (!mounted) {
    return null
  }

  const activeTheme = (theme as ThemeOption) ?? "system"
  const effectiveTheme: ResolvedTheme =
    activeTheme === "system"
      ? ((resolvedTheme as ResolvedTheme) ??
        (systemTheme as ResolvedTheme) ??
        systemPreference)
      : (activeTheme as ResolvedTheme)

  const activeLabel =
    THEME_OPTIONS.find((option) => option.value === activeTheme)?.label ??
    "System"

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="outline"
        size="sm"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="h-9 min-w-[120px] justify-between border-border bg-background text-foreground hover:bg-muted"
      >
        <div className="flex items-center gap-2">
          {effectiveTheme === "dark" ? (
            <Moon className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Sun className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="text-sm font-semibold">{activeLabel}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {activeTheme === "system" && (
            <span className="hidden sm:inline">
              
            </span>
          )}
          <ChevronDown className="h-4 w-4" />
        </div>
      </Button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Toggle theme"
          className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-border bg-popover shadow-lg"
        >
          <div className="py-2">
            {THEME_OPTIONS.map((option) => {
              const Icon = option.icon
              const isActive = activeTheme === option.value

              return (
                <button
                  key={option.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  onClick={() => {
                    setTheme(option.value)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex w-full items-start justify-between gap-2 px-3 py-2 text-left text-sm transition-colors",
                    "hover:bg-muted hover:text-foreground",
                    isActive && "bg-muted text-foreground"
                  )}
                >
                  <span className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <span className="flex flex-col">
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">
                        
                      </span>
                    </span>
                  </span>
                  {isActive && <Check className="h-4 w-4 text-primary" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}