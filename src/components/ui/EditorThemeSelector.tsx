'use client';

import { Palette } from 'lucide-react';
import { useEditorTheme } from '@/contexts/EditorThemeContext';
import { EditorTheme } from '@/types/editor-theme.type';
import { EDITOR_THEME_LABELS } from '@/constants/editor-theme';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/Select';

interface EditorThemeSelectorProps {
  variant?: 'compact' | 'full';
  className?: string;
}

export function EditorThemeSelector({ variant = 'compact', className = '' }: EditorThemeSelectorProps) {
  const { editorTheme, setEditorTheme } = useEditorTheme();

  const handleThemeChange = (newTheme: string) => {
    setEditorTheme(newTheme as EditorTheme);
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Select value={editorTheme} onValueChange={handleThemeChange}>
          <SelectTrigger className="w-40 bg-editor-page-bg text-editor-page-text border-editor-page-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(EDITOR_THEME_LABELS).map(([theme, label]) => (
              <SelectItem key={theme} value={theme}>
                <div className="flex items-center gap-2">
                  <div 
                    className={`w-3 h-3 rounded-full border ${
                      theme.includes('dark') ? 'theme-preview-dark' : 'theme-preview-light'
                    }`}
                  />
                  {label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5 text-editor-page-text" />
        <h3 className="text-lg font-medium text-editor-page-text">에디터 테마</h3>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-editor-page-text-secondary">
          테마 선택
        </label>
        <Select value={editorTheme} onValueChange={handleThemeChange}>
          <SelectTrigger className="bg-editor-page-bg text-editor-page-text border-editor-page-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(EDITOR_THEME_LABELS).map(([theme, label]) => (
              <SelectItem key={theme} value={theme}>
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-4 h-4 rounded border ${
                      theme.includes('dark') ? 'theme-preview-dark' : 'theme-preview-light'
                    }`}
                  />
                  <span>{label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="p-3 bg-editor-page-surface rounded-md border border-editor-page-border">
        <p className="text-sm text-editor-page-text-muted">
          에디터 테마가 항상 활성화되어 있어 이 페이지의 색상이 선택한 코드 에디터 테마에 맞춰 변경됩니다.
        </p>
      </div>
    </div>
  );
}