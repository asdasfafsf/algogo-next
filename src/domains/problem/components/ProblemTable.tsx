'use client'

import { ProblemSummary } from '@/types/problem.type';
import { ProblemLevelChip } from '@/components/shared/ProblemLevelChip';
import { ProblemStateIcon } from '@/components/shared/ProblemStateIcon';

export interface ProblemTableProps {
  problems: ProblemSummary[];
  onProblemClick?: (problemUuid: string) => void;
}

export function ProblemTable({ problems, onProblemClick }: ProblemTableProps) {


  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

  if (problems.length === 0) {
    return (
      <div className="bg-white border border-gray-200/60 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-12 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">문제가 없습니다</h3>
          <p className="text-gray-500">조건에 맞는 문제를 찾을 수 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-lg shadow-slate-900/5 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gradient-to-r from-slate-50 via-blue-50/20 to-slate-50 border-b border-slate-200/80 backdrop-blur-sm">
            <tr>
              <th className="px-5 py-4 text-center text-sm font-medium text-slate-700 w-20 min-w-20">
                상태
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-slate-700 min-w-[320px] max-w-none cursor-pointer hover:bg-slate-100/50 transition-colors">
                <div className="flex items-center gap-1.5">
                  <span>제목</span>
                  <div className="flex flex-col gap-px">
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 0L12 8H0L6 0Z"/>
                    </svg>
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 8L0 0H12L6 8Z"/>
                    </svg>
                  </div>
                </div>
              </th>
              <th className="px-5 py-4 text-center text-sm font-medium text-slate-700 w-36 min-w-36 cursor-pointer hover:bg-slate-100/50 transition-colors">
                <div className="flex items-center justify-center gap-1.5">
                  <span>난이도</span>
                  <div className="flex flex-col gap-px">
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 0L12 8H0L6 0Z"/>
                    </svg>
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 8L0 0H12L6 8Z"/>
                    </svg>
                  </div>
                </div>
              </th>
              <th className="px-5 py-4 text-center text-sm font-medium text-slate-700 w-40 min-w-40 cursor-pointer hover:bg-slate-100/50 transition-colors">
                <div className="flex items-center justify-center gap-1.5">
                  <span>정답률</span>
                  <div className="flex flex-col gap-px">
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 0L12 8H0L6 0Z"/>
                    </svg>
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 8L0 0H12L6 8Z"/>
                    </svg>
                  </div>
                </div>
              </th>
              <th className="px-5 py-4 text-center text-sm font-medium text-slate-700 w-24 min-w-24 cursor-pointer hover:bg-slate-100/50 transition-colors">
                <div className="flex items-center justify-center gap-1.5">
                  <span>제출</span>
                  <div className="flex flex-col gap-px">
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 0L12 8H0L6 0Z"/>
                    </svg>
                    <svg className="w-2 h-1.5 text-slate-300" viewBox="0 0 12 8" fill="currentColor">
                      <path d="M6 8L0 0H12L6 8Z"/>
                    </svg>
                  </div>
                </div>
              </th>
              <th className="px-5 py-4 text-center text-sm font-medium text-slate-700 w-28 min-w-28">
                출처
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {problems.map((problem) => (
              <tr 
                key={problem.uuid} 
                className="group transition-all duration-200 hover:bg-slate-100 cursor-pointer"
              >
                <td className="px-5 py-5 w-20 min-w-20">
                  <div className="flex items-center justify-center h-full">
                    <ProblemStateIcon state={problem.state} />
                  </div>
                </td>
                <td className="px-6 py-5 min-w-[320px] max-w-none">
                  <div className="flex items-center h-full">
                    <button 
                      className="text-left w-full focus:outline-none cursor-pointer"
                      onClick={() => onProblemClick?.(problem.uuid)}
                    >
                      <span className="text-sm font-normal text-slate-800 group-hover:text-blue-700 truncate block transition-colors duration-200">
                        {problem.title}
                      </span>
                    </button>
                  </div>
                </td>
                <td className="px-5 py-5 w-36 min-w-36">
                  <div className="flex items-center justify-center h-full">
                    <ProblemLevelChip 
                      level={problem.level} 
                      variant="filled" 
                      size="small"
                    />
                  </div>
                </td>
                <td className="px-5 py-5 w-40 min-w-40">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm font-normal text-slate-700">
                      {problem.answerRate.toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-5 w-24 min-w-24">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm font-normal text-slate-700">
                      {formatNumber(problem.submitCount)}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-5 w-28 min-w-28">
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <span className="text-xs font-normal text-slate-600 truncate max-w-full">
                        {problem.source}
                      </span>
                      <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded-md">
                        #{problem.sourceId}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}