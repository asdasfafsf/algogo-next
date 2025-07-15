import { EditorThemeConfig } from '@/types/editor-theme.type';

export const EDITOR_THEME_CONFIG: EditorThemeConfig = {
  'vs-light': {
    pageBackground: '#ffffff',
    pageSurface: '#f8f9fa',
    pageText: {
      primary: '#24292f',
      secondary: '#656d76',
      muted: '#8c959f',
    },
    pageBorder: {
      primary: '#d0d7de',
      secondary: '#e1e8ed',
    },
    editor: {
      background: '#ffffff',
      foreground: '#24292f',
      selection: '#0366d625',
      lineNumber: '#8c959f',
      cursor: '#24292f',
      syntax: {
        comment: '#6a737d',
        keyword: '#d73a49',
        string: '#032f62',
        number: '#005cc5',
        function: '#6f42c1',
        variable: '#24292f',
        type: '#005cc5',
        operator: '#d73a49',
        bracket: '#24292f',
      },
    },
    ui: {
      primary: '#0366d6',
      secondary: '#586069',
      accent: '#28a745',
      success: '#28a745',
      warning: '#ffd33d',
      error: '#d73a49',
    },
  },
  
  'vs-dark': {
    pageBackground: '#1e1e1e',
    pageSurface: '#2d2d30',
    pageText: {
      primary: '#cccccc',
      secondary: '#b3b3b3',
      muted: '#808080',
    },
    pageBorder: {
      primary: '#3e3e42',
      secondary: '#2d2d30',
    },
    editor: {
      background: '#1e1e1e',
      foreground: '#cccccc',
      selection: '#264f78',
      lineNumber: '#858585',
      cursor: '#cccccc',
      syntax: {
        comment: '#6a9955',
        keyword: '#569cd6',
        string: '#ce9178',
        number: '#b5cea8',
        function: '#dcdcaa',
        variable: '#9cdcfe',
        type: '#4ec9b0',
        operator: '#d4d4d4',
        bracket: '#da70d6',
      },
    },
    ui: {
      primary: '#0e639c',
      secondary: '#3c3c3c',
      accent: '#007acc',
      success: '#89d185',
      warning: '#ffcc02',
      error: '#f48771',
    },
  },
};

export const EDITOR_THEME_STORAGE_KEY = 'algogo-editor-theme';
export const DEFAULT_EDITOR_THEME = 'vs-light' as const;

export const EDITOR_THEME_LABELS = {
  'vs-light': 'Visual Studio Light',
  'vs-dark': 'Visual Studio Dark',
} as const;