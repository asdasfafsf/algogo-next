import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof Input> = {
  title: 'UI Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'search', 'number', 'file'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 기본 인풋
export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
}

// 다양한 타입들
export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div>
        <label className="text-sm font-medium">텍스트</label>
        <Input type="text" placeholder="이름을 입력하세요" />
      </div>
      <div>
        <label className="text-sm font-medium">이메일</label>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div>
        <label className="text-sm font-medium">비밀번호</label>
        <Input type="password" placeholder="비밀번호" />
      </div>
      <div>
        <label className="text-sm font-medium">검색</label>
        <Input type="search" placeholder="검색어를 입력하세요" />
      </div>
      <div>
        <label className="text-sm font-medium">숫자</label>
        <Input type="number" placeholder="숫자를 입력하세요" />
      </div>
      <div>
        <label className="text-sm font-medium">파일</label>
        <Input type="file" />
      </div>
    </div>
  ),
}

// 아이콘이 포함된 인풋
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input className="pl-10" placeholder="검색..." />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input className="pl-10" type="email" placeholder="이메일 주소" />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input className="pl-10" type="password" placeholder="비밀번호" />
      </div>
    </div>
  ),
}

// 비밀번호 토글 예시
export const PasswordToggle: Story = {
  render: () => {
    const PasswordInput = () => {
      const [showPassword, setShowPassword] = useState(false)
      
      return (
        <div className="relative w-[300px]">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력하세요"
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full w-10 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      )
    }
    
    return <PasswordInput />
  },
}

// 상태들
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div>
        <label className="text-sm font-medium">기본</label>
        <Input placeholder="기본 상태" />
      </div>
      <div>
        <label className="text-sm font-medium">포커스</label>
        <Input placeholder="포커스 상태" autoFocus />
      </div>
      <div>
        <label className="text-sm font-medium">비활성화</label>
        <Input placeholder="비활성화 상태" disabled />
      </div>
      <div>
        <label className="text-sm font-medium">값이 있는 상태</label>
        <Input defaultValue="입력된 값" />
      </div>
      <div>
        <label className="text-sm font-medium">에러 상태</label>
        <Input 
          placeholder="에러 상태" 
          aria-invalid="true"
          className="border-destructive"
        />
        <p className="text-sm text-destructive mt-1">올바른 이메일을 입력해주세요.</p>
      </div>
    </div>
  ),
}

// 폼 예시
export const FormExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">로그인</h3>
        <p className="text-sm text-muted-foreground">계정에 로그인하세요</p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">이메일</label>
          <Input type="email" placeholder="이메일을 입력하세요" />
        </div>
        <div>
          <label className="text-sm font-medium">비밀번호</label>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <Button className="w-full">로그인</Button>
      </div>
    </div>
  ),
} 