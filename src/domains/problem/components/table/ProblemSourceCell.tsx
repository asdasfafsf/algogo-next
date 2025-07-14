'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip'

interface ProblemSourceCellProps {
  source: string
  sourceId: string
  sourceUrl?: string
}

export function ProblemSourceCell({ source, sourceId, sourceUrl }: ProblemSourceCellProps) {
  const sourceMap = {
    'BOJ': '백준',
  } as const;
  
  const content = (
    <div className="flex flex-col items-center justify-center space-y-1">
      <span className="text-xs font-normal text-slate-600 truncate max-w-full">
        {sourceMap[source as keyof typeof sourceMap]}
      </span>
      <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded-md">
        #{sourceId}
      </span>
    </div>
  )

  if (sourceUrl) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className="cursor-pointer"
            onClick={() => window.open(sourceUrl, '_blank', 'noopener,noreferrer')}
          >
            {content}
          </div>
        </TooltipTrigger>
        <TooltipContent className="text-xs">
          새 탭에서 열기
        </TooltipContent>
      </Tooltip>
    )
  }

  return content
}