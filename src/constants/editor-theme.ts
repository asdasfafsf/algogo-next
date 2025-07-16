import { EditorThemeConfig, EditorSettings } from '@/types/editor-theme.type';

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
      primary: '#e1e8ed',
      secondary: '#f1f3f4',
      tertiary: '#f8f9fa',
    },
    pageBase: {
      neutral: '#f6f8fa',
      neutralHover: '#eef2f5',
      neutralActive: '#e1e7ec',
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
    pageBackground: '#212121',
    pageSurface: '#212121',
    pageText: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
      muted: '#9e9e9e',
    },
    pageBorder: {
      primary: '#424242',
      secondary: '#424242',
      tertiary: '#373737',
    },
    pageBase: {
      neutral: '#373737',
      neutralHover: '#404040',
      neutralActive: '#4a4a4a',
    },
    editor: {
      background: '#212121',
      foreground: '#ffffff',
      selection: '#264f78',
      lineNumber: '#9e9e9e',
      cursor: '#ffffff',
      syntax: {
        comment: '#6a9955',
        keyword: '#569cd6',
        string: '#ce9178',
        number: '#b5cea8',
        function: '#dcdcaa',
        variable: '#9cdcfe',
        type: '#4ec9b0',
        operator: '#212121',
        bracket: '#212121',
      },
    },
    ui: {
      primary: '#0e639c',
      secondary: '#616161',
      accent: '#007acc',
      success: '#89d185',
      warning: '#ffcc02',
      error: '#f48771',
    },
  },
  
  'monokai': {
    pageBackground: '#272822',
    pageSurface: '#3e3d32',
    pageText: {
      primary: '#f8f8f2',
      secondary: '#a6a290',
      muted: '#75715e',
    },
    pageBorder: {
      primary: '#3e3d32',
      secondary: '#49483e',
      tertiary: '#34332a',
    },
    pageBase: {
      neutral: '#3e3d32',
      neutralHover: '#49483e',
      neutralActive: '#54534a',
    },
    editor: {
      background: '#272822',
      foreground: '#f8f8f2',
      selection: '#49483e',
      lineNumber: '#90908a',
      cursor: '#f8f8f0',
      syntax: {
        comment: '#75715e',
        keyword: '#f92672',
        string: '#e6db74',
        number: '#ae81ff',
        function: '#a6e22e',
        variable: '#f8f8f2',
        type: '#66d9ef',
        operator: '#f92672',
        bracket: '#f8f8f2',
      },
    },
    ui: {
      primary: '#a6e22e',
      secondary: '#75715e',
      accent: '#66d9ef',
      success: '#a6e22e',
      warning: '#fd971f',
      error: '#f92672',
    },
  },
  
  'github': {
    pageBackground: '#ffffff',
    pageSurface: '#f6f8fa',
    pageText: {
      primary: '#24292e',
      secondary: '#586069',
      muted: '#6a737d',
    },
    pageBorder: {
      primary: '#eaecef',
      secondary: '#f1f3f4',
      tertiary: '#f8f9fa',
    },
    pageBase: {
      neutral: '#f6f8fa',
      neutralHover: '#e1e7ec',
      neutralActive: '#d0d7de',
    },
    editor: {
      background: '#ffffff',
      foreground: '#24292e',
      selection: '#c8e1ff',
      lineNumber: '#6a737d',
      cursor: '#24292e',
      syntax: {
        comment: '#6a737d',
        keyword: '#d73a49',
        string: '#032f62',
        number: '#005cc5',
        function: '#6f42c1',
        variable: '#24292e',
        type: '#005cc5',
        operator: '#d73a49',
        bracket: '#24292e',
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
};

export const EDITOR_THEME_STORAGE_KEY = 'algogo-editor-theme';
export const EDITOR_SETTINGS_STORAGE_KEY = 'algogo-editor-settings';
export const DEFAULT_EDITOR_THEME = 'vs-dark' as const;

export const DEFAULT_EDITOR_SETTINGS: EditorSettings = {
  theme: 'vs-dark',
  fontSize: 14,
  tabSize: 4,
  lineNumber: 'on',
  defaultLanguage: 'python',
  problemSize: 110,
};

export const EDITOR_THEME_LABELS = {
  'vs-light': 'Visual Studio Light',
  'vs-dark': 'Visual Studio Dark',
  'monokai': 'Monokai',
  'github': 'GitHub',
} as const;