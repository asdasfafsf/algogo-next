"use client"

import { useState, useEffect, useRef } from 'react';
import { RotateCcw, Play, Plus, TestTube, Send } from 'lucide-react';
import { CodeEditorLanguageDropdown } from './CodeEditorLanguageDropdown';
import { CodeEditorTemplateDropdown } from './CodeEditorTemplateDropdown';
import { CodeEditorActionButton } from './CodeEditorActionButton';

interface Language {
  value: string;
  label: string;
  icon?: string;
}

interface Template {
  value: string;
  label: string;
}

interface CodeEditorControlPanelProps {
  selectedLanguage?: string;
  languages?: Language[];
  onLanguageChange?: (language: string) => void;
  selectedTemplate?: string;
  templates?: Template[];
  onTemplateChange?: (template: string) => void;
  onReset?: () => void;
  onRun?: () => void;
  onAddTestCase?: () => void;
  onTest?: () => void;
  onSubmit?: () => void;
  disabled?: {
    languageSelect?: boolean;
    templateSelect?: boolean;
    reset?: boolean;
    run?: boolean;
    addTestCase?: boolean;
    test?: boolean;
    submit?: boolean;
  };
}

export function CodeEditorControlPanel({
  selectedLanguage = 'python',
  languages,
  onLanguageChange,
  selectedTemplate = 'empty',
  templates,
  onTemplateChange,
  onReset,
  onRun,
  onAddTestCase,
  onTest,
  onSubmit,
  disabled = {
    languageSelect: false,
    templateSelect: false,
    reset: false,
    run: false,
    addTestCase: false,
    test: false,
    submit: false,
  }
}: CodeEditorControlPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        // 컨테이너 너비가 600px 미만이면 컴팩트 모드로 전환
        setIsCompact(entry.contentRect.width < 600);
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-end p-2 min-w-0">
      <div className="flex items-center gap-1 flex-shrink-0">
        <CodeEditorLanguageDropdown
          selectedLanguage={selectedLanguage}
          languages={languages}
          onLanguageChange={onLanguageChange}
          disabled={disabled.languageSelect}
        />
        <CodeEditorTemplateDropdown
          selectedTemplate={selectedTemplate}
          templates={templates}
          onTemplateChange={onTemplateChange}
          disabled={disabled.templateSelect}
        />
        <CodeEditorActionButton
          icon={RotateCcw}
          label="초기화"
          onClick={onReset}
          disabled={disabled.reset}
          isCompact={isCompact}
        />
        
        <CodeEditorActionButton
          icon={Play}
          label="실행"
          onClick={onRun}
          disabled={disabled.run}
          isCompact={isCompact}
          color="text-green-500"
        />
        
        <CodeEditorActionButton
          icon={Plus}
          label="테스트케이스 추가"
          onClick={onAddTestCase}
          disabled={disabled.addTestCase}
          isCompact={isCompact}
          color="text-purple-500"
        />
        
        <CodeEditorActionButton
          icon={TestTube}
          label="테스트"
          onClick={onTest}
          disabled={disabled.test}
          isCompact={isCompact}
          color="text-orange-500"
        />
        
        <CodeEditorActionButton
          icon={Send}
          label="제출"
          onClick={onSubmit}
          disabled={disabled.submit}
          isCompact={isCompact}
          color="text-blue-500"
        />
      </div>
    </div>
  );
}