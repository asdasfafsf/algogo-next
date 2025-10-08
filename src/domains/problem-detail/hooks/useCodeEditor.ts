import { useEffect, useCallback } from 'react';
import { useCodeEditorStore } from '@/lib/stores';
import { Language } from '@/types/language.type';
import { getDefaultTemplate } from '@/constants/code-template.constant';

interface UseCodeEditorProps {
  initialLanguage?: Language;
  initialCodes?: Record<Language, string>;
}

export function useCodeEditor({ initialLanguage = 'Python', initialCodes }: UseCodeEditorProps = {}) {
  const selectedLanguage = useCodeEditorStore((state) => state.selectedLanguage);
  const currentCode = useCodeEditorStore((state) => state.currentCode);
  const codes = useCodeEditorStore((state) => state.codes)
  const setSelectedLanguage = useCodeEditorStore((state) => state.setSelectedLanguage);
  const setCurrentCode = useCodeEditorStore((state) => state.setCurrentCode);
  const initializeCodes = useCodeEditorStore((state) => state.initializeCodes);

  useEffect(() => {
    const defaultCodes: Record<Language, string> = {
      'Python': getDefaultTemplate('Python'),
      'Java': getDefaultTemplate('Java'),
      'C++': getDefaultTemplate('C++'),
      'Node.js': getDefaultTemplate('Node.js'),
    };

    const finalCodes = initialCodes || defaultCodes;
    initializeCodes(finalCodes, initialLanguage);
  }, []);

  const handleCodeChange = useCallback((code: string | undefined) => {
    setCurrentCode(code || '');
  }, [setCurrentCode]);

  return {
    selectedLanguage,
    currentCode,
    codes,
    setSelectedLanguage,
    handleCodeChange,
  } as const;
}
