'use client';

import { useState } from 'react';
import { ProblemTypeChip } from '@/components/shared/ProblemTypeChip';
import { ProblemType } from '@/types/problem.type';
import { Chip } from '@/components/ui/Chip';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

interface ProblemTypeListProps {
  typeList: ProblemType[];
}

export function ProblemTypeList({ typeList }: ProblemTypeListProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={handleClick} className="cursor-pointer">
          {isVisible ? (
            <div className="flex gap-1 flex-wrap">
              {typeList.map((type) => (
                <ProblemTypeChip key={type} type={type} />
              ))}
            </div>
          ) : (
            <Chip variant="soft-outlined" color="gray" size="small">
              유형 가려짐
            </Chip>
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isVisible ? '유형 숨기기' : '유형 보기'}</p>
      </TooltipContent>
    </Tooltip>
  );
}