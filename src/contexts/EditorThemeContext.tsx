'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { EditorTheme, EditorThemeColors, EditorSettings, EditorSettingsStorage } from '@/types/editor-theme.type';
import { 
  EDITOR_THEME_CONFIG, 
  EDITOR_THEME_STORAGE_KEY, 
  EDITOR_SETTINGS_STORAGE_KEY,
  DEFAULT_EDITOR_THEME,
  DEFAULT_EDITOR_SETTINGS
} from '@/constants/editor-theme';

interface EditorThemeContextType {
  editorTheme: EditorTheme;
  currentEditorColors: EditorThemeColors;
  setEditorTheme: (theme: EditorTheme) => void;
  // 확장된 에디터 설정
  editorSettings: EditorSettings;
  setEditorSettings: (settings: EditorSettings) => void;
  saveToServer: boolean;
  setSaveToServer: (save: boolean) => void;
  saveAllSettings: (settingsToSave?: EditorSettings, saveToServerFlag?: boolean) => void;
}

const EditorThemeContext = createContext<EditorThemeContextType | undefined>(undefined);

interface EditorThemeProviderProps {
  children: ReactNode;
}

export function EditorThemeProvider({ children }: EditorThemeProviderProps) {
  const [editorTheme, setEditorThemeState] = useState<EditorTheme>(DEFAULT_EDITOR_THEME);
  const [editorSettings, setEditorSettingsState] = useState<EditorSettings>(DEFAULT_EDITOR_SETTINGS);
  const [saveToServer, setSaveToServer] = useState(true);
  const [mounted, setMounted] = useState(false);

  // 현재 에디터 테마 색상 계산
  const currentEditorColors = EDITOR_THEME_CONFIG[editorTheme] || EDITOR_THEME_CONFIG[DEFAULT_EDITOR_THEME];

  // 에디터 테마 변경 함수
  const setEditorTheme = (newTheme: EditorTheme) => {
    // 유효하지 않은 테마인 경우 vs-dark로 강제 설정
    const validTheme = EDITOR_THEME_CONFIG[newTheme] ? newTheme : DEFAULT_EDITOR_THEME;
    
    setEditorThemeState(validTheme);
    // 설정도 함께 업데이트
    setEditorSettingsState(prev => ({ ...prev, theme: validTheme }));
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(EDITOR_THEME_STORAGE_KEY, validTheme);
      updateEditorThemeCSSVariables(EDITOR_THEME_CONFIG[validTheme]);
    }
  };

  // 에디터 설정 변경 함수
  const setEditorSettings = (newSettings: EditorSettings) => {
    setEditorSettingsState(newSettings);
    // 테마가 변경된 경우 CSS 변수도 업데이트
    if (newSettings.theme !== editorTheme) {
      setEditorThemeState(newSettings.theme);
      if (typeof window !== 'undefined') {
        localStorage.setItem(EDITOR_THEME_STORAGE_KEY, newSettings.theme);
        // 테마 활성화 상태와 관계없이 CSS 변수 업데이트
        updateEditorThemeCSSVariables(EDITOR_THEME_CONFIG[newSettings.theme]);
      }
    }
  };

  // 모든 설정 저장 함수 - 특정 설정값을 받아서 저장
  const saveAllSettings = (settingsToSave?: EditorSettings, saveToServerFlag?: boolean) => {
    if (typeof window !== 'undefined') {
      // 전달받은 설정이 있으면 사용, 없으면 현재 상태 사용
      const finalSettings = settingsToSave || editorSettings;
      const finalSaveToServer = saveToServerFlag !== undefined ? saveToServerFlag : saveToServer;
      
      const settingsData: EditorSettingsStorage = {
        settings: finalSettings,
        saveToServer: finalSaveToServer,
      };
      localStorage.setItem(EDITOR_SETTINGS_STORAGE_KEY, JSON.stringify(settingsData));
      
      // 테마 설정을 별도로도 저장
      localStorage.setItem(EDITOR_THEME_STORAGE_KEY, finalSettings.theme);
      
      // CSS 변수 강제 업데이트
      updateEditorThemeCSSVariables(EDITOR_THEME_CONFIG[finalSettings.theme]);
      
      // 서버 저장 로직이 필요한 경우 여기에 추가
      if (finalSaveToServer) {
        // TODO: 서버에 설정 저장하는 API 호출
        console.log('Settings saved to server:', settingsData);
      }
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


  // 초기 에디터 테마 및 설정 로드
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(EDITOR_THEME_STORAGE_KEY) as EditorTheme;
      
      // 기존 활성화 상태 키 제거 (처음 한 번만)
      const oldActiveKey = `${EDITOR_THEME_STORAGE_KEY}-active`;
      if (localStorage.getItem(oldActiveKey)) {
        localStorage.removeItem(oldActiveKey);
      }
      
      // 저장된 설정 로드
      const savedSettingsData = localStorage.getItem(EDITOR_SETTINGS_STORAGE_KEY);
      let savedSettings = DEFAULT_EDITOR_SETTINGS;
      let savedSaveToServer = true;
      
      if (savedSettingsData) {
        try {
          const parsedData: EditorSettingsStorage = JSON.parse(savedSettingsData);
          savedSettings = { ...DEFAULT_EDITOR_SETTINGS, ...parsedData.settings };
          savedSaveToServer = parsedData.saveToServer;
        } catch (error) {
          console.warn('Failed to parse saved editor settings:', error);
        }
      }
      
      // 저장된 테마가 유효하지 않은 경우 설정의 테마 또는 기본값 사용
      const validTheme = savedTheme && EDITOR_THEME_CONFIG[savedTheme] 
        ? savedTheme 
        : EDITOR_THEME_CONFIG[savedSettings.theme] 
        ? savedSettings.theme 
        : DEFAULT_EDITOR_THEME;
      
      // 설정의 테마도 업데이트
      const finalSettings = { ...savedSettings, theme: validTheme };
      
      setEditorThemeState(validTheme);
      setEditorSettingsState(finalSettings);
      setSaveToServer(savedSaveToServer);
      
      // 유효하지 않은 테마가 저장되어 있다면 올바른 테마로 업데이트
      if (savedTheme !== validTheme) {
        localStorage.setItem(EDITOR_THEME_STORAGE_KEY, validTheme);
      }
      
      // 항상 선택된 테마 적용
      updateEditorThemeCSSVariables(EDITOR_THEME_CONFIG[validTheme]);
    }
    setMounted(true);
  }, []);

  // 에디터 테마 변경 시 CSS 변수 업데이트
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 항상 현재 선택된 테마 적용
      updateEditorThemeCSSVariables(currentEditorColors);
    }
  }, [currentEditorColors]);

  // 서버 사이드 렌더링 방지
  if (!mounted) {
    return null;
  }

  return (
    <EditorThemeContext.Provider value={{
      editorTheme,
      currentEditorColors,
      setEditorTheme,
      editorSettings,
      setEditorSettings,
      saveToServer,
      setSaveToServer,
      saveAllSettings,
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