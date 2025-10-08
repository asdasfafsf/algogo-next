import { Language } from '@/types/language.type';
import { create } from 'zustand';

interface CodeEditorStore {
  selectedLanguage: Language;
  currentCode: string;
  codes: Record<Language, string>;
  setSelectedLanguage: (language: Language) => void;
  setCurrentCode: (code: string) => void;
  initializeCodes: (codes: Record<Language, string>, defaultLanguage: Language) => void;
}

export const useCodeEditorStore = create<CodeEditorStore>((set) => ({
  selectedLanguage: 'Python',
  currentCode: '',
  codes: {
    'Python': '',
    'Java': '',
    'C++': '',
    'Node.js': '',
  },
  setSelectedLanguage: (language) =>
    set((state) => ({
      selectedLanguage: language,
      currentCode: state.codes[language],
    })),
  setCurrentCode: (code) =>
    set((state) => ({
      currentCode: code,
      codes: {
        ...state.codes,
        [state.selectedLanguage]: code,
      },
    })),
  initializeCodes: (codes, defaultLanguage) =>
    set({
      codes,
      selectedLanguage: defaultLanguage,
      currentCode: codes[defaultLanguage],
    }),
}));
