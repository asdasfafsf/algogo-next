import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '@/components/ui/Button'
import { DialogProvider, useTestCaseModal } from '@/contexts'
import { TestCase } from '@/types/testcase.type'

const meta = {
  title: 'Components/Modal/TestCaseModalDemo',
  component: DialogProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogProvider>

export default meta
type Story = StoryObj<typeof meta>

const sampleTestCases: TestCase[] = [
  {
    input: '1 2',
    output: '',
    expected: '3',
    state: '실행 전',
  },
  {
    input: '5 7',
    output: '',
    expected: '12', 
    state: '실행 전',
  },
  {
    input: '10 20',
    output: '',
    expected: '30',
    state: '실행 전',
    readOnly: true,
  }
]

function TestCaseModalExample() {
  const { openTestCaseModal } = useTestCaseModal()

  const handleOpenModal = async () => {
    const result = await openTestCaseModal(sampleTestCases, {
      onTestCasesChange: (testCases) => {
        console.log('Test cases changed:', testCases)
      }
    })
    
    if (result) {
      console.log('Modal closed with result:', result)
    } else {
      console.log('Modal was cancelled')
    }
  }

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-xl font-semibold mb-4">TestCase Modal Demo</h2>
      
      <div className="space-y-3">
        <Button onClick={handleOpenModal} color="blue" className="w-full">
          테스트 케이스 편집 열기
        </Button>
      </div>
      
      <div className="text-sm text-gray-600 space-y-1">
        <p>• 새로운 Dialog 시스템을 사용하는 TestCase Modal</p>
        <p>• ESC 키로 닫기 지원</p>
        <p>• Promise 기반 결과 반환</p>
        <p>• 읽기 전용 테스트 케이스 포함 예제</p>
      </div>
    </div>
  )
}

export const TestCaseModalDemo: Story = {
  render: () => (
    <DialogProvider>
      <TestCaseModalExample />
    </DialogProvider>
  ),
}