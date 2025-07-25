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
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleHide = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleClick} className="cursor-pointer">
            <Chip variant="soft-outlined" color="gray" size="small">
              유형 가려짐
            </Chip>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>유형 보기</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <>
      {typeList.length > 0 ? (
        typeList.map((type) => (
          <Tooltip key={type}>
            <TooltipTrigger asChild>
              <button
                onClick={handleHide}
                className="cursor-pointer"
              >
                <ProblemTypeChip type={type} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>유형 숨기기</p>
            </TooltipContent>
          </Tooltip>
        ))
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={handleHide} 
              className="cursor-pointer"
            >
              <Chip variant="soft-outlined" color="gray" size="small">
                유형 없음
              </Chip>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>유형 숨기기</p>
          </TooltipContent>
        </Tooltip>
      )}
    </>
  );
}