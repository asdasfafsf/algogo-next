import { Language } from '@/types/language.type';
import { CodeTemplate, CodeTemplateSummary } from '@/types/code-template.type';
import { create } from 'zustand';
import { getTemplates, getTemplate } from '../api/pure/code.api';

interface CodeTemplateStore {
  summaries: Record<Language, CodeTemplateSummary[] | null>;
  details: Record<string, CodeTemplate | null>;
  loadingSummaries: Record<Language, boolean>;
  loadingDetails: Record<string, boolean>;
  getSummaries: (language: Language) => Promise<CodeTemplateSummary[]>;
  getDetail: (uuid: string) => Promise<CodeTemplate | null>;
  setSummaries: (language: Language, summaries: CodeTemplateSummary[]) => void;
  setDetail: (uuid: string, detail: CodeTemplate) => void;
}

export const useCodeTemplateStore = create<CodeTemplateStore>((set, get) => ({
  summaries: {
    'Python': null,
    'Java': null,
    'C++': null,
    'Node.js': null,
  },
  details: {},
  loadingSummaries: {
    'Python': false,
    'Java': false,
    'C++': false,
    'Node.js': false,
  },
  loadingDetails: {},
  getSummaries: async (language: Language) => {
    const state = get();

    if (state.summaries[language]) {
      return state.summaries[language]!;
    }

    if (state.loadingSummaries[language]) {
      return [];
    }

    set((state) => ({
      loadingSummaries: {
        ...state.loadingSummaries,
        [language]: true,
      },
    }));

    try {
      // TODO: API 호출로 교체
      // const response = await fetchTemplatesApi(language);
      const response = await getTemplates();
      const summaryList: CodeTemplateSummary[] = response.data.summaryList;
      const defaultDetails: Record<string, CodeTemplate> = response.data.defaultList.reduce((acc, template) => ({
        ...acc,
        [template.uuid]: template,
      }), {});

      set((state) => ({
        summaries: {
          ...state.summaries,
          [language]: summaryList,
        },
        details: {
          ...state.details,
          ...defaultDetails,
        },
        loadingSummaries: {
          ...state.loadingSummaries,
          [language]: false,
        },
      }));

      return summaryList;
    } catch (error) {
      set((state) => ({
        loadingSummaries: {
          ...state.loadingSummaries,
          [language]: false,
        },
      }));
      return [];
    }
  },
  getDetail: async (uuid: string) => {
    const state = get();

    if (state.details[uuid]) {
      return state.details[uuid]!;
    }

    if (state.loadingDetails[uuid]) {
      return null;
    }

    set((state) => ({
      loadingDetails: {
        ...state.loadingDetails,
        [uuid]: true,
      },
    }));

    try {
      // TODO: API 호출로 교체
      // const response = await fetchTemplateDetailApi(uuid);
      const response = await getTemplate(uuid);
      const detail: CodeTemplate | null = null;

      if (detail) {
        set((state) => ({
          details: {
            ...state.details,
            [uuid]: detail,
          },
          loadingDetails: {
            ...state.loadingDetails,
            [uuid]: false,
          },
        }));
      } else {
        set((state) => ({
          loadingDetails: {
            ...state.loadingDetails,
            [uuid]: false,
          },
        }));
      }

      return detail;
    } catch (error) {
      set((state) => ({
        loadingDetails: {
          ...state.loadingDetails,
          [uuid]: false,
        },
      }));
      return null;
    }
  },
  setSummaries: (language: Language, summaries: CodeTemplateSummary[]) =>
    set((state) => ({
      summaries: {
        ...state.summaries,
        [language]: summaries,
      },
    })),
  setDetail: (uuid: string, detail: CodeTemplate) =>
    set((state) => ({
      details: {
        ...state.details,
        [uuid]: detail,
      },
    })),
}));
