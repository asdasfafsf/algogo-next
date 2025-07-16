"use client"

import { Play, Clipboard, Trash2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';

interface CodeResultInputProps {
  customInput?: string;
  onInputChange?: (input: string) => void;
  onRunCode?: () => void;
}

export function CodeResultInput({
  customInput = '',
  onInputChange,
  onRunCode
}: CodeResultInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange?.(e.target.value);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onInputChange?.(text);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  const handleClear = () => {
    onInputChange?.('');
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-full min-h-0">
        <textarea
          className="w-full h-full p-4 pr-12 border-0 font-mono text-sm bg-editor-page-bg text-editor-page-text resize-none outline-none box-border"
          placeholder="테스트할 입력을 입력하세요..."
          value={customInput}
          onChange={handleInputChange}
        />
        
        {/* Floating Action Icons - Horizontal Layout */}
        <div className="absolute top-4 right-4 flex flex-row gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={onRunCode}
                disabled={!customInput?.trim()}
                className="p-1 text-green-500 hover:text-green-600 disabled:text-editor-page-text-muted disabled:cursor-not-allowed cursor-pointer transition-colors duration-200 rounded"
              >
                <Play className="w-5 h-5 fill-current" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>실행</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handlePaste}
                className="p-1 text-blue-500 hover:text-blue-600 cursor-pointer transition-colors duration-200 rounded"
              >
                <Clipboard className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>붙여넣기</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleClear}
                className="p-1 text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-200 rounded"
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