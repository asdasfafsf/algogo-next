'use client';

import { useState, useRef, useEffect } from 'react';
import { GripVertical, ChevronLeft, ChevronRight } from 'lucide-react';

interface ResizablePanelProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  defaultLeftWidth?: number;
  minLeftWidth?: number;
  maxLeftWidth?: number;
}

export function ResizablePanel({
  leftPanel,
  rightPanel,
  defaultLeftWidth = 50,
  minLeftWidth = 20,
  maxLeftWidth = 80,
}: ResizablePanelProps) {
  const [leftWidth, setLeftWidth] = useState(defaultLeftWidth);
  const [isDragging, setIsDragging] = useState(false);
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [savedLeftWidth, setSavedLeftWidth] = useState(defaultLeftWidth);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      
      const clampedWidth = Math.max(
        minLeftWidth,
        Math.min(maxLeftWidth, newLeftWidth)
      );
      
      setLeftWidth(clampedWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, minLeftWidth, maxLeftWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const toggleLeftPanel = () => {
    if (isLeftCollapsed) {
      setLeftWidth(savedLeftWidth);
      setIsLeftCollapsed(false);
    } else {
      setSavedLeftWidth(leftWidth);
      setIsLeftCollapsed(true);
    }
  };

  return (
    <div ref={containerRef} className="flex h-full">
      {/* 좌측 패널 */}
      {!isLeftCollapsed && (
        <div
          style={{ width: `${leftWidth}%` }}
          className="bg-white border-r border-gray-200 relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {leftPanel}
          
          {/* 접기 버튼 - 동그란 버튼 */}
          {isHovering && (
            <button
              onClick={toggleLeftPanel}
              className="absolute top-1/2 -translate-y-1/2 -right-3 p-1.5 rounded-full bg-editor-page-bg border border-editor-page-border shadow-sm hover:shadow-md transition-all duration-200 z-10"
              title="문제 설명 접기"
            >
              <ChevronLeft className="w-4 h-4 text-editor-page-text-secondary" />
            </button>
          )}
        </div>
      )}
      
      {/* 리사이저 */}
      <div
        className={`w-2 bg-editor-page-surface border-l border-r border-editor-page-border hover:bg-editor-page-bg transition-colors relative ${
          isDragging ? 'bg-editor-page-border' : ''
        } ${isLeftCollapsed ? '' : 'cursor-col-resize'}`}
        onMouseDown={!isLeftCollapsed ? handleMouseDown : undefined}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="w-full h-full flex items-center justify-center">
          {!isLeftCollapsed && <GripVertical className="w-3 h-3 text-editor-page-text-muted" />}
        </div>
      </div>
      
      {/* 펼치기 버튼 - 접힌 상태일 때 항상 보임 */}
      {isLeftCollapsed && (
        <button
          onClick={toggleLeftPanel}
          className="absolute top-1/2 -translate-y-1/2 left-2 p-1.5 rounded-full bg-editor-page-bg border border-editor-page-border shadow-sm hover:shadow-md transition-all duration-200 z-10"
          title="문제 설명 펼치기"
        >
          <ChevronRight className="w-4 h-4 text-editor-page-text-secondary" />
        </button>
      )}
      
      {/* 우측 패널 */}
      <div
        style={{ width: `${isLeftCollapsed ? '100%' : `${100 - leftWidth}%`}` }}
        className="flex flex-col"
      >
        {rightPanel}
      </div>
    </div>
  );
}