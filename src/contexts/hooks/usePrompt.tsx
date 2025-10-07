import { useCallback } from 'react'
import { Prompt, type PromptVariant } from '@/components/modal/Prompt'
import { useDialogContext } from '../DialogContext'

interface UsePromptOptions {
  variant?: PromptVariant
  title?: string
  confirmText?: string
  cancelText?: string
  placeholder?: string
  defaultValue?: string
}

export function usePrompt() {
  const { showDialog } = useDialogContext()

  const prompt = useCallback(async (
    content: string, 
    options: UsePromptOptions = {}
  ): Promise<string | null> => {
    const result = await showDialog(
      <Prompt
        content={content}
        variant={options.variant}
        title={options.title}
        confirmText={options.confirmText}
        cancelText={options.cancelText}
        placeholder={options.placeholder}
        defaultValue={options.defaultValue}
        open={true}
      />
    )
    
    // Convert DialogContext result to string | null
    return typeof result === 'string' ? result : null
  }, [showDialog])

  return { prompt }
}