"use client";

import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import useModal from '@/plugins/modal/useModal';

interface ConfirmModalProps {
  content: string;
  title?: string;
  cancelText?: string;
  confirmText?: string;
}

export default function ConfirmModal({
  content,
  title = '확인',
  cancelText = '취소',
  confirmText = '확인',
}: ConfirmModalProps) {
  const modal = useModal();
  const [isVisible, setIsVisible] = useState(false);

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    modal.top()?.resolve(false);
  };

  const handleOk = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    modal.top()?.resolve(true);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
      switch (event.key) {
        case 'Escape':
          setIsVisible(false);
          modal.top()?.resolve(false);
          break;
        case 'Enter':
          setIsVisible(false);
          modal.top()?.resolve(true);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [modal]);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && handleCancel(e)}
      className={`flex items-center justify-center fixed inset-0 bg-black/30 transition-opacity z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        role="dialog"
        aria-labelledby="confirm-title"
        className="w-[400px] bg-card text-card-foreground rounded-xl shadow-sm animate-in fade-in duration-200"
      >
        <div className="flex justify-between items-center px-6 py-6">
          <h2 id="confirm-title" className="text-lg font-semibold">{title}</h2>
        </div>

        <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground min-h-[60px]">
          {content}
        </div>

        <div className="flex justify-end gap-2 px-6 pb-6">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="min-w-[80px]"
          >
            {cancelText}
          </Button>
          <Button
            onClick={handleOk}
            className="min-w-[80px]"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
