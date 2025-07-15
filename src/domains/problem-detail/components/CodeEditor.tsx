import { Button } from '@/components/ui/Button';
import { Play, Save, RotateCcw } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  selectedLanguage?: string;
}

const LANGUAGES = [
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'javascript', label: 'JavaScript' },
];

export function CodeEditor({ initialCode = '# 여기에 코드를 작성하세요\n\n', selectedLanguage = 'python' }: CodeEditorProps) {
  const selectedLang = LANGUAGES.find(lang => lang.value === selectedLanguage) || LANGUAGES[0];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">언어 선택</span>
          <div className="px-3 py-2 text-sm bg-gray-50 rounded-md border min-w-32">
            {selectedLang.label}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            <RotateCcw className="h-4 w-4 mr-1" />
            초기화
          </Button>
          <Button variant="outline" size="sm" disabled>
            <Save className="h-4 w-4 mr-1" />
            저장
          </Button>
          <Button size="sm" disabled>
            <Play className="h-4 w-4 mr-1" />
            실행
          </Button>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <div className="w-full h-full p-4 font-mono text-sm bg-gray-50 whitespace-pre-wrap">
          {initialCode}
        </div>
      </div>
    </div>
  );
}