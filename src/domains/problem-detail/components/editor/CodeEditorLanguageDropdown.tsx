"use client"

import { ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Language } from '@/types/language.type';
import { LANGUAGE } from '@/constants/language.constant';
import { useLanguageSelect } from '../../hooks/useLanguageSelect';

interface LanguageOption {
  value: Language;
  label: string;
}

interface CodeEditorLanguageDropdownProps {
  disabled?: boolean;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: LANGUAGE.Python, label: 'Python' },
  { value: LANGUAGE.Java, label: 'Java' },
  { value: LANGUAGE['C++'], label: 'C++' },
  { value: LANGUAGE['Node.js'], label: 'Node.js' },
];

export function CodeEditorLanguageDropdown({
  disabled = false
}: CodeEditorLanguageDropdownProps) {
  const { selectedLanguage, isOpen, setIsOpen, handleLanguageSelect } = useLanguageSelect();
  const selectedLang = LANGUAGE_OPTIONS.find(lang => lang.value === selectedLanguage) || LANGUAGE_OPTIONS[0];

  return (
    <div className="flex items-center min-w-0">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className="h-10 w-32 justify-between bg-editor-page-bg border-editor-page-border text-editor-page-text-secondary hover:bg-editor-page-base-neutral-hover focus:border-editor-page-border focus:ring-0 transition-colors cursor-pointer rounded-lg"
          >
            <Typography variant="small" className="cursor-pointer truncate">
              {selectedLang.label}
            </Typography>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-60 cursor-pointer" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-32 p-0 bg-editor-page-bg border-editor-page-border rounded-lg" align="start">
          <div>
            {LANGUAGE_OPTIONS.map((language) => (
              <Button
                key={language.value}
                variant="ghost"
                onClick={() => handleLanguageSelect(language.value)}
                className="w-full justify-start p-3 h-auto text-editor-page-text-secondary hover:bg-editor-page-base-neutral-hover hover:text-editor-page-text transition-colors cursor-pointer rounded-md"
              >
                <Typography variant="small" className="cursor-pointer">
                  {language.label}
                </Typography>
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}