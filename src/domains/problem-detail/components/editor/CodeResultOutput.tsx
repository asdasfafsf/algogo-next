"use client"

import { Copy, Trash2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';

interface CodeResultOutputProps {
  customOutput?: string;
  onClearOutput?: () => void;
}

export function CodeResultOutput({
  customOutput = '',
  onClearOutput
}: CodeResultOutputProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(customOutput);
    } catch (err) {
      console.error('Failed to copy clipboard:', err);
    }
  };

  const handleClear = () => {
    onClearOutput?.();
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-full min-h-0">
        <textarea
          className="w-full h-full p-4 pr-12 border-0 font-mono text-sm bg-editor-page-bg text-editor-page-text resize-none outline-none box-border"
          placeholder="테스트할 입력을 입력하세요..."
          value={customOutput}
          readOnly
        />
        
        {/* Floating Action Icons - Horizontal Layout */}
        <div className="absolute top-4 right-4 flex flex-row gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopy}
                disabled={!customOutput?.trim()}
                className="p-1 text-blue-600 hover:cursor-pointer disabled:text-editor-page-text-muted disabled:cursor-not-allowed rounded"
              >
                <Copy className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>복사</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleClear}
                className="p-1 text-red-600 hover:cursor-pointer rounded"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>지우기</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}