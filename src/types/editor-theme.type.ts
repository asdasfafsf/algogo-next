export type EditorTheme = 
  | 'vs-light'           // Visual Studio Light
  | 'vs-dark';           // Visual Studio Dark

export interface EditorThemeColors {
  // 페이지 전체 배경색
  pageBackground: string;
  pageSurface: string;
  
  // 텍스트 색상
  pageText: {
    primary: string;
    secondary: string;
    muted: string;
  };
  
  // 보더 색상
  pageBorder: {
    primary: string;
    secondary: string;
  };
  
  // 에디터 관련 색상
  editor: {
    background: string;
    foreground: string;
    selection: string;
    lineNumber: string;
    cursor: string;
    // 문법 하이라이팅 색상
    syntax: {
      comment: string;
      keyword: string;
      string: string;
      number: string;
      function: string;
      variable: string;
      type: string;
      operator: string;
      bracket: string;
    };
  };
  
  // UI 요소 색상
  ui: {
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
  };
}

export interface EditorThemeConfig {
  [key: string]: EditorThemeColors;
}