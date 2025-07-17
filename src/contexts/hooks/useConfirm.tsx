import { useCallback } from 'react'
import { Confirm, type ConfirmVariant } from '@/components/modal/Confirm'
import { useDialogContext } from '../DialogContext'

interface UseConfirmOptions {
  variant?: ConfirmVariant
  title?: string
  confirmText?: string
  cancelText?: string
}

export function useConfirm() {
  const { showDialog } = useDialogContext()

  const confirm = useCallback(async (
    content: string, 
    options: UseConfirmOptions = {}
  ): Promise<boolean> => {
    const result = await showDialog(
      <Confirm
        content={content}
        variant={options.variant}
        title={options.title}
        confirmText={options.confirmText}
        cancelText={options.cancelText}
        open={true}
      />
    )
    
    // Convert DialogContext result to boolean
    return result === true
  }, [showDialog])

  return { confirm }
}