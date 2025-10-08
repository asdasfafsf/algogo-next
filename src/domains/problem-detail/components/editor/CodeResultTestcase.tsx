"use client"

import { CodeResultTestcaseIndicator } from './CodeResultTestcaseIndicator';
import { CodeResultTestcaseTable } from './CodeResultTestcaseTable';
import { TestCase } from '@/types/testcase.type';

interface CodeResultTestcaseProps {
  testCases?: TestCase[];
}

export function CodeResultTestcase({
  testCases = [],
}: CodeResultTestcaseProps) {

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <CodeResultTestcaseIndicator testCases={testCases} />
        </div>
        <CodeResultTestcaseTable testCases={testCases} />
      </div>
    </div>
  );
}