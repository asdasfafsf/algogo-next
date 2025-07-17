"use client"

import { useState } from 'react';
import { CodeResultTestcaseIndicator } from './CodeResultTestcaseIndicator';
import { CodeResultTestcaseTable } from './CodeResultTestcaseTable';
import { TestCase } from '@/types/testcase.type';

interface CodeResultTestcaseProps {
  testCases?: TestCase[];
  onTestCasesChange?: (testCases: TestCase[]) => void;
}

export function CodeResultTestcase({
  testCases = [],
}: CodeResultTestcaseProps) {
  const [currentTestCases] = useState(testCases);



  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <CodeResultTestcaseIndicator testCases={currentTestCases} />
        </div>
        <CodeResultTestcaseTable testCases={currentTestCases} />
      </div>
    </div>
  );
}