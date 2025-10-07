"use client"

import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
  message: string
  variant?: AlertVariant
  title?: string
  confirmText?: string
  onClose?: () => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
  // Props injected by DialogContext
  dialogId?: number
  onDialogClose?: (result?: string | boolean | null | undefined | void) => void
}

const getDefaultTitle = (variant: AlertVariant): string => {
  switch (variant) {
    case 'info':
      return '알림'
    case 'success':
      return '성공'
    case 'warning':
      return '경고'
    case 'error':
      return '오류'
    default:
      return '알림'
  }
}

export function Alert({ 
  message, 
  variant = 'info', 
  title,
  confirmText = '확인',
  onClose,
  open = false,
  onOpenChange,
  onDialogClose
}: AlertProps) {
  const alertTitle = title || getDefaultTitle(variant)

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onClose) {
      onClose()
    }
    // Call DialogContext close function if available
    if (onDialogClose) {
      onDialogClose()
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen)
    }
    if (!newOpen) {
      if (onClose) {
        onClose()
      }
      // Call DialogContext close function if available
      if (onDialogClose) {
        onDialogClose()
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="w-[400px] max-w-[calc(100vw-2rem)] mx-4 p-0 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)]"
        showCloseButton={false}
      >
        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl">
          <div className="flex justify-between items-center px-5 py-4 sm:px-7 sm:py-5">
            <DialogTitle className="text-base sm:text-[17px] font-semibold text-gray-800 dark:text-gray-200">
              {alertTitle}
            </DialogTitle>
          </div>

          <div className="px-5 pb-5 pt-2 sm:px-7 sm:pb-7 text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
            {message}
          </div>

          <div className="flex justify-end px-4 pb-4 pt-2">
            <Button
              onClick={handleClose}
              color="blue"
              size="default"
              className="w-full sm:w-auto"
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Alert