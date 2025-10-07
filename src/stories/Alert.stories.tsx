import type { Meta, StoryObj } from '@storybook/react'
import { Alert, type AlertVariant } from '@/components/modal/Alert'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const meta = {
  title: 'Components/Modal/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    open: false,
    message: '기본 알림 메시지입니다.',
    variant: 'info',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success'],
    },
    message: {
      control: { type: 'text' },
    },
    open: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// Helper component to show Alert in a dialog
function AlertInDialog({ message, variant }: { message: string; variant?: AlertVariant }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      <Alert 
        message={message}
        variant={variant}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export const Info: Story = {
  args: {
    message: '기본 정보 알림입니다.',
    variant: 'info',
  },
  render: (args) => <AlertInDialog {...args} />,
}

export const Success: Story = {
  args: {
    message: '작업이 성공적으로 완료되었습니다!',
    variant: 'success',
  },
  render: (args) => <AlertInDialog {...args} />,
}

export const Warning: Story = {
  args: {
    message: '주의가 필요한 상황입니다. 계속 진행하시겠습니까?',
    variant: 'warning',
  },
  render: (args) => <AlertInDialog {...args} />,
}

export const Error: Story = {
  args: {
    message: '오류가 발생했습니다. 다시 시도해주세요.',
    variant: 'error',
  },
  render: (args) => <AlertInDialog {...args} />,
}

export const LongMessage: Story = {
  args: {
    message: '이것은 매우 긴 메시지입니다. 사용자에게 상세한 정보를 제공해야 할 때 사용할 수 있습니다. 메시지가 길어져도 적절하게 줄바꿈이 되고 읽기 쉽게 표시됩니다.',
    variant: 'info',
  },
  render: (args) => <AlertInDialog {...args} />,
}

// Show all variants in a grid for comparison
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <AlertInDialog message="기본 정보 알림입니다." variant="info" />
      <AlertInDialog message="작업이 성공적으로 완료되었습니다!" variant="success" />
      <AlertInDialog message="주의가 필요한 상황입니다." variant="warning" />
      <AlertInDialog message="오류가 발생했습니다." variant="error" />
    </div>
  ),
}

// Static view without dialog wrapper for design inspection
export const StaticView: Story = {
  args: {
    message: '이것은 다이얼로그 없이 Alert 컴포넌트만 보여주는 예시입니다.',
    variant: 'info',
  },
  render: (args) => (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <Alert {...args} open={true} onClose={() => {}} />
    </div>
  ),
}

export const StaticVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Alert message="기본 정보 알림입니다." variant="info" open={false} onClose={() => {}} />
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Alert message="작업이 성공적으로 완료되었습니다!" variant="success" open={false} onClose={() => {}} />
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Alert message="주의가 필요한 상황입니다." variant="warning" open={false} onClose={() => {}} />
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Alert message="오류가 발생했습니다." variant="error" open={false} onClose={() => {}} />
      </div>
    </div>
  ),
}


// Simple interactive demo
export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-6 max-w-xl mx-auto p-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Interactive Alert Demo</h2>
        <div className="space-y-4">
          <AlertInDialog message="기본 정보 알림입니다." variant="info" />
          <AlertInDialog message="작업이 성공적으로 완료되었습니다!" variant="success" />
          <AlertInDialog message="주의가 필요한 상황입니다." variant="warning" />
          <AlertInDialog message="오류가 발생했습니다." variant="error" />
        </div>
      </div>
    </div>
  ),
}