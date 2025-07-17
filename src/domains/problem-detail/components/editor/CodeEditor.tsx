"use client"

import { useState } from 'react';
import { CodeEditorControlPanel } from './CodeEditorControlPanel';
import { MonacoEditor } from './MonacoEditor';
import { useTestCaseModal } from '@/contexts';
import { TestCase } from '@/types/testcase.type';

interface CodeEditorProps {
  initialCode?: string;
  selectedLanguage?: string;
  testCases?: TestCase[];
  onTestCasesChange?: (testCases: TestCase[]) => void;
}

export function CodeEditor({ 
  initialCode = '# 여기에 코드를 작성하세요\n\n', 
  selectedLanguage = 'python',
  testCases = [],
  onTestCasesChange
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const { openTestCaseModal } = useTestCaseModal();

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleAddTestCase = async () => {
    const result = await openTestCaseModal(testCases, {
      onTestCasesChange
    });
    
    if (result && onTestCasesChange) {
      onTestCasesChange(result);
    }
  };

  return (
    <div className="h-full flex flex-col bg-editor-page-surface">
      <CodeEditorControlPanel 
        selectedLanguage={selectedLanguage} 
        onAddTestCase={handleAddTestCase}
      />
      
      <div className="flex-1 relative overflow-hidden">
        <MonacoEditor
          value={code}
          onChange={handleCodeChange}
          language={selectedLanguage}
          theme="vs-dark"
          height="100%"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}