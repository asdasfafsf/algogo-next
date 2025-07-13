'use client'

import { Typography } from "@/components/ui/Typography";
import { ProblemLevelFilter } from "./ProblemLevelFilter";
import { AppliedFilters } from "./AppliedFilters";
import type { IquiryProblemsSummary } from '@/types/problem.type';

export interface ProblemFilterProps {
  filters?: Partial<IquiryProblemsSummary>
  onDifficultyChange?: (difficulty: string[]) => void;
  onTypeChange?: (type: string) => void;
  onStatusChange?: (status: string) => void;
}

export function ProblemFilter({ filters }: ProblemFilterProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-3">
          <Typography variant="small" className="font-semibold text-gray-800 min-w-fit">
            난이도
          </Typography>
          <ProblemLevelFilter levelList={filters?.levelList || []} />
        </div>
      </div>
      
      {/* 적용된 필터 표시 */}
      <AppliedFilters levelList={filters?.levelList || []} />
    </div>
  );
}