import { useCallback } from 'react'
import { UpdateCodeTemplateModal } from '@/components/modal/UpdateCodeTemplateModal'
import { UpdateCodeTemplate } from '@/types/code-template.type'
import { useDialogContext } from '../DialogContext'

interface UseUpdateCodeTemplateModalOptions {
  onSave?: (template: UpdateCodeTemplate) => void
  onDelete?: (uuid: string) => void
}

export function useUpdateCodeTemplateModal() {
  const { showDialog } = useDialogContext()

  const openUpdateCodeTemplateModal = useCallback(async (
    initialTemplate: UpdateCodeTemplate,
    options: UseUpdateCodeTemplateModalOptions = {}
  ): Promise<UpdateCodeTemplate | undefined> => {
    const result = await showDialog(
      <UpdateCodeTemplateModal
        initialTemplate={initialTemplate}
        onSave={options.onSave}
        onDelete={options.onDelete}
        open={true}
      />
    )
    
    // Convert DialogContext result to UpdateCodeTemplate | undefined
    return result && typeof result === 'object' && 'uuid' in result ? result as UpdateCodeTemplate : undefined
  }, [showDialog])

  return { openUpdateCodeTemplateModal }
}