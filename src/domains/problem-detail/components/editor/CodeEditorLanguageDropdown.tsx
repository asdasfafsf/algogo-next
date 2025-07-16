"use client"

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

interface Language {
  value: string;
  label: string;
  icon?: string;
}

interface CodeEditorLanguageDropdownProps {
  selectedLanguage?: string;
  languages?: Language[];
  onLanguageChange?: (language: string) => void;
  disabled?: boolean;
}

const DEFAULT_LANGUAGES: Language[] = [
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'javascript', label: 'JavaScript' },
];

export function CodeEditorLanguageDropdown({
  selectedLanguage = 'python',
  languages = DEFAULT_LANGUAGES,
  onLanguageChange,
  disabled = false
}: CodeEditorLanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLang = languages.find(lang => lang.value === selectedLanguage) || languages[0];

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange?.(language.value);
    setIsOpen(false);
  };

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
            {languages.map((language) => (
              <Button
                key={language.value}
                variant="ghost"
                onClick={() => handleLanguageSelect(language)}
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