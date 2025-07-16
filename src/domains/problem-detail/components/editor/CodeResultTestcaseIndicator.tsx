"use client"

import { CheckCircle, XCircle } from 'lucide-react';
import { TestCase } from '@/types/testcase.type';

interface CodeResultTestcaseIndicatorProps {
  testCases: TestCase[];
}

export function CodeResultTestcaseIndicator({ testCases }: CodeResultTestcaseIndicatorProps) {
  const passedCount = testCases.filter(tc => tc.state === '일치').length;
  const failedCount = testCases.filter(tc => tc.state === '불일치').length;
  const totalCount = testCases.length;

  return (
    <div className="flex items-center justify-between px-5 py-4 bg-editor-page-surface rounded-lg border border-editor-page-border">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1.5">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-sm text-editor-page-text-secondary">
            성공<span className="ml-2 text-green-600 font-normal">{passedCount}</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <XCircle className="h-4 w-4 text-red-500" />
          <span className="text-sm text-editor-page-text-secondary">
            실패<span className="ml-2 text-red-600 font-normal">{failedCount}</span>
          </span>
        </div>
      </div>
      <span className="text-sm text-editor-page-text-muted font-light">
        총 {totalCount}개
      </span>
    </div>
  );
}