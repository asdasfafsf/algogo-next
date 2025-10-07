import { useAlert } from './useAlert'
import { useConfirm } from './useConfirm'
import { usePrompt } from './usePrompt'

export function useModals() {
  const { alert } = useAlert()
  const { confirm } = useConfirm()
  const { prompt } = usePrompt()

  return {
    alert,
    confirm,
    prompt
  }
}

// 개별 hook들도 export
export { useAlert } from './useAlert'
export { useConfirm } from './useConfirm'
export { usePrompt } from './usePrompt'