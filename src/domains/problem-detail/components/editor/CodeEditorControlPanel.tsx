import { Button } from '@/components/ui/Button';
import { Play, Save, RotateCcw } from 'lucide-react';
import { CodeEditorLanguageDropdown } from './CodeEditorLanguageDropdown';
import { CodeEditorTemplateDropdown } from './CodeEditorTemplateDropdown';

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
  onSave?: () => void;
  onRun?: () => void;
  disabled?: {
    languageSelect?: boolean;
    templateSelect?: boolean;
    reset?: boolean;
    save?: boolean;
    run?: boolean;
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
  onSave,
  onRun,
  disabled = {
    languageSelect: false,
    templateSelect: false,
    reset: true,
    save: true,
    run: true,
  }
}: CodeEditorControlPanelProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-editor-page-border min-w-0">
      <div className="flex items-center gap-4">
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
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Button 
          variant="outline" 
          size="sm" 
          disabled={disabled.reset}
          onClick={onReset}
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          초기화
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          disabled={disabled.save}
          onClick={onSave}
        >
          <Save className="h-4 w-4 mr-1" />
          저장
        </Button>
        <Button 
          size="sm" 
          disabled={disabled.run}
          onClick={onRun}
        >
          <Play className="h-4 w-4 mr-1" />
          실행
        </Button>
      </div>
    </div>
  );
}