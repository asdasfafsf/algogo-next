'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { EditorTheme, EditorThemeColors } from '@/types/editor-theme.type';
import { 
  EDITOR_THEME_CONFIG, 
  EDITOR_THEME_STORAGE_KEY, 
  DEFAULT_EDITOR_THEME 
} from '@/constants/editor-theme';

interface EditorThemeContextType {
  editorTheme: EditorTheme;
  currentEditorColors: EditorThemeColors;
  setEditorTheme: (theme: EditorTheme) => void;
  isEditorThemeActive: boolean;
  setIsEditorThemeActive: (active: boolean) => void;
}

const EditorThemeContext = createContext<EditorThemeContextType | undefined>(undefined);

interface EditorThemeProviderProps {
  children: ReactNode;
}

export function EditorThemeProvider({ children }: EditorThemeProviderProps) {
  const [editorTheme, setEditorThemeState] = useState<EditorTheme>(DEFAULT_EDITOR_THEME);
  const [isEditorThemeActive, setIsEditorThemeActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 현재 에디터 테마 색상 계산
  const currentEditorColors = EDITOR_THEME_CONFIG[editorTheme] || EDITOR_THEME_CONFIG[DEFAULT_EDITOR_THEME];

  // 에디터 테마 변경 함수
  const setEditorTheme = (newTheme: EditorTheme) => {
    setEditorThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(EDITOR_THEME_STORAGE_KEY, newTheme);
      updateEditorThemeCSSVariables(EDITOR_THEME_CONFIG[newTheme]);
    }
  };

  // 에디터 테마 CSS 변수 업데이트 (높은 우선순위)
  const updateEditorThemeCSSVariables = (colors: EditorThemeColors) => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // 에디터 테마 전용 CSS 변수 (더 높은 우선순위)
    root.style.setProperty('--editor-theme-page-background', colors.pageBackground);
    root.style.setProperty('--editor-theme-page-surface', colors.pageSurface);
    root.style.setProperty('--editor-theme-page-text-primary', colors.pageText.primary);
    root.style.setProperty('--editor-theme-page-text-secondary', colors.pageText.secondary);
    root.style.setProperty('--editor-theme-page-text-muted', colors.pageText.muted);
    root.style.setProperty('--editor-theme-page-border-primary', colors.pageBorder.primary);
    root.style.setProperty('--editor-theme-page-border-secondary', colors.pageBorder.secondary);
    
    // 에디터 관련 변수
    root.style.setProperty('--editor-theme-editor-background', colors.editor.background);
    root.style.setProperty('--editor-theme-editor-foreground', colors.editor.foreground);
    root.style.setProperty('--editor-theme-editor-selection', colors.editor.selection);
    root.style.setProperty('--editor-theme-editor-line-number', colors.editor.lineNumber);
    root.style.setProperty('--editor-theme-editor-cursor', colors.editor.cursor);
    
    // 문법 하이라이팅 변수
    root.style.setProperty('--editor-theme-syntax-comment', colors.editor.syntax.comment);
    root.style.setProperty('--editor-theme-syntax-keyword', colors.editor.syntax.keyword);
    root.style.setProperty('--editor-theme-syntax-string', colors.editor.syntax.string);
    root.style.setProperty('--editor-theme-syntax-number', colors.editor.syntax.number);
    root.style.setProperty('--editor-theme-syntax-function', colors.editor.syntax.function);
    root.style.setProperty('--editor-theme-syntax-variable', colors.editor.syntax.variable);
    root.style.setProperty('--editor-theme-syntax-type', colors.editor.syntax.type);
    root.style.setProperty('--editor-theme-syntax-operator', colors.editor.syntax.operator);
    root.style.setProperty('--editor-theme-syntax-bracket', colors.editor.syntax.bracket);
    
    // UI 변수
    root.style.setProperty('--editor-theme-ui-primary', colors.ui.primary);
    root.style.setProperty('--editor-theme-ui-secondary', colors.ui.secondary);
    root.style.setProperty('--editor-theme-ui-accent', colors.ui.accent);
    root.style.setProperty('--editor-theme-ui-success', colors.ui.success);
    root.style.setProperty('--editor-theme-ui-warning', colors.ui.warning);
    root.style.setProperty('--editor-theme-ui-error', colors.ui.error);
  };

  // 에디터 테마 CSS 변수 제거
  const removeEditorThemeCSSVariables = () => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const editorThemeVariables = [
      '--editor-theme-page-background',
      '--editor-theme-page-surface',
      '--editor-theme-page-text-primary',
      '--editor-theme-page-text-secondary',
      '--editor-theme-page-text-muted',
      '--editor-theme-page-border-primary',
      '--editor-theme-page-border-secondary',
      '--editor-theme-editor-background',
      '--editor-theme-editor-foreground',
      '--editor-theme-editor-selection',
      '--editor-theme-editor-line-number',
      '--editor-theme-editor-cursor',
      '--editor-theme-syntax-comment',
      '--editor-theme-syntax-keyword',
      '--editor-theme-syntax-string',
      '--editor-theme-syntax-number',
      '--editor-theme-syntax-function',
      '--editor-theme-syntax-variable',
      '--editor-theme-syntax-type',
      '--editor-theme-syntax-operator',
      '--editor-theme-syntax-bracket',
      '--editor-theme-ui-primary',
      '--editor-theme-ui-secondary',
      '--editor-theme-ui-accent',
      '--editor-theme-ui-success',
      '--editor-theme-ui-warning',
      '--editor-theme-ui-error',
    ];

    editorThemeVariables.forEach(variable => {
      root.style.removeProperty(variable);
    });
  };

  // 초기 에디터 테마 로드
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(EDITOR_THEME_STORAGE_KEY) as EditorTheme;
      const savedActive = localStorage.getItem(`${EDITOR_THEME_STORAGE_KEY}-active`) === 'true';
      
      if (savedTheme && EDITOR_THEME_CONFIG[savedTheme]) {
        setEditorThemeState(savedTheme);
      }
      
      setIsEditorThemeActive(savedActive);
      
      if (savedActive && savedTheme && EDITOR_THEME_CONFIG[savedTheme]) {
        updateEditorThemeCSSVariables(EDITOR_THEME_CONFIG[savedTheme]);
      }
    }
    setMounted(true);
  }, []);

  // 에디터 테마 활성화/비활성화 처리
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`${EDITOR_THEME_STORAGE_KEY}-active`, isEditorThemeActive.toString());
      
      if (isEditorThemeActive) {
        updateEditorThemeCSSVariables(currentEditorColors);
      } else {
        removeEditorThemeCSSVariables();
      }
    }
  }, [isEditorThemeActive, currentEditorColors]);

  // 서버 사이드 렌더링 방지
  if (!mounted) {
    return null;
  }

  return (
    <EditorThemeContext.Provider value={{
      editorTheme,
      currentEditorColors,
      setEditorTheme,
      isEditorThemeActive,
      setIsEditorThemeActive,
    }}>
      {children}
    </EditorThemeContext.Provider>
  );
}

export function useEditorTheme() {
  const context = useContext(EditorThemeContext);
  if (context === undefined) {
    throw new Error('useEditorTheme must be used within an EditorThemeProvider');
  }
  return context;
}