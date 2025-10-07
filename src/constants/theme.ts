import { ThemeConfig } from '@/types/theme.type';

export const THEME_CONFIG: ThemeConfig = {
  light: {
    background: '#ffffff',
    surface: '#f9fafb',
    primary: '#2563eb',
    secondary: '#64748b',
    accent: '#0ea5e9',
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
      muted: '#9ca3af',
    },
    border: {
      primary: '#e5e7eb',
      secondary: '#d1d5db',
    },
    editor: {
      background: '#ffffff',
      foreground: '#1f2937',
      selection: '#dbeafe',
      lineNumber: '#9ca3af',
      comment: '#6b7280',
      keyword: '#7c3aed',
      string: '#059669',
      number: '#dc2626',
      function: '#2563eb',
      variable: '#1f2937',
    },
  },
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#06b6d4',
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      muted: '#64748b',
    },
    border: {
      primary: '#334155',
      secondary: '#475569',
    },
    editor: {
      background: '#0f172a',
      foreground: '#f1f5f9',
      selection: '#1e3a8a',
      lineNumber: '#64748b',
      comment: '#64748b',
      keyword: '#a855f7',
      string: '#10b981',
      number: '#f59e0b',
      function: '#3b82f6',
      variable: '#f1f5f9',
    },
  },
};

export const THEME_STORAGE_KEY = 'algogo-theme';
export const DEFAULT_THEME = 'light' as const;