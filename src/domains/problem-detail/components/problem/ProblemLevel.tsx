'use client';

import { useState } from 'react';
import { ProblemLevelChip } from '@/components/shared/ProblemLevelChip';
import { Chip } from '@/components/ui/Chip';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

interface ProblemLevelProps {
  level: number;
}

export function ProblemLevel({ level }: ProblemLevelProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={handleClick} className="cursor-pointer">
          {isVisible ? (
            <ProblemLevelChip level={level} />
          ) : (
            <Chip variant="soft-outlined" color="gray" size="small">
              난이도 가려짐
            </Chip>
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isVisible ? '난이도 숨기기' : '난이도 보기'}</p>
      </TooltipContent>
    </Tooltip>
  );
}