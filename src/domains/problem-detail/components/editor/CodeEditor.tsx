import { CodeEditorControlPanel } from './CodeEditorControlPanel';

interface CodeEditorProps {
  initialCode?: string;
  selectedLanguage?: string;
}

export function CodeEditor({ initialCode = '# 여기에 코드를 작성하세요\n\n', selectedLanguage = 'python' }: CodeEditorProps) {
  return (
    <div className="h-full flex flex-col bg-editor-page-surface">
      <CodeEditorControlPanel selectedLanguage={selectedLanguage} />
      
      <div className="flex-1 relative">
        <div className="w-full h-full p-4 font-mono text-sm bg-editor-page-bg whitespace-pre-wrap text-editor-page-text">
          {initialCode}
        </div>
      </div>
    </div>
  );
}