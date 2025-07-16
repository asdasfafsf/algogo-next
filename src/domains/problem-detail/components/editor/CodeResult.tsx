"use client"

import { useState } from 'react';
import { CodeEditorTabs, CodeEditorTabsList, CodeEditorTabsTrigger, CodeEditorTabsContent } from './tabs';
import { CodeResultInput } from './CodeResultInput';
import { CodeResultOutput } from './CodeResultOutput';
import { CodeResultTestcase } from './CodeResultTestcase';

interface TestCase {
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  status: 'pending' | 'passed' | 'failed' | 'error';
  runtime?: number;
  memory?: number;
}

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
    expectedOutput: "30",
    actualOutput: "30",
    status: "passed",
    runtime: 45,
    memory: 1024
  },
  {
    input: "4\n1 2 3 4",
    expectedOutput: "10",
    actualOutput: "9",
    status: "failed",
    runtime: 32,
    memory: 512
  },
  {
    input: "2\n100 200",
    expectedOutput: "300",
    actualOutput: "300",
    status: "passed",
    runtime: 28,
    memory: 768
  },
  {
    input: "1\n0",
    expectedOutput: "0",
    status: "error",
    runtime: 15,
    memory: 256
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
      className="h-full bg-editor-page-surface"
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

      <CodeEditorTabsContent value="input">
        <CodeResultInput
          customInput={customInput}
          onInputChange={onInputChange}
          onRunCode={onRunCode}
        />
      </CodeEditorTabsContent>

      <CodeEditorTabsContent value="output">
        <CodeResultOutput
          customOutput={customOutput}
          onClearOutput={onClearOutput}
        />
      </CodeEditorTabsContent>

      <CodeEditorTabsContent value="testcases">
        <CodeResultTestcase
          testCases={testCases}
        />
      </CodeEditorTabsContent>
    </CodeEditorTabs>
  );
}