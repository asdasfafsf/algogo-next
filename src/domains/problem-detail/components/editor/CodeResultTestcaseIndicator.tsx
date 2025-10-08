"use client"

import { Play, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TestCase } from '@/types/testcase.type';
import { useTestCaseModal } from '../../hooks/useTestCaseModal';

interface CodeResultTestcaseIndicatorProps {
  testCases: TestCase[];
}

export function CodeResultTestcaseIndicator({ testCases }: CodeResultTestcaseIndicatorProps) {
  const passedCount = testCases.filter(tc => tc.state === '일치').length;
  const failedCount = testCases.filter(tc => tc.state === '불일치').length;
  const runningCount = testCases.filter(tc => tc.state === '실행 중').length;
  const { openModal } = useTestCaseModal();

  return (
    <div className="flex items-center justify-between px-2 py-3 bg-editor-page-surface/60 rounded-lg w-full">
      {/* 좌측 영역 - 테스트 결과 */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500/80 rounded-full" />
          <span className="text-sm text-editor-page-text-secondary">
            성공 <span className="text-green-600">{passedCount}</span>
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500/80 rounded-full" />
          <span className="text-sm text-editor-page-text-secondary">
            실패 <span className="text-red-600">{failedCount}</span>
          </span>
        </div>
        
        {runningCount > 0 && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500/80 rounded-full animate-pulse" />
            <span className="text-sm text-editor-page-text-secondary">
              실행 중 <span className="text-blue-600">{runningCount}</span>
            </span>
          </div>
        )}
      </div>
      
      {/* 우측 영역 - 버튼들 */}
      <div className="flex items-center gap-1">
        <Button 
          variant="ghost" 
          size="xs"
          className="h-8 px-2 hover:bg-editor-page-surface text-editor-page-text-secondary hover:text-blue-600"
        >
          <Play className="w-3.5 h-3.5" />
          <span className="hidden md:inline ml-1">테스트</span>
        </Button>
        <Button 
          variant="ghost" 
          size="xs"
          className="h-8 px-2 hover:bg-editor-page-surface text-editor-page-text-secondary hover:text-gray-600"
          onClick={() => openModal()}
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden md:inline ml-1">테스트케이스 추가</span>
        </Button>
      </div>
    </div>
  );
}