'use client'

export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: string;
  solveRate: number;
  status: 'solved' | 'attempted' | 'unsolved';
}

export interface ProblemTableProps {
  problems: Problem[];
  onProblemClick?: (problemId: number) => void;
}

export function ProblemTable({ problems, onProblemClick }: ProblemTableProps) {
  const getStatusColor = (status: Problem['status']) => {
    switch (status) {
      case 'solved':
        return 'bg-green-500';
      case 'attempted':
        return 'bg-yellow-500';
      case 'unsolved':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getDifficultyColor = (difficulty: Problem['difficulty']) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-amber-100 text-amber-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                제목
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                난이도
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                유형
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                해결률
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {problems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`w-4 h-4 ${getStatusColor(problem.status)} rounded-full`}></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div 
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer"
                    onClick={() => onProblemClick?.(problem.id)}
                  >
                    {problem.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs ${getDifficultyColor(problem.difficulty)} rounded-full`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {problem.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {problem.solveRate}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}