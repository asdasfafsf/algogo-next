"use client"

import { useState } from 'react';
import { ChevronDown, Plus, PencilIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';

interface Template {
  value: string;
  label: string;
  uuid?: string;
  content?: string;
  description?: string;
}

interface CodeEditorTemplateDropdownProps {
  selectedTemplate?: string;
  templates?: Template[];
  onTemplateChange?: (template: string) => void;
  onTemplateAdd?: () => void;
  onTemplateEdit?: (template: Template) => void;
  onTemplateDelete?: (template: Template) => void;
  disabled?: boolean;
  placeholder?: string;
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
  onTemplateAdd,
  onTemplateEdit,
  onTemplateDelete,
  disabled = false,
  placeholder = '템플릿 선택'
}: CodeEditorTemplateDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedTemp = templates.find(template => template.value === selectedTemplate) || templates[0];

  const handleTemplateSelect = (template: Template) => {
    onTemplateChange?.(template.value);
    setIsOpen(false);
  };

  const handleTemplateEdit = (e: React.MouseEvent, template: Template) => {
    e.stopPropagation();
    onTemplateEdit?.(template);
  };

  const handleTemplateAdd = () => {
    onTemplateAdd?.();
    setIsOpen(false);
  };

  const displayText = selectedTemp ? selectedTemp.label : placeholder;

  return (
    <div className="flex items-center gap-2 min-w-0">
      <Typography variant="small" className="text-editor-page-text whitespace-nowrap">
        템플릿
      </Typography>
      
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className="h-10 w-36 justify-between bg-editor-page-bg border-editor-page-border text-editor-page-text-secondary hover:bg-editor-page-base-neutral-hover focus:border-editor-page-border focus:ring-0 transition-colors cursor-pointer rounded-lg"
          >
            <Typography variant="small" className="cursor-pointer truncate max-w-[100px]">
              {displayText}
            </Typography>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-60 cursor-pointer" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-36 p-0 bg-editor-page-bg border-editor-page-border rounded-lg" align="start">
          <div>
            {templates.map((template) => (
              <div
                key={template.value}
                className="flex items-center justify-between w-full p-3 text-editor-page-text-secondary hover:bg-editor-page-base-neutral-hover hover:text-editor-page-text transition-colors rounded-md group cursor-pointer"
                onClick={() => handleTemplateSelect(template)}
              >
                <Typography variant="small" className="truncate max-w-[80px]">
                  {template.label}
                </Typography>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={(e) => handleTemplateEdit(e, template)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-editor-page-base-neutral-active rounded transition-all cursor-context-menu ml-2"
                    >
                      <PencilIcon className="h-4 w-4 text-editor-page-text-muted" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <Typography variant="small">템플릿 수정</Typography>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
            
            <div
              onClick={handleTemplateAdd}
              className="flex items-center w-full gap-2 p-3 text-editor-page-text-secondary hover:bg-editor-page-base-neutral-hover hover:text-editor-page-text transition-colors cursor-crosshair rounded-md border-t border-editor-page-border-tertiary"
            >
              <Plus className="h-4 w-4" />
              <Typography variant="small">템플릿 추가</Typography>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}