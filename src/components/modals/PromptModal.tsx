"use client";

import { useCallback, useEffect, useState } from 'react';
import { Clipboard } from 'lucide-react';
import useModal from '@/plugins/modal/useModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PromptModalProps {
  content: string;
  defaultValue?: string | boolean;
  title?: string;
}

export default function PromptModal({ title, defaultValue = '', content }: PromptModalProps) {
  const modal = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOk = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);

    if (value === '') {
      modal.top()?.resolve(defaultValue);
    } else {
      modal.top()?.resolve(value);
    }
  }, [value, defaultValue, modal]);

  const handleClose = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setIsVisible(false);
      modal.top()?.resolve(false);
    }
  }, [modal]);

  const handleClipboardPaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setValue(text);
    } catch (err) {
      console.warn('클립보드 접근 실패:', err);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          setIsVisible(false);
          modal.top()?.resolve(false);
          break;
        case 'Enter':
          setIsVisible(false);
          if (value === '') {
            modal.top()?.resolve(defaultValue);
          } else {
            modal.top()?.resolve(value);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [modal, value, defaultValue]);

  return (
    <div
      onClick={handleClose}
      className={`flex items-center justify-center fixed inset-0 bg-black/30 transition-opacity z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[400px] bg-card text-card-foreground rounded-xl shadow-sm animate-in fade-in duration-200"
      >
        <header className="flex items-center justify-between px-6 py-6">
          {title && (
            <h2 className="text-lg font-semibold">
              {title}
            </h2>
          )}
        </header>
        
        <section className="px-6 pb-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-muted-foreground">
              {content}
            </label>
            <div className="relative">
              <Input
                placeholder={content}
                value={value}
                onChange={handleChange}
                className="pr-10"
                autoFocus
              />
              <button
                onClick={handleClipboardPaste}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                title="클립보드에서 붙여넣기"
              >
                <Clipboard className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
        
        <footer className="flex items-center justify-end gap-2 px-6 pb-6">
          <Button
            variant="outline"
            onClick={handleClose}
            className="min-w-[80px]"
          >
            취소
          </Button>
          <Button
            onClick={handleOk}
            className="min-w-[80px]"
          >
            확인
          </Button>
        </footer>
      </div>
    </div>
  );
}
