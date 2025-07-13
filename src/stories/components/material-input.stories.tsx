import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MaterialInput } from '@/components/ui/MaterialInput'
import { Search, Lock, Mail, User, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const meta = {
  title: 'Components/MaterialInput',
  component: MaterialInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Google Material Design 스타일의 입력 컴포넌트입니다. Floating label과 다양한 스타일 변형을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled'],
      description: '입력 필드의 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '입력 필드의 크기',
    },
    label: {
      control: 'text',
      description: 'Floating label 텍스트',
    },
    error: {
      control: 'text',
      description: '에러 메시지',
    },
    helperText: {
      control: 'text',
      description: '도움말 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof MaterialInput>

export default meta
type Story = StoryObj<typeof meta>

// 기본 사용법
export const Default: Story = {
  args: {
    label: '이메일 주소',
    placeholder: 'example@email.com',
  },
}

// Filled 변형
export const Filled: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    variant: 'filled',
  },
}

// 크기 변형
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <MaterialInput
        label="작은 크기"
        size="small"
        placeholder="Small input"
      />
      <MaterialInput
        label="중간 크기"
        size="medium"
        placeholder="Medium input"
      />
      <MaterialInput
        label="큰 크기"
        size="large"
        placeholder="Large input"
      />
    </div>
  ),
}

// 아이콘과 함께
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <MaterialInput
        label="검색"
        startIcon={<Search size={20} />}
        placeholder="검색어를 입력하세요"
      />
      <MaterialInput
        label="이메일"
        startIcon={<Mail size={20} />}
        placeholder="이메일을 입력하세요"
      />
      <MaterialInput
        label="사용자명"
        startIcon={<User size={20} />}
        endIcon={<Search size={20} />}
        placeholder="사용자명을 입력하세요"
      />
    </div>
  ),
}

// 에러 상태
export const WithError: Story = {
  render: () => (
    <div className="space-y-6">
      <MaterialInput
        label="이메일"
        value="invalid-email"
        error="올바른 이메일 형식이 아닙니다"
        startIcon={<Mail size={20} />}
      />
      <MaterialInput
        label="비밀번호"
        type="password"
        variant="filled"
        error="비밀번호는 8자 이상이어야 합니다"
        startIcon={<Lock size={20} />}
      />
    </div>
  ),
}

// 도움말 텍스트
export const WithHelperText: Story = {
  render: () => (
    <div className="space-y-6">
      <MaterialInput
        label="사용자명"
        helperText="3-20자의 영문, 숫자, 언더스코어만 사용 가능합니다"
        startIcon={<User size={20} />}
      />
      <MaterialInput
        label="비밀번호"
        type="password"
        variant="filled"
        helperText="대소문자, 숫자, 특수문자를 포함해야 합니다"
        startIcon={<Lock size={20} />}
      />
    </div>
  ),
}

// 비활성화 상태
export const Disabled: Story = {
  render: () => (
    <div className="space-y-6">
      <MaterialInput
        label="비활성화된 입력"
        value="편집할 수 없습니다"
        disabled
      />
      <MaterialInput
        label="비활성화된 입력 (Filled)"
        variant="filled"
        value="편집할 수 없습니다"
        disabled
      />
    </div>
  ),
}

// 비밀번호 토글 예시
export const PasswordToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
      <MaterialInput
        label="비밀번호"
        type={showPassword ? 'text' : 'password'}
        startIcon={<Lock size={20} />}
        endIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        }
        placeholder="비밀번호를 입력하세요"
      />
    )
  },
}

// 모든 변형 비교
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Outlined</h3>
        <MaterialInput
          label="기본"
          placeholder="텍스트를 입력하세요"
        />
        <MaterialInput
          label="아이콘 포함"
          startIcon={<Search size={20} />}
          placeholder="검색어를 입력하세요"
        />
        <MaterialInput
          label="에러 상태"
          error="에러 메시지입니다"
          value="잘못된 값"
        />
      </div>
      
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Filled</h3>
        <MaterialInput
          variant="filled"
          label="기본"
          placeholder="텍스트를 입력하세요"
        />
        <MaterialInput
          variant="filled"
          label="아이콘 포함"
          startIcon={<Search size={20} />}
          placeholder="검색어를 입력하세요"
        />
        <MaterialInput
          variant="filled"
          label="에러 상태"
          error="에러 메시지입니다"
          value="잘못된 값"
        />
      </div>
    </div>
  ),
}