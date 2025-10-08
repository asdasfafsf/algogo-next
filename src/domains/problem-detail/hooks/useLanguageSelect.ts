import { useState, useCallback } from 'react';
import { useCodeEditorStore } from '@/lib/stores';
import { Language } from '@/types/language.type';

export function useLanguageSelect() {
  const selectedLanguage = useCodeEditorStore((state) => state.selectedLanguage);
  const setSelectedLanguage = useCodeEditorStore((state) => state.setSelectedLanguage);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = useCallback((language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  }, [setSelectedLanguage]);

  return {
    selectedLanguage,
    isOpen,
    setIsOpen,
    handleLanguageSelect,
  } as const;
}
