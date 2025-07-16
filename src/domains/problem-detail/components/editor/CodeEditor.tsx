"use client"

import { useState } from 'react';
import { CodeEditorControlPanel } from './CodeEditorControlPanel';
import { MonacoEditor } from './MonacoEditor';

interface CodeEditorProps {
  initialCode?: string;
  selectedLanguage?: string;
}

export function CodeEditor({ initialCode = '# 여기에 코드를 작성하세요\n\n', selectedLanguage = 'python' }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || '');
  };

  return (
    <div className="h-full flex flex-col bg-editor-page-surface">
      <CodeEditorControlPanel selectedLanguage={selectedLanguage} />
      
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