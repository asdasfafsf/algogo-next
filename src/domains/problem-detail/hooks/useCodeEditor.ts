import { useCallback } from 'react';
import { useCodeEditorStore } from '@/lib/stores';

export function useCodeEditor() {
  const selectedLanguage = useCodeEditorStore((state) => state.selectedLanguage);
  const currentCode = useCodeEditorStore((state) => state.currentCode);
  const codes = useCodeEditorStore((state) => state.codes);
  const setSelectedLanguage = useCodeEditorStore((state) => state.setSelectedLanguage);
  const setCurrentCode = useCodeEditorStore((state) => state.setCurrentCode);

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
