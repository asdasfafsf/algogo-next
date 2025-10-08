"use client"

import { useRef } from 'react';
import Editor, { type EditorProps } from '@monaco-editor/react';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  language?: string;
  theme?: string;
  height?: string | number;
  options?: EditorProps['options'];
  className?: string;
}

export function MonacoEditor({
  value,
  onChange,
  language = 'python',
  theme = 'vs-dark',
  height = '400px',
  options = {},
  className = ''
}: MonacoEditorProps) {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    
    // 기본 에디터 옵션 설정
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      automaticLayout: true,
      lineNumbers: 'on',
      renderWhitespace: 'selection',
      selectOnLineNumbers: true,
      matchBrackets: 'always',
      theme: 'vs-dark',
      ...options
    });
  };

  const handleEditorChange = (value: string | undefined) => {
    onChange(value);
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Editor
        height={height}
        language={language}
        theme={theme}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          automaticLayout: true,
          lineNumbers: 'on',
          renderWhitespace: 'selection',
          selectOnLineNumbers: true,
          matchBrackets: 'always',
          padding: { top: 16, bottom: 16 },
          smoothScrolling: true,
          ...options
        }}
      />
    </div>
  );
}