import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Prompt, type PromptVariant } from '@/components/modal/Prompt'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const meta = {
  title: 'Components/Modal/Prompt',
  component: Prompt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    open: false,
    content: '이름을 입력해주세요.',
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
} satisfies Meta<typeof Prompt>

export default meta
type Story = StoryObj<typeof meta>

// Helper component to show Prompt with buttons
function PromptDemo({ 
  content, 
  variant, 
  placeholder, 
  defaultValue = '' 
}: { 
  content: string
  variant?: PromptVariant
  placeholder?: string
  defaultValue?: string
}) {
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState<string>('')

  const handleConfirm = (value: string) => {
    setResult(`입력값: ${value}`)
    setOpen(false)
  }

  const handleCancel = () => {
    setResult('취소됨')
    setOpen(false)
  }

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Open Prompt</Button>
      {result && (
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm">
          {result}
        </div>
      )}
      <Prompt 
        content={content}
        variant={variant}
        placeholder={placeholder}
        defaultValue={defaultValue}
        open={open}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  )
}

export const Info: Story = {
  args: {
    content: '이름을 입력해주세요.',
    variant: 'info',
    placeholder: '홍길동',
  },
  render: (args) => <PromptDemo {...args} />,
}

export const Success: Story = {
  args: {
    content: '새 파일명을 입력해주세요.',
    variant: 'success',
    placeholder: 'untitled.txt',
  },
  render: (args) => <PromptDemo {...args} />,
}

export const Warning: Story = {
  args: {
    content: '비밀번호를 입력해주세요.',
    variant: 'warning',
    placeholder: '비밀번호',
  },
  render: (args) => <PromptDemo {...args} />,
}

export const Error: Story = {
  args: {
    content: '삭제하려면 "DELETE"를 입력하세요.',
    variant: 'error',
    placeholder: 'DELETE',
  },
  render: (args) => <PromptDemo {...args} />,
}

export const WithDefaultValue: Story = {
  args: {
    content: '제목을 수정해주세요.',
    variant: 'info',
    defaultValue: '기존 제목',
    placeholder: '새 제목',
  },
  render: (args) => <PromptDemo {...args} />,
}

export const CustomTexts: Story = {
  args: {
    content: '태그를 입력해주세요.',
    variant: 'info',
    confirmText: '추가',
    cancelText: '닫기',
    placeholder: '태그명',
  },
  render: (args) => <PromptDemo {...args} />,
}

// Show all variants in a grid for comparison
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <PromptDemo content="이름을 입력해주세요." variant="info" placeholder="홍길동" />
      <PromptDemo content="파일명을 입력해주세요." variant="success" placeholder="file.txt" />
      <PromptDemo content="비밀번호를 입력해주세요." variant="warning" placeholder="비밀번호" />
      <PromptDemo content="삭제하려면 DELETE를 입력하세요." variant="error" placeholder="DELETE" />
    </div>
  ),
}

// Simple interactive demo
export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-6 max-w-xl mx-auto p-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Interactive Prompt Demo</h2>
        <div className="space-y-4">
          <PromptDemo content="이름을 입력해주세요." variant="info" placeholder="홍길동" />
          <PromptDemo content="이메일을 입력해주세요." variant="success" placeholder="user@example.com" />
          <PromptDemo content="비밀번호를 입력해주세요." variant="warning" placeholder="비밀번호" />
          <PromptDemo content="계정을 삭제하려면 DELETE를 입력하세요." variant="error" placeholder="DELETE" />
        </div>
      </div>
    </div>
  ),
}