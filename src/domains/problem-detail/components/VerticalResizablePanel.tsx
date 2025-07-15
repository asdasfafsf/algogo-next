'use client';

import { useState, useRef, useEffect } from 'react';
import { GripHorizontal } from 'lucide-react';

interface VerticalResizablePanelProps {
  topPanel: React.ReactNode;
  bottomPanel: React.ReactNode;
  defaultTopHeight?: number;
  minTopHeight?: number;
  maxTopHeight?: number;
}

export function VerticalResizablePanel({
  topPanel,
  bottomPanel,
  defaultTopHeight = 60,
  minTopHeight = 30,
  maxTopHeight = 80,
}: VerticalResizablePanelProps) {
  const [topHeight, setTopHeight] = useState(defaultTopHeight);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newTopHeight = ((e.clientY - containerRect.top) / containerRect.height) * 100;
      
      const clampedHeight = Math.max(
        minTopHeight,
        Math.min(maxTopHeight, newTopHeight)
      );
      
      setTopHeight(clampedHeight);
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
  }, [isDragging, minTopHeight, maxTopHeight]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div ref={containerRef} className="flex flex-col h-full">
      {/* 상단 패널 */}
      <div
        style={{ height: `${topHeight}%` }}
        className="bg-white border-b border-gray-200"
      >
        {topPanel}
      </div>
      
      {/* 리사이저 */}
      <div
        className={`h-2 bg-gray-50 border-t border-b border-gray-300 cursor-row-resize hover:bg-gray-100 transition-colors ${
          isDragging ? 'bg-gray-200' : ''
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="w-full h-full flex items-center justify-center">
          <GripHorizontal className="w-3 h-3 text-gray-400" />
        </div>
      </div>
      
      {/* 하단 패널 */}
      <div
        style={{ height: `${100 - topHeight}%` }}
        className="bg-white"
      >
        {bottomPanel}
      </div>
    </div>
  );
}