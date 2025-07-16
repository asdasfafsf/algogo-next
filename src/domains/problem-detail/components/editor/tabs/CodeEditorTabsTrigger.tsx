"use client"

import * as React from "react"
import { TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface CodeEditorTabsTriggerProps {
  className?: string
  children: React.ReactNode
  value: string
}

export function CodeEditorTabsTrigger({
  className,
  children,
  value,
  ...props
}: CodeEditorTabsTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        // Base styles
        "rounded-none border-0 bg-transparent text-sm font-medium text-editor-page-text-secondary text-center",
        // Responsive padding: more padding on desktop, less on mobile
        "px-3 py-2 md:px-4 md:py-3",
        // Always flex-1 to ensure equal width for all tabs
        "flex-1",
        // Active state
        "data-[state=active]:bg-editor-page-surface data-[state=active]:text-editor-page-text data-[state=active]:shadow-none",
        // Hover state
        "hover:text-editor-page-text hover:bg-editor-page-surface/50",
        // Focus state
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        // Transition for smooth color changes
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </TabsTrigger>
  )
}