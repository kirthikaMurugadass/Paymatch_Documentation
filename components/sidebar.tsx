"use client"

import { SidebarContent } from "@/components/sidebar-content"

export function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r border-border bg-background">
      <div className="h-full overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <SidebarContent />
      </div>
    </aside>
  )
}
