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
    <div className="bg-white border border-gray-200/60 rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
            <tr>
              <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 w-20 min-w-20">
                상태
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 min-w-[320px] max-w-none">
                제목
              </th>
              <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 w-36 min-w-36">
                난이도
              </th>
              <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 w-40 min-w-40">
                정답률
              </th>
              <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 w-24 min-w-24">
                제출
              </th>
              <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700 w-28 min-w-28">
                출처
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {problems.map((problem) => (
              <tr 
                key={problem.uuid} 
                className="group hover:bg-gray-50/50 transition-colors duration-200"
              >
                <td className="px-4 py-4 w-20 min-w-20 text-center">
                  <div className="flex justify-center">
                    <ProblemStateIcon state={problem.state} />
                  </div>
                </td>
                <td className="px-6 py-4 min-w-[320px] max-w-none">
                  <button 
                    className="text-left group-hover:text-blue-600 transition-colors duration-200 w-full"
                    onClick={() => onProblemClick?.(problem.uuid)}
                  >
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">
                      {problem.title}
                    </div>
                  </button>
                </td>
                <td className="px-4 py-4 w-36 min-w-36 text-center">
                  <div className="flex justify-center">
                    <ProblemLevelChip 
                      level={problem.level} 
                      variant="soft-outlined" 
                      size="small"
                    />
                  </div>
                </td>
                <td className="px-4 py-4 w-40 min-w-40">
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-sm font-medium text-gray-900">
                      {problem.answerRate.toFixed(1)}%
                    </span>
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(problem.answerRate, 100)}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 w-24 min-w-24 text-center">
                  <span className="text-sm text-gray-600">
                    {formatNumber(problem.submitCount)}
                  </span>
                </td>
                <td className="px-4 py-4 w-28 min-w-28 text-center">
                  <div className="flex flex-col items-center space-y-0.5">
                    <div className="text-xs font-semibold text-slate-700 truncate max-w-full">
                      {problem.source}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">
                      #{problem.sourceId}
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