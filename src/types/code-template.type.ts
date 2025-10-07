import { Language } from "./language.type";

export type Code = {
  problemUuid: string;
  language: Language
  content: string;
}


export type CodeTemplate = {
  uuid: string;
  name: string;
  description?: string;
  content: string;
  language: Language;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CodeTemplateSummary = {
  uuid: string;
  name: string;
  language: Language;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateCodeTemplate = Omit<CodeTemplate, 'uuid' | 'createdAt' | 'updatedAt'>
export type UpdateCodeTemplate = Omit<CodeTemplate, 'createdAt' | 'updatedAt'>


export type CodeSetting = {
  fontSize: number;
  problemContentRate: number;
  theme: "vs-dark" | 'vs-light' | 'monokai' | 'github';
  tabSize: number;
  lineNumber: 'on' | 'off' | 'relative';
  defaultLanguage: Language
}
