'use client'

import { ProblemLevelFilter } from "./ProblemLevelFilter";
import { ProblemTypeFilter } from "./ProblemTypeFilter";
import { ProblemStateFilter } from "./ProblemStateFilter";
import { ProblemTitleFilter } from "./ProblemTitleFilter";
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
    <div>
      {/* 메인 필터 영역 */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        {/* 필터 버튼들 */}
        <div className="flex flex-wrap gap-2">
          <ProblemLevelFilter 
            levelList={filters?.levelList || []} 
            placeholder="난이도"
          />
          <ProblemTypeFilter 
            typeList={filters?.typeList || []} 
            placeholder="유형"
          />
          <ProblemStateFilter 
            states={filters?.states || []} 
            placeholder="상태"
          />
        </div>
        
        {/* 검색 영역 */}
        <div className="w-full sm:w-72">
          <ProblemTitleFilter title={filters?.title || ""} />
        </div>
      </div>
      
      {/* 적용된 필터 표시 */}
      <AppliedFilters 
        levelList={filters?.levelList || []} 
        typeList={filters?.typeList || []} 
        states={filters?.states || []} 
      />
    </div>
  );
}