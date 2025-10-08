"use client"

import { useEffect } from 'react';
import { CodeEditorControlPanel } from './CodeEditorControlPanel';
import { MonacoEditor } from './MonacoEditor';
import { TestCase } from '@/types/testcase.type';
import { useTestCaseModal } from '../../hooks/useTestCaseModal';
import { getDefaultTemplate } from '@/constants/code-template.constant';
import { Language } from '@/types/language.type';
import { CodeSetting } from '@/types/code-template.type';
import { MONACO_LANGUAGE } from '@/constants/language.constant';
import { useCodeEditorStore } from '@/lib/stores';
import { useCodeEditor } from '../../hooks/useCodeEditor';

interface CodeEditorProps {
  initialCode?: string;
  initialLanguage?: Language;
  testCases?: TestCase[];
  setting: CodeSetting
  onTestCasesChange?: (testCases: TestCase[]) => void;
}

export function CodeEditor({
  initialCode,
  setting,
  initialLanguage = 'Python',
}: CodeEditorProps) {
  const { openModal, setTestcases } = useTestCaseModal();
  const initializeCodes = useCodeEditorStore((state) => state.initializeCodes);
  const { currentCode, handleCodeChange, selectedLanguage } = useCodeEditor();

  useEffect(() => {
    const defaultCodes: Record<Language, string> = {
      'Python': initialCode || getDefaultTemplate('Python'),
      'Java': initialCode || getDefaultTemplate('Java'),
      'C++': initialCode || getDefaultTemplate('C++'),
      'Node.js': initialCode || getDefaultTemplate('Node.js'),
    };

    initializeCodes(defaultCodes, initialLanguage);
  }, []);


  const handleAddTestCase = async () => {
    const result = await openModal();
    if (result) {
      setTestcases(result);
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
          value={currentCode}
          onChange={handleCodeChange}
          language={MONACO_LANGUAGE[selectedLanguage]}
          theme={setting.theme}
          options={{
            fontSize: setting.fontSize,
            lineNumbers: setting.lineNumber,
            tabSize: setting.tabSize,
          }}
          height="100%"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}