import { useCallback } from 'react'
import { TestCaseModal } from '@/components/modal/TestCaseModal'
import { TestCase } from '@/types/testcase.type'
import { useDialogContext } from '../DialogContext'

interface UseTestCaseModalOptions {
  onTestCasesChange?: (testCases: TestCase[]) => void
}

export function useTestCase() {
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

  return { openTestCaseModal } as const
}