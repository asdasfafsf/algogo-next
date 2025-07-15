export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  editor: {
    background: string;
    foreground: string;
    selection: string;
    lineNumber: string;
    comment: string;
    keyword: string;
    string: string;
    number: string;
    function: string;
    variable: string;
  };
}

export interface ThemeConfig {
  light: ThemeColors;
  dark: ThemeColors;
}