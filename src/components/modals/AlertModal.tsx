"use client";

import { useEffect, useState } from 'react';
import useModal from '@/plugins/modal/useModal';
import { Button } from '@/components/ui/button';

interface AlertModalProps {
  content: string;
  title?: string;
  confirmText?: string;
}

export default function AlertModal({
  content,
  title = '알림',
  confirmText = '확인',
}: AlertModalProps) {
  const modal = useModal();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    modal.top()?.resolve(true);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          handleClose();
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

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`flex items-center justify-center fixed inset-0 bg-black/30 transition-opacity z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        role="dialog"
        aria-labelledby="alert-title"
        className="w-[400px] bg-card text-card-foreground rounded-xl shadow-sm animate-in fade-in duration-200"
      >
        <div className="flex justify-between items-center px-6 py-6">
          <h2 id="alert-title" className="text-lg font-semibold">{title}</h2>
        </div>

        <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
          {content}
        </div>

        <div className="flex justify-end px-6 pb-6">
          <Button
            onClick={handleClose}
            className="min-w-[80px]"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
