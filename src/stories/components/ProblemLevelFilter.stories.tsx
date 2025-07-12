import type { Meta, StoryObj } from '@storybook/nextjs'
import { ProblemLevelFilter } from '@/domains/problem/components/ProblemLevelFilter'
import { useState } from 'react'

const meta: Meta<typeof ProblemLevelFilter> = {
  title: 'Domains/Problem/ProblemLevelFilter',
  component: ProblemLevelFilter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '백준 문제 레벨을 다중 선택할 수 있는 칩 기반 필터 컴포넌트입니다. 드롭다운을 열면 티어별로 그룹화된 레벨 칩들이 표시되고, 확인 버튼을 눌러야 선택이 적용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectedLevels: {
      control: 'object',
      description: '선택된 레벨 값들의 배열 (0-30)',
    },
    onLevelsChange: {
      action: 'levelsChanged',
      description: '선택된 레벨이 변경될 때 호출되는 콜백',
    },
    placeholder: {
      control: 'text',
      description: '아무것도 선택되지 않았을 때 표시되는 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '레벨 선택',
  },
}

export const WithSelectedLevels: Story = {
  args: {
    selectedLevels: [5, 10, 15], // 브론즈1, 실버1, 골드1
    placeholder: '레벨 선택',
  },
}

export const ManySelected: Story = {
  args: {
    selectedLevels: [1, 2, 3, 6, 7, 8, 11, 12, 16, 21, 26], // 다양한 티어
    placeholder: '레벨 선택',
  },
}

export const Disabled: Story = {
  args: {
    selectedLevels: [10, 15],
    disabled: true,
    placeholder: '레벨 선택',
  },
}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: '문제 레벨을 선택하세요',
  },
}

function ControlledExample() {
  const [selectedLevels, setSelectedLevels] = useState<number[]>([])

  return (
    <div className="space-y-4">
      <ProblemLevelFilter
        selectedLevels={selectedLevels}
        onLevelsChange={setSelectedLevels}
        placeholder="레벨을 선택하세요"
      />
      <div className="text-sm text-gray-600 max-w-md">
        <div className="font-medium mb-1">선택된 레벨:</div>
        {selectedLevels.length > 0 ? (
          <div className="space-y-1">
            {selectedLevels.sort((a, b) => a - b).map(level => {
              const getLevelLabel = (value: number) => {
                if (value === 0) return "알 수 없음"
                if (value <= 5) return `브론즈 ${6 - value}`
                if (value <= 10) return `실버 ${11 - value}`
                if (value <= 15) return `골드 ${16 - value}`
                if (value <= 20) return `플래티넘 ${21 - value}`
                if (value <= 25) return `다이아몬드 ${26 - value}`
                return `루비 ${31 - value}`
              }
              
              return (
                <div key={level} className="text-xs">
                  • {getLevelLabel(level)} (값: {level})
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-gray-400">없음</div>
        )}
      </div>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: '상태를 제어하는 예제입니다. 선택된 레벨들이 아래에 표시됩니다.',
      },
    },
  },
}

function FilterFormExample() {
  const [levels, setLevels] = useState<number[]>([])
  const [problemType, setProblemType] = useState('')
  const [status, setStatus] = useState('')

  const handleReset = () => {
    setLevels([])
    setProblemType('')
    setStatus('')
  }

  return (
    <div className="space-y-6 p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold">문제 필터</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">레벨</label>
          <ProblemLevelFilter
            selectedLevels={levels}
            onLevelsChange={setLevels}
            placeholder="레벨 선택"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">문제 유형</label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            value={problemType}
            onChange={(e) => setProblemType(e.target.value)}
          >
            <option value="">유형 선택</option>
            <option value="dp">다이나믹 프로그래밍</option>
            <option value="graph">그래프</option>
            <option value="greedy">그리디</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">해결 상태</label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">상태 선택</option>
            <option value="solved">해결됨</option>
            <option value="attempted">시도함</option>
            <option value="unsolved">미해결</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 underline"
        >
          필터 초기화
        </button>
        
        <div className="text-sm text-gray-600">
          선택된 필터: 레벨 {levels.length}개
          {problemType && ', 유형 1개'}
          {status && ', 상태 1개'}
        </div>
      </div>
    </div>
  )
}

export const InFilterForm: Story = {
  render: () => <FilterFormExample />,
  parameters: {
    docs: {
      description: {
        story: '실제 필터 폼에서 사용하는 예제입니다. 다른 필터들과 함께 사용되는 모습을 보여줍니다.',
      },
    },
  },
}