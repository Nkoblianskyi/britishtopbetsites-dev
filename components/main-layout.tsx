"use client"

import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-1 max-w-[1580px] relative">
        <div className="w-full min-w-0 px-1">{children}</div>
      </div>
    </div>
  )
}
