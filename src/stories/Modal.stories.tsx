import type { Meta, StoryObj } from '@storybook/react'
import { useDialog } from '@/contexts/ShadcnDialogContext'
import { Button } from '@/components/ui/Button'

const meta = {
  title: 'Components/Modal',
  component: ModalDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalDemo>

export default meta
type Story = StoryObj<typeof meta>

function ModalDemo() {
  const { alert, confirm, prompt } = useDialog()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Modal Components</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Alert Modals</h3>
          <div className="space-y-2">
            <Button 
              onClick={() => alert('기본 알림 메시지입니다.')}
              variant="outline"
              className="w-full"
            >
              Info Alert
            </Button>
            <Button 
              onClick={() => alert('작업이 성공적으로 완료되었습니다.', { variant: 'success' })}
              color="green"
              className="w-full"
            >
              Success Alert
            </Button>
            <Button 
              onClick={() => alert('주의가 필요한 상황입니다.', { variant: 'warning' })}
              color="yellow"
              className="w-full"
            >
              Warning Alert
            </Button>
            <Button 
              onClick={() => alert('오류가 발생했습니다. 다시 시도해주세요.', { variant: 'error' })}
              color="red"
              className="w-full"
            >
              Error Alert
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Confirm Modals</h3>
          <div className="space-y-2">
            <Button 
              onClick={async () => {
                const result = await confirm('정말로 계속하시겠습니까?')
                alert(`결과: ${result ? '확인' : '취소'}`)
              }}
              variant="outline"
              className="w-full"
            >
              Basic Confirm
            </Button>
            <Button 
              onClick={async () => {
                const result = await confirm('이 작업을 계속하시겠습니까?', { 
                  variant: 'success',
                  confirmText: '계속하기',
                  cancelText: '중단하기'
                })
                alert(`결과: ${result ? '계속하기' : '중단하기'}`)
              }}
              color="green"
              className="w-full"
            >
              Success Confirm
            </Button>
            <Button 
              onClick={async () => {
                const result = await confirm('이 작업은 위험할 수 있습니다.', { 
                  variant: 'warning',
                  confirmText: '계속',
                  cancelText: '취소'
                })
                alert(`결과: ${result ? '계속' : '취소'}`)
              }}
              color="yellow"
              className="w-full"
            >
              Warning Confirm
            </Button>
            <Button 
              onClick={async () => {
                const result = await confirm('이 항목을 삭제하시겠습니까?', { 
                  variant: 'error',
                  confirmText: '삭제',
                  cancelText: '취소'
                })
                alert(`결과: ${result ? '삭제' : '취소'}`)
              }}
              color="red"
              className="w-full"
            >
              Destructive Confirm
            </Button>
          </div>
        </div>

        <div className="space-y-3 md:col-span-2">
          <h3 className="text-lg font-medium">Prompt Modals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Button 
              onClick={async () => {
                const result = await prompt('이름을 입력해주세요:', '', {
                  placeholder: '홍길동'
                })
                if (result) alert(`입력된 이름: ${result}`)
              }}
              variant="outline"
              className="w-full"
            >
              Basic Prompt
            </Button>
            <Button 
              onClick={async () => {
                const result = await prompt('이메일을 입력해주세요:', '', {
                  inputType: 'email',
                  placeholder: 'user@example.com',
                  variant: 'info'
                })
                if (result) alert(`입력된 이메일: ${result}`)
              }}
              color="blue"
              className="w-full"
            >
              Email Prompt
            </Button>
            <Button 
              onClick={async () => {
                const result = await prompt('비밀번호를 입력해주세요:', '', {
                  inputType: 'password',
                  variant: 'warning',
                  placeholder: '비밀번호'
                })
                if (result) alert(`비밀번호가 입력되었습니다 (길이: ${result.length})`)
              }}
              color="yellow"
              className="w-full"
            >
              Password Prompt
            </Button>
            <Button 
              onClick={async () => {
                const result = await prompt('숫자를 입력해주세요:', '0', {
                  inputType: 'number',
                  variant: 'success',
                  placeholder: '1234'
                })
                if (result) alert(`입력된 숫자: ${result}`)
              }}
              color="green"
              className="w-full"
            >
              Number Prompt
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Default: Story = {
  args: {},
}

export const AlertVariants: Story = {
  render: () => {
    const { alert } = useDialog()
    
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Alert Variants</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => alert('기본 알림입니다.')}>
            Info Alert
          </Button>
          <Button 
            onClick={() => alert('성공적으로 완료되었습니다!', { variant: 'success' })}
            color="green"
          >
            Success Alert
          </Button>
          <Button 
            onClick={() => alert('주의가 필요합니다.', { variant: 'warning' })}
            color="yellow"
          >
            Warning Alert
          </Button>
          <Button 
            onClick={() => alert('오류가 발생했습니다.', { variant: 'error' })}
            color="red"
          >
            Error Alert
          </Button>
        </div>
      </div>
    )
  },
}

export const ConfirmVariants: Story = {
  render: () => {
    const { confirm, alert } = useDialog()
    
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Confirm Variants</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={async () => {
              const result = await confirm('계속하시겠습니까?')
              alert(`결과: ${result ? '확인' : '취소'}`)
            }}
            variant="outline"
          >
            Basic Confirm
          </Button>
          <Button 
            onClick={async () => {
              const result = await confirm('삭제하시겠습니까?', { 
                variant: 'error',
                confirmText: '삭제',
                cancelText: '취소'
              })
              alert(`결과: ${result ? '삭제' : '취소'}`)
            }}
            color="red"
          >
            Delete Confirm
          </Button>
        </div>
      </div>
    )
  },
}

export const PromptVariants: Story = {
  render: () => {
    const { prompt, alert } = useDialog()
    
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Prompt Variants</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={async () => {
              const result = await prompt('이름을 입력해주세요:', '')
              if (result) alert(`입력: ${result}`)
            }}
            variant="outline"
          >
            Text Prompt
          </Button>
          <Button 
            onClick={async () => {
              const result = await prompt('이메일을 입력해주세요:', '', {
                inputType: 'email',
                variant: 'info'
              })
              if (result) alert(`이메일: ${result}`)
            }}
            color="blue"
          >
            Email Prompt
          </Button>
        </div>
      </div>
    )
  },
}