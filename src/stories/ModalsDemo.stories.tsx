import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '@/components/ui/Button'
import { DialogProvider, useModals } from '@/contexts'

const meta = {
  title: 'Components/Modal/ModalsDemo',
  component: DialogProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogProvider>

export default meta
type Story = StoryObj<typeof meta>

function ModalsExample() {
  const { alert, confirm, prompt } = useModals()

  const handleAlert = async () => {
    await alert('이것은 새로운 Alert 시스템입니다!', {
      variant: 'success',
      title: '성공'
    })
  }

  const handleConfirm = async () => {
    const result = await confirm('정말로 삭제하시겠습니까?', {
      variant: 'error',
      confirmText: '삭제',
      cancelText: '취소'
    })
    
    if (result) {
      await alert('삭제가 완료되었습니다.', { variant: 'success' })
    } else {
      await alert('삭제가 취소되었습니다.', { variant: 'info' })
    }
  }

  const handlePrompt = async () => {
    const name = await prompt('이름을 입력해주세요.', {
      placeholder: '홍길동',
      variant: 'info'
    })
    
    if (name) {
      await alert(`안녕하세요, ${name}님!`, { variant: 'success' })
    }
  }

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-xl font-semibold mb-4">새로운 Modal 시스템</h2>
      
      <div className="space-y-3">
        <Button onClick={handleAlert} color="green" className="w-full">
          Alert 테스트
        </Button>
        
        <Button onClick={handleConfirm} color="red" className="w-full">
          Confirm 테스트
        </Button>
        
        <Button onClick={handlePrompt} color="blue" className="w-full">
          Prompt 테스트
        </Button>
      </div>
    </div>
  )
}

export const NewModalSystem: Story = {
  render: () => (
    <DialogProvider>
      <ModalsExample />
    </DialogProvider>
  ),
}