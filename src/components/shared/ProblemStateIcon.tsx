import type { ProblemState } from '@/types/problem.type';

interface ProblemStateIconProps {
  state: ProblemState;
  className?: string;
}

export function ProblemStateIcon({ state, className = '' }: ProblemStateIconProps) {
  switch (state) {
    case 'SOLVED':
      return (
        <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 ${className}`}>
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      );
    case 'FAILED':
      return (
        <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-red-100 ${className}`}>
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      );
    case 'NONE':
    default:
      return (
        <div className={`w-6 h-6 rounded-full bg-gray-200 border-2 border-gray-300 ${className}`}></div>
      );
  }
}