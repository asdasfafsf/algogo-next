'use client';

import { ProblemSummary } from '@/types/problem.type';
import { ProblemLevelChip } from '@/components/shared/ProblemLevelChip';
import { ProblemStateIcon } from '@/components/shared/ProblemStateIcon';
import { ProblemSourceCell } from './ProblemSourceCell';
import { ProblemTh } from './ProblemTh';
import { PROBLEM_SORT } from '@/constants/problem.constant';

export interface ProblemTableProps {
  problems: ProblemSummary[];
  sort?: number;
}

export function ProblemTable({ problems, sort = PROBLEM_SORT.DEFAULT }: ProblemTableProps) {

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };

  const handleRowClick = (uuid: string) => {
    window.open(`/problem/${uuid}`, '_blank');
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
              <ProblemTh className="px-5 py-4 text-center w-20 min-w-20">
                상태
              </ProblemTh>
              <ProblemTh 
                className="px-6 py-4 text-left min-w-[320px] max-w-none"
                sortable
                sortColumn="title"
                currentSort={sort}
              >
                제목
              </ProblemTh>
              <ProblemTh 
                className="px-5 py-4 text-center w-36 min-w-36"
                sortable
                sortColumn="level"
                currentSort={sort}
              >
                난이도
              </ProblemTh>
              <ProblemTh 
                className="px-5 py-4 text-center w-40 min-w-40"
                sortable
                sortColumn="answerRate"
                currentSort={sort}
              >
                정답률
              </ProblemTh>
              <ProblemTh 
                className="px-5 py-4 text-center w-24 min-w-24"
                sortable
                sortColumn="submitCount"
                currentSort={sort}
              >
                제출
              </ProblemTh>
              <ProblemTh className="px-5 py-4 text-center w-28 min-w-28">
                출처
              </ProblemTh>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {problems.map((problem) => (
              <tr 
                key={problem.uuid} 
                className="group transition-all duration-200 hover:bg-slate-100 cursor-pointer"
                onClick={() => handleRowClick(problem.uuid)}
              >
                <td className="px-5 py-5 w-20 min-w-20">
                  <div className="flex items-center justify-center h-full">
                    <ProblemStateIcon state={problem.state} />
                  </div>
                </td>
                <td className="px-6 py-5 min-w-[320px] max-w-none">
                  <div className="flex items-center h-full">
                    <span className="text-sm font-normal text-slate-800 group-hover:text-blue-700 truncate block transition-colors duration-200">
                      {problem.title}
                    </span>
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
                    <ProblemSourceCell 
                      source={problem.source}
                      sourceId={problem.sourceId}
                      sourceUrl={problem.sourceUrl}
                    />
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