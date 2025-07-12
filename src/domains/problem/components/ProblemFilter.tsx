'use client'

import { Typography } from "@/components/ui/Typography";

export interface ProblemFilterProps {
  onDifficultyChange?: (difficulty: string[]) => void;
  onTypeChange?: (type: string) => void;
  onStatusChange?: (status: string) => void;
}

export function ProblemFilter({}: ProblemFilterProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Typography variant="small" className="font-medium text-gray-700">
            난이도:
          </Typography>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">
              Easy
            </button>
            <button className="px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors">
              Medium
            </button>
            <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors">
              Hard
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Typography variant="small" className="font-medium text-gray-700">
            유형:
          </Typography>
          <select 
            className="px-3 py-1 text-xs border border-gray-300 rounded-md bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onTypeChange?.(e.target.value)}
          >
            <option>전체</option>
            <option>배열</option>
            <option>문자열</option>
            <option>동적 프로그래밍</option>
            <option>그래프</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Typography variant="small" className="font-medium text-gray-700">
            상태:
          </Typography>
          <select 
            className="px-3 py-1 text-xs border border-gray-300 rounded-md bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onStatusChange?.(e.target.value)}
          >
            <option>전체</option>
            <option>해결됨</option>
            <option>시도함</option>
            <option>미해결</option>
          </select>
        </div>
      </div>
    </div>
  );
}