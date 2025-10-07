"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { MaterialInput } from '@/components/ui/MaterialInput'

export type PromptVariant = 'info' | 'success' | 'warning' | 'error'

interface PromptProps {
  content: string
  variant?: PromptVariant
  title?: string
  confirmText?: string
  cancelText?: string
  placeholder?: string
  defaultValue?: string
  onConfirm?: (value: string) => void
  onCancel?: () => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
  // Props injected by DialogContext
  dialogId?: number
  onDialogClose?: (result?: string | boolean | null | undefined | void) => void
}

const getDefaultTitle = (variant: PromptVariant): string => {
  switch (variant) {
    case 'info':
      return '입력'
    case 'success':
      return '확인'
    case 'warning':
      return '경고'
    case 'error':
      return '주의'
    default:
      return '입력'
  }
}

const getConfirmButtonColor = (variant: PromptVariant) => {
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

export function Prompt({ 
  content, 
  variant = 'info', 
  title,
  confirmText = '확인',
  cancelText = '취소',
  placeholder = '',
  defaultValue = '',
  onConfirm,
  onCancel,
  open = false,
  onOpenChange,
  onDialogClose
}: PromptProps) {
  const [value, setValue] = useState(defaultValue)
  const promptTitle = title || getDefaultTitle(variant)
  const confirmButtonColor = getConfirmButtonColor(variant)

  const handleConfirm = () => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onConfirm) {
      onConfirm(value)
    }
    // Call DialogContext close function if available
    if (onDialogClose) {
      onDialogClose(value)
    }
  }

  const handleCancel = () => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onCancel) {
      onCancel()
    }
    setValue(defaultValue) // Reset value on cancel
    // Call DialogContext close function if available
    if (onDialogClose) {
      onDialogClose(null)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen)
    }
    if (!newOpen) {
      if (onCancel) {
        onCancel()
      }
      setValue(defaultValue) // Reset value when closing
      // Call DialogContext close function if available
      if (onDialogClose) {
        onDialogClose(null)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleConfirm()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="w-[400px] max-w-[calc(100vw-2rem)] mx-4 p-0 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)]"
        showCloseButton={false}
      >
        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl">
          <div className="flex justify-between items-center px-6 py-5">
            <DialogTitle className="text-[17px] font-semibold text-gray-800 dark:text-gray-200">
              {promptTitle}
            </DialogTitle>
          </div>

          <div className="px-6 pb-3 pt-1">
            <MaterialInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              label={content}
              placeholder={placeholder}
              className="w-full"
              autoFocus
              variant="outlined"
              size="medium"
              color={variant === 'error' ? 'red' : variant === 'warning' ? 'amber' : variant === 'success' ? 'green' : 'blue'}
            />
          </div>

          <div className="flex justify-end gap-1 px-4 pb-4 pt-2">
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

export default Prompt