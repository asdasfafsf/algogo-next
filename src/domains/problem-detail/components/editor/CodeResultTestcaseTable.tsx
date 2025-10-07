"use client"

import { CheckCircle, XCircle } from 'lucide-react';
import { TestCase } from '@/types/testcase.type';

interface CodeResultTestcaseTableProps {
  testCases: TestCase[];
}

const getStatusIndicator = (state: TestCase['state']) => {
  switch (state) {
    case '일치':
      return (
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3.5 h-3.5 text-green-600" />
          <span className="text-xs font-medium text-green-700">성공</span>
        </div>
      );
    case '불일치':
      return (
        <div className="flex items-center gap-1">
          <XCircle className="w-3.5 h-3.5 text-red-600" />
          <span className="text-xs font-medium text-red-700">실패</span>
        </div>
      );
    case '실행 중':
      return (
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-blue-700">실행 중</span>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 bg-gray-400 rounded-full" />
          <span className="text-xs font-medium text-gray-600">대기</span>
        </div>
      );
  }
};

export function CodeResultTestcaseTable({ testCases }: CodeResultTestcaseTableProps) {
  if (testCases.length === 0) {
    return (
      <div className="text-center text-editor-page-text-muted py-8">
        코드를 실행하면 테스트 결과가 표시됩니다.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-editor-page-border">
      <div className="overflow-x-auto scrollbar-gutter-stable">
        <table className="w-full min-w-[600px] table-fixed">
          <thead className="bg-editor-page-surface/30">
            <tr>
              <th className="text-left pl-7 pr-4 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 min-w-[120px]">
                입력
              </th>
              <th className="text-left pl-7 pr-4 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 min-w-[120px]">
                출력
              </th>
              <th className="text-left pl-7 pr-4 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 min-w-[120px]">
                예상 결과
              </th>
              <th className="text-left pl-7 pr-4 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 w-[120px]">
                일치 여부
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-editor-page-border/30">
            {testCases.map((testCase, index) => (
              <tr key={index} className="hover:bg-editor-page-surface/20 transition-colors duration-150">
                <td className="px-4 py-4 align-top">
                  <pre className="text-xs text-editor-page-text font-mono bg-editor-page-surface/40 px-3 py-2 rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {testCase.input}
                  </pre>
                </td>
                <td className="px-4 py-4 align-top">
                  <pre className="text-xs text-editor-page-text font-mono bg-editor-page-surface/40 px-3 py-2 rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {testCase.output || '-'}
                  </pre>
                </td>
                <td className="px-4 py-4 align-top">
                  <pre className="text-xs text-editor-page-text font-mono bg-editor-page-surface/40 px-3 py-2 rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {testCase.expected}
                  </pre>
                </td>
                <td className="pl-7 pr-4 py-4 align-middle">
                  {getStatusIndicator(testCase.state)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}