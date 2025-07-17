import { useCallback } from 'react'
import { Alert, type AlertVariant } from '@/components/modal/Alert'
import { useDialogContext } from '../DialogContext'

interface UseAlertOptions {
  variant?: AlertVariant
  title?: string
  confirmText?: string
}

export function useAlert() {
  const { showDialog } = useDialogContext()

  const alert = useCallback(async (
    message: string, 
    options: UseAlertOptions = {}
  ): Promise<void> => {
    await showDialog(
      <Alert
        message={message}
        variant={options.variant}
        title={options.title}
        confirmText={options.confirmText}
        open={true}
      />
    )
  }, [showDialog])

  return { alert }
}