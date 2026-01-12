"use client"

import { SidebarContent } from "@/components/sidebar-content"

export function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-soft">
      <div className="h-full overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/20">
        <SidebarContent />
      </div>
    </aside>
  )
}
