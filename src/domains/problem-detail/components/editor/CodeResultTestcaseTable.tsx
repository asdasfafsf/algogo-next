"use client"

import { Chip } from '@/components/ui/Chip';
import { TestCase } from '@/types/testcase.type';

interface CodeResultTestcaseTableProps {
  testCases: TestCase[];
}

const getStatusChip = (state: TestCase['state']) => {
  switch (state) {
    case '일치':
      return <Chip variant="soft-outlined" color="green" size="small">성공</Chip>;
    case '불일치':
      return <Chip variant="soft-outlined" color="red" size="small">실패</Chip>;
    case '실행 중':
      return <Chip variant="soft-outlined" color="blue" size="small">실행 중</Chip>;
    default:
      return <Chip variant="soft-outlined" color="gray" size="small">대기</Chip>;
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
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-editor-page-surface/30">
            <tr>
              <th className="text-left px-8 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 min-w-[120px]">
                입력
              </th>
              <th className="text-left px-8 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 min-w-[120px]">
                출력
              </th>
              <th className="text-left px-8 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 min-w-[120px]">
                예상 결과
              </th>
              <th className="text-center px-5 py-4 text-sm font-medium text-editor-page-text border-b border-editor-page-border/50 w-32 min-w-32">
                일치 여부
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-editor-page-border/30">
            {testCases.map((testCase, index) => (
              <tr key={index} className="hover:bg-editor-page-surface/20 transition-colors duration-150">
                <td className="px-5 py-5">
                  <pre className="text-xs text-editor-page-text font-mono bg-editor-page-surface/40 px-3 py-2 rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {testCase.input}
                  </pre>
                </td>
                <td className="px-5 py-5">
                  <pre className="text-xs text-editor-page-text font-mono bg-editor-page-surface/40 px-3 py-2 rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {testCase.output || '-'}
                  </pre>
                </td>
                <td className="px-5 py-5">
                  <pre className="text-xs text-editor-page-text font-mono bg-editor-page-surface/40 px-3 py-2 rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {testCase.expected}
                  </pre>
                </td>
                <td className="px-5 py-5 text-center">
                  {getStatusChip(testCase.state)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}