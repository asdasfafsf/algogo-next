'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Theme, ThemeColors } from '@/types/theme.type';
import { THEME_CONFIG, THEME_STORAGE_KEY, DEFAULT_THEME } from '@/constants/theme';

interface ThemeContextType {
  theme: Theme;
  currentColors: ThemeColors;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // 현재 테마에 따른 색상 계산
  const getCurrentColors = (currentTheme: Theme): ThemeColors => {
    if (currentTheme === 'auto') {
      // 시스템 테마 감지
      if (typeof window !== 'undefined' && window.matchMedia) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? THEME_CONFIG.dark : THEME_CONFIG.light;
      }
      return THEME_CONFIG.light;
    }
    return THEME_CONFIG[currentTheme];
  };

  const currentColors = getCurrentColors(theme);

  // 테마 변경 함수
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      updateCSSVariables(getCurrentColors(newTheme));
    }
  };

  // 테마 토글 함수
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // CSS 변수 업데이트
  const updateCSSVariables = (colors: ThemeColors) => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // 기본 색상
    root.style.setProperty('--theme-background', colors.background);
    root.style.setProperty('--theme-surface', colors.surface);
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    
    // 텍스트 색상
    root.style.setProperty('--theme-text-primary', colors.text.primary);
    root.style.setProperty('--theme-text-secondary', colors.text.secondary);
    root.style.setProperty('--theme-text-muted', colors.text.muted);
    
    // 보더 색상
    root.style.setProperty('--theme-border-primary', colors.border.primary);
    root.style.setProperty('--theme-border-secondary', colors.border.secondary);
    
    // 에디터 색상
    root.style.setProperty('--theme-editor-background', colors.editor.background);
    root.style.setProperty('--theme-editor-foreground', colors.editor.foreground);
    root.style.setProperty('--theme-editor-selection', colors.editor.selection);
    root.style.setProperty('--theme-editor-line-number', colors.editor.lineNumber);
    root.style.setProperty('--theme-editor-comment', colors.editor.comment);
    root.style.setProperty('--theme-editor-keyword', colors.editor.keyword);
    root.style.setProperty('--theme-editor-string', colors.editor.string);
    root.style.setProperty('--theme-editor-number', colors.editor.number);
    root.style.setProperty('--theme-editor-function', colors.editor.function);
    root.style.setProperty('--theme-editor-variable', colors.editor.variable);
  };

  // 초기 테마 로드
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
      const initialTheme = savedTheme || DEFAULT_THEME;
      setThemeState(initialTheme);
      updateCSSVariables(getCurrentColors(initialTheme));
    }
    setMounted(true);
  }, []);

  // 시스템 테마 변경 감지
  useEffect(() => {
    if (theme === 'auto' && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        updateCSSVariables(getCurrentColors('auto'));
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  // 서버 사이드 렌더링 방지
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, currentColors, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}