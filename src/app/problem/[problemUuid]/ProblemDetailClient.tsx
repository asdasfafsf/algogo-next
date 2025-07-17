"use client"

import { useState } from 'react';
import { CodeEditor, CodeResult } from '@/domains/problem-detail/components/editor';
import { ResizablePanel } from '@/domains/problem-detail/components/ResizablePanel';
import { VerticalResizablePanel } from '@/domains/problem-detail/components/VerticalResizablePanel';
import { MobileLayout } from '@/domains/problem-detail/components/MobileLayout';
import { TestCase } from '@/types/testcase.type';

interface ProblemDetailClientProps {
  problemPanel: React.ReactNode;
}

export function ProblemDetailClient({ problemPanel }: ProblemDetailClientProps) {
  const [testCases, setTestCases] = useState<TestCase[]>([
    {
      input: '1 2',
      output: '',
      expected: '3',
      state: '실행 전',
    },
    {
      input: '5 7',
      output: '',
      expected: '12',
      state: '실행 전',
    }
  ]);

  const handleTestCasesChange = (newTestCases: TestCase[]) => {
    setTestCases(newTestCases);
    console.log('Test cases updated:', newTestCases);
  };

  const codePanel = (
    <CodeEditor 
      initialCode="# 여기에 코드를 작성하세요\n\n"
      selectedLanguage="python"
      testCases={testCases}
      onTestCasesChange={handleTestCasesChange}
    />
  );
  
  const resultPanel = (
    <CodeResult 
      customInput=""
      customOutput=""
      defaultTab="testcases"
    />
  );

  return (
    <>
      {/* 데스크톱 레이아웃 (md 이상) */}
      <div className="hidden md:block h-full">
        <ResizablePanel
          leftPanel={problemPanel}
          rightPanel={
            <VerticalResizablePanel
              topPanel={codePanel}
              bottomPanel={resultPanel}
              defaultTopHeight={60}
              minTopHeight={30}
              maxTopHeight={80}
            />
          }
          defaultLeftWidth={50}
          minLeftWidth={25}
          maxLeftWidth={75}
        />
      </div>

      {/* 모바일 레이아웃 (sm 이하) */}
      <div className="block md:hidden h-full">
        <MobileLayout
          problemPanel={problemPanel}
          codePanel={codePanel}
          resultPanel={resultPanel}
        />
      </div>
    </>
  );
}