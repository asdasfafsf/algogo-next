import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Chip } from '@/components/ui/Chip'
import { User, Star, Tag, Plus, Heart } from 'lucide-react'
import { useState } from 'react'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '다양한 용도로 사용할 수 있는 Chip 컴포넌트입니다. 태그, 필터, 상태 표시 등에 활용할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'soft', 'soft-outlined'],
      description: 'Chip의 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Chip의 크기',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default', 'gray', 'blue', 'purple', 'green', 'amber', 'red', 'rose', 'emerald', 'indigo', 'teal', 'orange', 'cyan', 'lime', 'pink', 'yellow',
        'kakao', 'ruby', 'diamond', 'platinum', 'gold', 'silver', 'bronze'
      ],
      description: 'Chip의 색상 테마',
    },
    rounded: {
      control: { type: 'select' },
      options: ['full', 'lg', 'md', 'sm', 'none'],
      description: 'Chip의 모서리 둥글기',
    },
    deletable: {
      control: 'boolean',
      description: '삭제 버튼 표시 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

// 기본 사용법
export const Default: Story = {
  args: {
    children: 'Default Chip',
  },
}

// 크기 변형
export const Sizes: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Chip size="small">Small</Chip>
      <Chip size="medium">Medium</Chip>
      <Chip size="large">Large</Chip>
    </div>
  ),
}

// 색상 변형 (Filled)
export const FilledColors: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip color="default">Default</Chip>
      <Chip color="blue">Blue</Chip>
      <Chip color="purple">Purple</Chip>
      <Chip color="green">Green</Chip>
      <Chip color="amber">Amber</Chip>
      <Chip color="red">Red</Chip>
      <Chip color="orange">Orange</Chip>
    </div>
  ),
}

// Outlined 변형
export const OutlinedColors: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip variant="outlined" color="default">Default</Chip>
      <Chip variant="outlined" color="blue">Blue</Chip>
      <Chip variant="outlined" color="purple">Purple</Chip>
      <Chip variant="outlined" color="green">Green</Chip>
      <Chip variant="outlined" color="amber">Amber</Chip>
      <Chip variant="outlined" color="red">Red</Chip>
      <Chip variant="outlined" color="orange">Orange</Chip>
    </div>
  ),
}

// Soft 변형
export const SoftColors: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip variant="soft" color="default">Default</Chip>
      <Chip variant="soft" color="blue">Blue</Chip>
      <Chip variant="soft" color="purple">Purple</Chip>
      <Chip variant="soft" color="green">Green</Chip>
      <Chip variant="soft" color="amber">Amber</Chip>
      <Chip variant="soft" color="red">Red</Chip>
      <Chip variant="soft" color="orange">Orange</Chip>
    </div>
  ),
}

// Soft + Outlined 변형
export const SoftOutlinedColors: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip variant="soft-outlined" color="default">Default</Chip>
      <Chip variant="soft-outlined" color="blue">Blue</Chip>
      <Chip variant="soft-outlined" color="purple">Purple</Chip>
      <Chip variant="soft-outlined" color="green">Green</Chip>
      <Chip variant="soft-outlined" color="amber">Amber</Chip>
      <Chip variant="soft-outlined" color="red">Red</Chip>
      <Chip variant="soft-outlined" color="orange">Orange</Chip>
    </div>
  ),
}

// 아이콘과 함께
export const WithIcons: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip startIcon={<User />} color="blue">사용자</Chip>
      <Chip startIcon={<Star />} color="amber">즐겨찾기</Chip>
      <Chip startIcon={<Tag />} color="purple">태그</Chip>
      <Chip endIcon={<Plus />} color="green">추가</Chip>
      <Chip startIcon={<Heart />} endIcon={<Star />} color="red">좋아요</Chip>
    </div>
  ),
}

// 삭제 가능한 Chip
export const Deletable: Story = {
  args: {
    children: 'Chip'
  },
  render: () => {
    const [chips, setChips] = useState([
      { id: 1, label: 'React', color: 'blue' as const },
      { id: 2, label: 'TypeScript', color: 'purple' as const },
      { id: 3, label: 'Next.js', color: 'green' as const },
      { id: 4, label: 'Tailwind', color: 'cyan' as const },
    ])

    const handleDelete = (id: number) => {
      setChips(chips.filter(chip => chip.id !== id))
    }

    return (
      <div className="flex flex-wrap gap-3">
        {chips.map(chip => (
          <Chip
            key={chip.id}
            color={chip.color}
            deletable
            onDelete={() => handleDelete(chip.id)}
          >
            {chip.label}
          </Chip>
        ))}
      </div>
    )
  },
}

// 클릭 가능한 Chip
export const Clickable: Story = {
  args: {
    children: 'Chip'
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    const toggleSelection = (value: string) => {
      setSelected(prev => 
        prev.includes(value) 
          ? prev.filter(item => item !== value)
          : [...prev, value]
      )
    }

    const categories = ['JavaScript', 'React', 'Vue', 'Angular', 'Svelte']

    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">클릭해서 선택/해제하세요</p>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <Chip
              key={category}
              variant={selected.includes(category) ? 'filled' : 'outlined'}
              color={selected.includes(category) ? 'blue' : 'default'}
              onClick={() => toggleSelection(category)}
            >
              {category}
            </Chip>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          선택된 항목: {selected.length > 0 ? selected.join(', ') : '없음'}
        </p>
      </div>
    )
  },
}

// 비활성화 상태
export const Disabled: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Chip disabled>비활성화</Chip>
      <Chip color="blue" disabled>Blue 비활성화</Chip>
      <Chip variant="outlined" color="purple" disabled>Outlined 비활성화</Chip>
      <Chip deletable disabled onDelete={() => {}}>삭제 불가</Chip>
    </div>
  ),
}

// 브랜드 & 등급 색상
export const BrandAndRankColors: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">브랜드 & 등급 색상</h3>
      <div className="flex flex-wrap gap-3">
        <Chip color="kakao">Kakao</Chip>
        <Chip color="ruby">Ruby</Chip>
        <Chip color="diamond">Diamond</Chip>
        <Chip color="platinum">Platinum</Chip>
        <Chip color="gold">Gold</Chip>
        <Chip color="silver">Silver</Chip>
        <Chip color="bronze">Bronze</Chip>
      </div>
    </div>
  ),
}

// Material Design 색상들
export const MaterialDesignColors: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Material Design 색상</h3>
      <div className="flex flex-wrap gap-2">
        <Chip color="gray">Gray</Chip>
        <Chip color="blue">Blue</Chip>
        <Chip color="purple">Purple</Chip>
        <Chip color="green">Green</Chip>
        <Chip color="amber">Amber</Chip>
        <Chip color="red">Red</Chip>
        <Chip color="rose">Rose</Chip>
        <Chip color="emerald">Emerald</Chip>
        <Chip color="indigo">Indigo</Chip>
        <Chip color="teal">Teal</Chip>
        <Chip color="orange">Orange</Chip>
        <Chip color="cyan">Cyan</Chip>
        <Chip color="lime">Lime</Chip>
        <Chip color="pink">Pink</Chip>
        <Chip color="yellow">Yellow</Chip>
      </div>
    </div>
  ),
}

// Rounded 변형
export const RoundedVariants: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">모서리 둥글기 변형</h3>
      <div className="flex flex-wrap gap-3">
        <Chip rounded="full" color="blue">Rounded Full</Chip>
        <Chip rounded="lg" color="purple">Rounded LG</Chip>
        <Chip rounded="md" color="green">Rounded MD</Chip>
        <Chip rounded="sm" color="amber">Rounded SM</Chip>
        <Chip rounded="none" color="red">No Rounded</Chip>
      </div>
    </div>
  ),
}

// 실제 사용 예시
export const RealWorldExample: Story = {
  args: {
    children: 'Chip'
  },
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">난이도</h3>
        <div className="flex gap-2">
          <Chip variant="soft" color="green" size="small">Easy</Chip>
          <Chip variant="soft" color="amber" size="small">Medium</Chip>
          <Chip variant="soft" color="red" size="small">Hard</Chip>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">사용자 등급</h3>
        <div className="flex flex-wrap gap-2">
          <Chip variant="soft-outlined" color="bronze" size="small">Bronze</Chip>
          <Chip variant="soft-outlined" color="silver" size="small">Silver</Chip>
          <Chip variant="soft-outlined" color="gold" size="small">Gold</Chip>
          <Chip variant="soft-outlined" color="platinum" size="small">Platinum</Chip>
          <Chip variant="soft-outlined" color="diamond" size="small">Diamond</Chip>
          <Chip variant="soft-outlined" color="ruby" size="small">Ruby</Chip>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">알고리즘 유형</h3>
        <div className="flex flex-wrap gap-2">
          <Chip variant="outlined" color="blue" deletable onDelete={() => {}}>배열</Chip>
          <Chip variant="outlined" color="purple" deletable onDelete={() => {}}>동적 프로그래밍</Chip>
          <Chip variant="outlined" color="emerald" deletable onDelete={() => {}}>그래프</Chip>
          <Chip variant="outlined" color="orange" deletable onDelete={() => {}}>트리</Chip>
          <Chip variant="outlined" color="rose" deletable onDelete={() => {}}>문자열</Chip>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">상태</h3>
        <div className="flex gap-2">
          <Chip color="emerald" startIcon={<Star />}>맞힌 문제</Chip>
          <Chip color="rose" startIcon={<Tag />}>틀린 문제</Chip>
          <Chip color="indigo" startIcon={<User />}>안 푼 문제</Chip>
        </div>
      </div>
    </div>
  ),
}