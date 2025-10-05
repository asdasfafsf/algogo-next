"use client"

import * as React from "react"
import { TabsContent } from "@/components/ui/Tabs"
import { cn } from "@/lib/utils"

interface CodeEditorTabsContentProps {
  className?: string
  children: React.ReactNode
  value: string
}

export function CodeEditorTabsContent({
  className,
  children,
  value,
  ...props
}: CodeEditorTabsContentProps) {
  return (
    <TabsContent
      value={value}
      className={cn(
        "flex-1 overflow-hidden bg-editor-page-bg text-editor-page-text mt-0 ring-0 focus-visible:ring-0 h-full",
        className
      )}
      {...props}
    >
      {children}
    </TabsContent>
  )
}