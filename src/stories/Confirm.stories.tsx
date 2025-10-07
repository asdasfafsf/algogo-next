import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Confirm, type ConfirmVariant } from '@/components/modal/Confirm'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const meta = {
  title: 'Components/Modal/Confirm',
  component: Confirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    open: false,
    content: '이 작업을 계속하시겠습니까?',
    variant: 'info',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'warning', 'error', 'success'],
    },
    content: {
      control: { type: 'text' },
    },
    open: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Confirm>

export default meta
type Story = StoryObj<typeof meta>

// Helper component to show Confirm with buttons
function ConfirmDemo({ content, variant }: { content: string; variant?: ConfirmVariant }) {
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState<string>('')

  const handleConfirm = () => {
    setResult('확인됨')
    setOpen(false)
  }

  const handleCancel = () => {
    setResult('취소됨')
    setOpen(false)
  }

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Open Confirm</Button>
      {result && (
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm">
          결과: {result}
        </div>
      )}
      <Confirm 
        content={content}
        variant={variant}
        open={open}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  )
}

export const Info: Story = {
  args: {
    content: '계속하시겠습니까?',
    variant: 'info',
  },
  render: (args) => <ConfirmDemo {...args} />,
}

export const Success: Story = {
  args: {
    content: '저장하시겠습니까?',
    variant: 'success',
  },
  render: (args) => <ConfirmDemo {...args} />,
}

export const Warning: Story = {
  args: {
    content: '정말로 삭제하시겠습니까?',
    variant: 'warning',
  },
  render: (args) => <ConfirmDemo {...args} />,
}

export const Error: Story = {
  args: {
    content: '계정을 삭제하시겠습니까?',
    variant: 'error',
  },
  render: (args) => <ConfirmDemo {...args} />,
}

export const CustomTexts: Story = {
  args: {
    content: '로그아웃하시겠습니까?',
    variant: 'info',
    confirmText: '로그아웃',
    cancelText: '취소',
  },
  render: (args) => <ConfirmDemo {...args} />,
}

export const LongMessage: Story = {
  args: {
    content: '이 작업을 수행하면 모든 데이터가 삭제됩니다. 정말로 계속하시겠습니까?',
    variant: 'warning',
  },
  render: (args) => <ConfirmDemo {...args} />,
}

// Show all variants in a grid for comparison
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ConfirmDemo content="계속하시겠습니까?" variant="info" />
      <ConfirmDemo content="저장하시겠습니까?" variant="success" />
      <ConfirmDemo content="정말로 삭제하시겠습니까?" variant="warning" />
      <ConfirmDemo content="계정을 삭제하시겠습니까?" variant="error" />
    </div>
  ),
}

// Static view without dialog wrapper for design inspection
export const StaticView: Story = {
  args: {
    content: '이것은 다이얼로그 없이 Confirm 컴포넌트만 보여주는 예시입니다.',
    variant: 'info',
  },
  render: (args) => <ConfirmDemo {...args} />,
}

export const StaticVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md mx-auto">
      <ConfirmDemo content="계속하시겠습니까?" variant="info" />
      <ConfirmDemo content="저장하시겠습니까?" variant="success" />
      <ConfirmDemo content="정말로 삭제하시겠습니까?" variant="warning" />
      <ConfirmDemo content="계정을 삭제하시겠습니까?" variant="error" />
    </div>
  ),
}

// Simple interactive demo
export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-6 max-w-xl mx-auto p-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Interactive Confirm Demo</h2>
        <div className="space-y-4">
          <ConfirmDemo content="계속하시겠습니까?" variant="info" />
          <ConfirmDemo content="저장하시겠습니까?" variant="success" />
          <ConfirmDemo content="정말로 삭제하시겠습니까?" variant="warning" />
          <ConfirmDemo content="계정을 삭제하시겠습니까?" variant="error" />
        </div>
      </div>
    </div>
  ),
}