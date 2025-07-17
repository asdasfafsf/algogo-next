"use client"

import React from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/Button'

export type ConfirmVariant = 'info' | 'success' | 'warning' | 'error'

interface ConfirmProps {
  content: string
  variant?: ConfirmVariant
  title?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const getDefaultTitle = (variant: ConfirmVariant): string => {
  switch (variant) {
    case 'info':
      return '확인'
    case 'success':
      return '성공'
    case 'warning':
      return '경고'
    case 'error':
      return '오류'
    default:
      return '확인'
  }
}

const getConfirmButtonColor = (variant: ConfirmVariant) => {
  switch (variant) {
    case 'error':
      return 'red'
    case 'warning':
      return 'yellow'
    case 'success':
      return 'green'
    default:
      return 'blue'
  }
}

export function Confirm({ 
  content, 
  variant = 'info', 
  title,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
  open = false,
  onOpenChange
}: ConfirmProps) {
  const confirmTitle = title || getDefaultTitle(variant)
  const confirmButtonColor = getConfirmButtonColor(variant)

  const handleConfirm = () => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onConfirm) {
      onConfirm()
    }
  }

  const handleCancel = () => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onCancel) {
      onCancel()
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen)
    }
    if (!newOpen && onCancel) {
      onCancel()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="w-[400px] max-w-[calc(100vw-2rem)] mx-4 p-0 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)]"
        showCloseButton={false}
      >
        <div
          role="dialog"
          aria-labelledby="confirm-title"
          className="w-full bg-white dark:bg-gray-800 rounded-2xl"
        >
          <div className="flex justify-between items-center px-6 py-5">
            <h2 id="confirm-title" className="text-[17px] font-semibold text-gray-800 dark:text-gray-200">
              {confirmTitle}
            </h2>
          </div>

          <div className="px-6 pb-5 pt-1 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 min-h-[60px]">
            {content}
          </div>

          <div className="flex justify-end gap-1 px-4 pb-4">
            <Button
              onClick={handleCancel}
              color="gray"
              size="default"
              className="min-w-[80px]"
            >
              {cancelText}
            </Button>
            <Button
              onClick={handleConfirm}
              color={confirmButtonColor}
              size="default"
              className="min-w-[80px]"
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Confirm