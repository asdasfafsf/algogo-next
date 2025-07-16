"use client"

import { useState } from 'react';
import { CodeEditorTabs, CodeEditorTabsList, CodeEditorTabsTrigger, CodeEditorTabsContent } from './tabs';
import { CodeResultInput } from './CodeResultInput';
import { CodeResultOutput } from './CodeResultOutput';
import { CodeResultTestcase } from './CodeResultTestcase';
import { TestCase } from '@/types/testcase.type';

interface CodeResultProps {
  testCases?: TestCase[];
  customInput?: string;
  customOutput?: string;
  defaultTab?: 'input' | 'output' | 'testcases';
  onRunCode?: () => void;
  onInputChange?: (input: string) => void;
  onClearOutput?: () => void;
}

const sampleTestCases: TestCase[] = [
  {
    input: "3\n5 10 15",
    expected: "30",
    output: "30",
    state: "일치"
  },
  {
    input: "4\n1 2 3 4",
    expected: "10",
    output: "9",
    state: "불일치"
  },
  {
    input: "2\n100 200",
    expected: "300",
    output: "300",
    state: "일치"
  },
  {
    input: "5\n1 1 1 1 1",
    expected: "5",
    output: "5",
    state: "일치"
  },
  {
    input: "1\n42",
    expected: "42",
    output: "24",
    state: "불일치"
  },
  {
    input: "6\n10 20 30 40 50 60",
    expected: "210",
    output: "",
    state: "실행 중"
  },
  {
    input: "3\n-5 -10 -15",
    expected: "-30",
    output: "-30",
    state: "일치"
  },
  {
    input: "2\n0 0",
    expected: "0",
    output: "0",
    state: "일치"
  },
  {
    input: "4\n1000 2000 3000 4000",
    expected: "10000",
    output: "10001",
    state: "불일치"
  },
  {
    input: "1\n999999999",
    expected: "999999999",
    output: "",
    state: "실행 전"
  }
];

export function CodeResult({ 
  testCases = sampleTestCases, 
  customInput = '',
  customOutput = '',
  defaultTab = 'testcases',
  onRunCode,
  onInputChange,
  onClearOutput
}: CodeResultProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'input' | 'output' | 'testcases');
  };

  return (
    <CodeEditorTabs 
      value={activeTab} 
      onValueChange={handleTabChange}
      className="h-full bg-editor-page-surface flex flex-col"
    >
      <CodeEditorTabsList>
        <CodeEditorTabsTrigger value="input">
          입력
        </CodeEditorTabsTrigger>
        <CodeEditorTabsTrigger value="output">
          출력
        </CodeEditorTabsTrigger>
        <CodeEditorTabsTrigger value="testcases">
          테스트 케이스
        </CodeEditorTabsTrigger>
      </CodeEditorTabsList>
      
      <div className="flex-1 min-h-0 relative">
        <CodeEditorTabsContent value="input" className="absolute inset-0">
          <CodeResultInput
            customInput={customInput}
            onInputChange={onInputChange}
            onRunCode={onRunCode}
          />
        </CodeEditorTabsContent>

        <CodeEditorTabsContent value="output" className="absolute inset-0">
          <CodeResultOutput
            customOutput={customOutput}
            onClearOutput={onClearOutput}
          />
        </CodeEditorTabsContent>

        <CodeEditorTabsContent value="testcases" className="absolute inset-0">
          <CodeResultTestcase
            testCases={testCases}
          />
        </CodeEditorTabsContent>
      </div>
    </CodeEditorTabs>
  );
}