"use client"

import { useState, useEffect } from 'react';
import { Code, X, Trash2 } from 'lucide-react';
import { UpdateCodeTemplate } from '@/types/code-template.type';
import { Language } from '@/types/language.type';
import { LANGUAGE, MONACO_LANGUAGE } from '@/constants/language.constant';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/Dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { MonacoEditor } from '@/domains/problem-detail/components/editor/MonacoEditor';

interface UpdateCodeTemplateModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSave?: (template: UpdateCodeTemplate) => void;
  onDelete?: (uuid: string) => void;
  initialTemplate: UpdateCodeTemplate;
  // Props injected by DialogContext
  dialogId?: number;
  onDialogClose?: (result?: UpdateCodeTemplate) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const LANGUAGE_OPTIONS = Object.entries(LANGUAGE).map(([key, value]) => ({
  value: value as Language,
  label: key
}));

export function UpdateCodeTemplateModal({
  isOpen,
  onClose,
  onSave,
  onDelete,
  initialTemplate,
  onDialogClose,
  open = false,
  onOpenChange
}: UpdateCodeTemplateModalProps) {
  const [formData, setFormData] = useState<UpdateCodeTemplate>(initialTemplate);

  // Initialize form data when modal opens
  useEffect(() => {
    const modalIsOpen = isOpen || open;
    if (modalIsOpen) {
      setFormData(initialTemplate);
    }
  }, [isOpen, open, initialTemplate]);

  const handleInputChange = (field: keyof UpdateCodeTemplate, value: string | Language) => {
    setFormData((prev: UpdateCodeTemplate) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    const template: UpdateCodeTemplate = {
      ...formData,
    };

    onSave?.(template);
    if (onOpenChange) {
      onOpenChange(false);
    }
    if (onClose) {
      onClose();
    }
    // Call DialogContext close function if available
    if (onDialogClose) {
      onDialogClose(template);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(initialTemplate.uuid);
    }
    if (onOpenChange) {
      onOpenChange(false);
    }
    if (onClose) {
      onClose();
    }
    // Call DialogContext close function if available
    if (onDialogClose) {
      onDialogClose(undefined);
    }
  };

  const handleCancel = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
    if (onClose) {
      onClose();
    }
    // Call DialogContext close function if available
    if (onDialogClose) {
      onDialogClose(undefined);
    }
  };

  const modalIsOpen = isOpen || open;
  
  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
    if (!newOpen) {
      handleCancel();
    }
  };

  const isFormValid = formData.name.trim() && formData.content.trim();

  return (
    <Dialog open={modalIsOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="!w-[95vw] !max-w-[900px] !h-[95vh] !max-h-[800px] p-0 gap-0 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-t-2xl border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex flex-col">
                <DialogTitle className="text-xl font-semibold leading-tight">
                  템플릿 수정
                </DialogTitle>
                <Typography variant="small" className="text-gray-600 dark:text-gray-400 mt-1 leading-tight">
                  코드 템플릿을 수정하고 관리하세요
                </Typography>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(95vh-280px)] flex-1">
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  템플릿 이름 *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="예: 알고리즘 기본 구조"
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  프로그래밍 언어 *
                </label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => handleInputChange('language', value as Language)}
                >
                  <SelectTrigger className="!h-12 w-full cursor-pointer">
                    <SelectValue placeholder="언어를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGE_OPTIONS.map(option => (
                      <SelectItem 
                        className="!h-12 cursor-pointer"
                        key={option.value} 
                        value={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                설명
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                placeholder="템플릿에 대한 간단한 설명을 입력하세요..."
              />
            </div>

            {/* Code Editor */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                코드 템플릿 *
              </label>
              <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-600">
                <MonacoEditor
                  value={formData.content}
                  onChange={(value) => handleInputChange('content', value || '')}
                  language={MONACO_LANGUAGE[formData.language as keyof typeof MONACO_LANGUAGE]}
                  height={300}
                  theme="vs-dark"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between px-8 py-6 bg-gray-50/50 dark:bg-gray-800/50 border-t border-gray-200/50 dark:border-gray-700/50 rounded-b-2xl">
          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={handleDelete}
              color="red"
              className="min-w-[100px]"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              삭제
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="min-w-[100px]"
            >
              취소
            </Button>
            <Button
              onClick={handleSave}
              color="blue"
              className="min-w-[100px]"
              disabled={!isFormValid}
            >
              수정
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}