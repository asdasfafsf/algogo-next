"use client"

import { useEffect, useState } from 'react';
import { CodeEditorTabs, CodeEditorTabsList, CodeEditorTabsTrigger, CodeEditorTabsContent } from './tabs';
import { CodeResultInput } from './CodeResultInput';
import { CodeResultOutput } from './CodeResultOutput';
import { CodeResultTestcase } from './CodeResultTestcase';
import { TestCase } from '@/types/testcase.type';
import { useTestcaseStore } from '@/lib/stores/useTestcaseStore';

interface CodeResultProps {
  initialTestCases?: TestCase[];
  customInput?: string;
  customOutput?: string;
  defaultTab?: 'input' | 'output' | 'testcases';
  onRunCode?: () => void;
  onInputChange?: (input: string) => void;
  onClearOutput?: () => void;
  onTestCasesChange?: (testCases: TestCase[]) => void;
}


export function CodeResult({ 
  initialTestCases = [], 
  customInput = '',
  customOutput = '',
  defaultTab = 'testcases',
  onRunCode,
  onInputChange,
  onClearOutput,
  onTestCasesChange
}: CodeResultProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const setTestCase = useTestcaseStore((state) => state.setTestcases);
  const testCases = useTestcaseStore((state) => state.testcases);

  useEffect(() => {
    setTestCase(initialTestCases);
  }, [initialTestCases])

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