import { useCallback } from 'react'
import { CreateCodeTemplateModal } from '@/components/modal/CreateCodeTemplateModal'
import { CreateCodeTemplate } from '@/types/code-template.type'
import { useDialogContext } from '../DialogContext'

interface UseCreateCodeTemplateModalOptions {
  onSave?: (template: CreateCodeTemplate) => void
}

export function useCreateCodeTemplateModal() {
  const { showDialog } = useDialogContext()

  const openCreateCodeTemplateModal = useCallback(async (
    initialTemplate?: CreateCodeTemplate,
    options: UseCreateCodeTemplateModalOptions = {}
  ): Promise<CreateCodeTemplate | undefined> => {
    const result = await showDialog(
      <CreateCodeTemplateModal
        initialTemplate={initialTemplate}
        onSave={options.onSave}
        open={true}
      />
    )
    
    // Convert DialogContext result to CreateCodeTemplate | undefined
    return result && typeof result === 'object' && 'name' in result ? result as CreateCodeTemplate : undefined
  }, [showDialog])

  return { openCreateCodeTemplateModal }
}