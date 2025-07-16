"use client"

import * as React from "react"
import { Tabs } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface CodeEditorTabsProps {
  className?: string
  children: React.ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

export function CodeEditorTabs({
  className,
  children,
  defaultValue,
  value,
  onValueChange,
  ...props
}: CodeEditorTabsProps) {
  return (
    <Tabs
      className={cn("h-full flex flex-col", className)}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      {children}
    </Tabs>
  )
}