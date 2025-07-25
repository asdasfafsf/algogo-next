import { Language } from "./language.type";

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
