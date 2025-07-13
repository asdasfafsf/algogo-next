'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { PROBLEM_SORT } from '@/constants/problem.constant';

interface ProblemThProps {
  children: React.ReactNode;
  className?: string;
  sortable?: boolean;
  sortColumn?: string;
  currentSort?: number;
}

export function ProblemTh({ 
  children, 
  className = '', 
  sortable = false, 
  sortColumn, 
  currentSort 
}: ProblemThProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const getSortState = () => {
    if (!sortable || !sortColumn || !currentSort) return { isAscActive: false, isDescActive: false };
    
    let isAscActive = false;
    let isDescActive = false;
    
    switch (sortColumn) {
      case 'title':
        isAscActive = currentSort === PROBLEM_SORT.TITLE_ASC;
        isDescActive = currentSort === PROBLEM_SORT.TITLE_DESC;
        break;
      case 'level':
        isAscActive = currentSort === PROBLEM_SORT.LEVEL_ASC;
        isDescActive = currentSort === PROBLEM_SORT.LEVEL_DESC;
        break;
      case 'answerRate':
        isAscActive = currentSort === PROBLEM_SORT.ANSWER_RATE_ASC;
        isDescActive = currentSort === PROBLEM_SORT.ANSWER_RATE_DESC;
        break;
      case 'submitCount':
        isAscActive = currentSort === PROBLEM_SORT.SUBMIT_COUNT_ASC;
        isDescActive = currentSort === PROBLEM_SORT.SUBMIT_COUNT_DESC;
        break;
    }
    
    return { isAscActive, isDescActive };
  };

  const handleClick = () => {
    if (!sortable || !sortColumn) return;
    
    let newSort: number;
    
    switch (sortColumn) {
      case 'title':
        if (currentSort === PROBLEM_SORT.TITLE_ASC) {
          newSort = PROBLEM_SORT.TITLE_DESC;
        } else if (currentSort === PROBLEM_SORT.TITLE_DESC) {
          newSort = PROBLEM_SORT.DEFAULT;
        } else {
          newSort = PROBLEM_SORT.TITLE_ASC;
        }
        break;
      case 'level':
        if (currentSort === PROBLEM_SORT.LEVEL_ASC) {
          newSort = PROBLEM_SORT.LEVEL_DESC;
        } else if (currentSort === PROBLEM_SORT.LEVEL_DESC) {
          newSort = PROBLEM_SORT.DEFAULT;
        } else {
          newSort = PROBLEM_SORT.LEVEL_ASC;
        }
        break;
      case 'answerRate':
        if (currentSort === PROBLEM_SORT.ANSWER_RATE_ASC) {
          newSort = PROBLEM_SORT.ANSWER_RATE_DESC;
        } else if (currentSort === PROBLEM_SORT.ANSWER_RATE_DESC) {
          newSort = PROBLEM_SORT.DEFAULT;
        } else {
          newSort = PROBLEM_SORT.ANSWER_RATE_ASC;
        }
        break;
      case 'submitCount':
        if (currentSort === PROBLEM_SORT.SUBMIT_COUNT_ASC) {
          newSort = PROBLEM_SORT.SUBMIT_COUNT_DESC;
        } else if (currentSort === PROBLEM_SORT.SUBMIT_COUNT_DESC) {
          newSort = PROBLEM_SORT.DEFAULT;
        } else {
          newSort = PROBLEM_SORT.SUBMIT_COUNT_ASC;
        }
        break;
      default:
        return;
    }
    
    const params = new URLSearchParams(searchParams.toString());
    if (newSort === PROBLEM_SORT.DEFAULT) {
      params.delete('sort');
    } else {
      params.set('sort', newSort.toString());
    }
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const { isAscActive, isDescActive } = getSortState();
  
  const baseClassName = `text-sm font-medium text-slate-700 ${className}`;
  const interactiveClassName = sortable 
    ? `cursor-pointer hover:bg-slate-100/50 transition-colors ${baseClassName}`
    : baseClassName;

  const content = (
    <div className={`flex items-center gap-1.5 ${className.includes('text-left') ? '' : 'justify-center'}`}>
      <span>{children}</span>
      {sortable && (
        <div className="flex flex-col gap-px">
          <svg 
            className={`w-2 h-1.5 ${isAscActive ? 'text-slate-600' : 'text-slate-300'}`} 
            viewBox="0 0 12 8" 
            fill="currentColor"
          >
            <path d="M6 0L12 8H0L6 0Z"/>
          </svg>
          <svg 
            className={`w-2 h-1.5 ${isDescActive ? 'text-slate-600' : 'text-slate-300'}`} 
            viewBox="0 0 12 8" 
            fill="currentColor"
          >
            <path d="M6 8L0 0H12L6 8Z"/>
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <th className={interactiveClassName} onClick={handleClick}>
      {content}
    </th>
  );
}