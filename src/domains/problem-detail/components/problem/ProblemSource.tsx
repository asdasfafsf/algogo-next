'use client';

import { ExternalLink } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';

interface ProblemSourceProps {
  source: string;
  sourceId: string;
  sourceUrl: string;
}

const SOURCE_DISPLAY_NAMES: Record<string, string> = {
  'BOJ': '백준',
  'Codeforces': 'Codeforces',
  'AtCoder': 'AtCoder',
  'Programmers': '프로그래머스',
};

export function ProblemSource({ source, sourceId, sourceUrl }: ProblemSourceProps) {
  const handleClick = () => {
    if (sourceUrl) {
      window.open(sourceUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const displayName = SOURCE_DISPLAY_NAMES[source] || source;
  const displayText = sourceId ? `${displayName} #${sourceId}` : displayName;

  return (
    <div className="flex items-center gap-2">
      <Typography variant="muted" size="sm">출처</Typography>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer"
            disabled={!sourceUrl}
          >
            <Typography variant="large" size="sm">{displayText}</Typography>
            {sourceUrl && <ExternalLink className="h-3 w-3" />}
          </button>
        </TooltipTrigger>
        {sourceUrl && (
          <TooltipContent>
            <p>클릭하여 원본 문제 보기</p>
          </TooltipContent>
        )}
      </Tooltip>
    </div>
  );
}