"use client"

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';

interface Template {
  value: string;
  label: string;
}

interface CodeEditorTemplateDropdownProps {
  selectedTemplate?: string;
  templates?: Template[];
  onTemplateChange?: (template: string) => void;
  disabled?: boolean;
}

const DEFAULT_TEMPLATES: Template[] = [
  { value: 'empty', label: '빈 템플릿' },
  { value: 'basic', label: '기본 템플릿' },
  { value: 'input', label: '입력 처리' },
  { value: 'algorithm', label: '알고리즘' },
];

export function CodeEditorTemplateDropdown({
  selectedTemplate = 'empty',
  templates = DEFAULT_TEMPLATES,
  onTemplateChange,
  disabled = false
}: CodeEditorTemplateDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedTemp = templates.find(template => template.value === selectedTemplate) || templates[0];

  const handleTemplateSelect = (template: Template) => {
    onTemplateChange?.(template.value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-2 min-w-0">
      <span className="text-sm font-medium text-editor-page-text whitespace-nowrap">
        템플릿
      </span>
      
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className="h-10 w-32 justify-between bg-editor-page-bg border-editor-page-border text-editor-page-text-secondary hover:bg-editor-page-base-neutral-hover focus:border-editor-page-border focus:ring-0 transition-colors cursor-pointer rounded-lg"
          >
            <span className="font-medium text-sm cursor-pointer">{selectedTemp.label}</span>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-60 cursor-pointer" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-32 p-0 bg-editor-page-bg border-editor-page-border rounded-lg" align="start">
          <div className="py-1">
            {templates.map((template) => (
              <button
                key={template.value}
                onClick={() => handleTemplateSelect(template)}
                className="w-full p-3 text-left text-editor-page-text-secondary hover:bg-editor-page-base-neutral-hover hover:text-editor-page-text transition-colors cursor-pointer rounded-md"
              >
                <span className="font-medium text-sm cursor-pointer">{template.label}</span>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}