'use client';

import { useState, useCallback } from 'react';
import { Typography } from '@/components/ui/Typography';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from '@/components/ui/Tooltip';
import { Check, Copy, CornerDownLeft } from 'lucide-react';

interface ProblemInputOutputItemProps {
  content: string;
  label: string;
  type: 'input' | 'output';
}

// 시각적 아이콘 컴포넌트들
const EnterIcon = () => (
  <CornerDownLeft className="w-3 h-3 text-blue-400 inline" />
);

const SpaceIcon = () => (
  <div className="w-2 h-0.5 bg-blue-400 rounded-full inline-block" />
);


export function ProblemInputOutputItem({ 
  content, 
  label 
}: ProblemInputOutputItemProps) {
  const [copied, setCopied] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleMouseLeave = useCallback(() => {
    if (!copied) {
      setCopied(false);
    }
  }, [copied]);

  const handleClick = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTooltipOpen(true);
    // 2초 후 툴팁 닫기 및 복사 상태 해제
    setTimeout(() => {
      setCopied(false);
      setTooltipOpen(false);
    }, 2000);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      await handleClick();
    }
  };

  // 컨텐츠를 시각적으로 표현하는 함수
  const renderContentWithVisualChars = (text: string) => {
    return text.split(/\n/).map((line, lineIndex, lineArray) => (
      <div key={lineIndex} className="flex flex-wrap items-center">
        {line.split(' ').map((word, wordIndex, wordArray) => (
          <span key={wordIndex} className="flex items-center">
            <span className="text-white font-mono">{word}</span>
            {wordIndex < wordArray.length - 1 && (
              <span className="mx-1">
                <SpaceIcon />
              </span>
            )}
          </span>
        ))}
        {lineIndex < lineArray.length - 1 && (
          <span className="ml-1">
            <EnterIcon />
          </span>
        )}
      </div>
    ));
  };

  return (
    <div>
      <Typography className="mb-2 text-gray-900 font-semibold">
        {label}
      </Typography>
      
      <Tooltip open={tooltipOpen || undefined}>
        <TooltipTrigger asChild>
          <div
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            className="relative px-4 py-3 w-full cursor-pointer focus:outline-none bg-gray-900 text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors group"
          >
            <div className="pr-8">
              <div className="text-sm whitespace-pre-wrap break-words">
                {renderContentWithVisualChars(content)}
              </div>
            </div>
            
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent key={copied ? 'copied' : 'copy'}>
          <p>{copied ? '복사됨' : '복사'}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}