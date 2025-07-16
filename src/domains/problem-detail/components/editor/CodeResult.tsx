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

export function CodeResult({ 
  testCases = [], 
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