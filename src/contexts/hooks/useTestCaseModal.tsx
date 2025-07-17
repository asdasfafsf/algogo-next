import { useCallback } from 'react'
import { TestCaseModal } from '@/components/modal/TestcaseModal'
import { TestCase } from '@/types/testcase.type'
import { useDialogContext } from '../DialogContext'

interface UseTestCaseModalOptions {
  onTestCasesChange?: (testCases: TestCase[]) => void
}

export function useTestCaseModal() {
  const { showDialog } = useDialogContext()

  const openTestCaseModal = useCallback(async (
    testCases: TestCase[], 
    options: UseTestCaseModalOptions = {}
  ): Promise<TestCase[] | undefined> => {
    const result = await showDialog(
      <TestCaseModal
        testCases={testCases}
        onTestCasesChange={options.onTestCasesChange}
        open={true}
      />
    )
    
    // Convert DialogContext result to TestCase[] | undefined
    return Array.isArray(result) ? result : undefined
  }, [showDialog])

  return { openTestCaseModal }
}