"use client"

import * as React from "react"
import { TabsList } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface CodeEditorTabsListProps {
  className?: string
  children: React.ReactNode
}

export function CodeEditorTabsList({
  className,
  children,
  ...props
}: CodeEditorTabsListProps) {
  const [activeTabRect, setActiveTabRect] = React.useState<DOMRect | null>(null);
  const tabsListRef = React.useRef<HTMLDivElement>(null);

  const updateIndicator = React.useCallback(() => {
    if (!tabsListRef.current) return;
    
    const activeTab = tabsListRef.current.querySelector('[data-state="active"]') as HTMLElement;
    if (activeTab) {
      const activeTabRect = activeTab.getBoundingClientRect();
      setActiveTabRect(activeTabRect);
    }
  }, []);

  React.useEffect(() => {

    // Initial update
    updateIndicator();

    // Update on window resize
    window.addEventListener('resize', updateIndicator);
    
    // Use MutationObserver to detect when active tab changes
    const observer = new MutationObserver(updateIndicator);
    if (tabsListRef.current) {
      observer.observe(tabsListRef.current, {
        attributes: true,
        attributeFilter: ['data-state'],
        subtree: true
      });
    }

    return () => {
      window.removeEventListener('resize', updateIndicator);
      observer.disconnect();
    };
  }, [children, updateIndicator]);

  const getIndicatorStyle = React.useMemo((): React.CSSProperties => {
    if (!activeTabRect || !tabsListRef.current) {
      return { opacity: 0 };
    }

    const tabsListRect = tabsListRef.current.getBoundingClientRect();
    const left = activeTabRect.left - tabsListRect.left;
    const width = activeTabRect.width;

    return {
      transform: `translateX(${left}px)`,
      width: `${width}px`,
      opacity: 1
    };
  }, [activeTabRect]);

  return (
    <div className="relative w-full border-b border-editor-page-border bg-editor-page-surface" ref={tabsListRef}>
      <TabsList
        className={cn(
          // Base styles
          "justify-start rounded-none p-0 h-auto",
          // Remove border as it's now on container
          "border-0",
          // Background transparent as container has background
          "bg-transparent",
          // Always full width for equal tab distribution
          "w-full",
          // Always use inline-flex for proper tab layout
          "inline-flex",
          className
        )}
        {...props}
      >
        {children}
      </TabsList>
      
      {/* Sliding indicator - moved to bottom */}
      <div
        className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300 ease-out"
        style={getIndicatorStyle}
      />
    </div>
  )
}