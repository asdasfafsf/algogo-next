import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProblemTrainingCard } from '@/domains/problem/components/ProblemTrainingCard'
import { Zap, BookOpen, Settings } from 'lucide-react'

const meta = {
  title: 'Domains/Problem/TrainingCard',
  component: ProblemTrainingCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '오늘의 문제, 유형별 문제로 이동하는 네비게이션 카드 컴포넌트입니다. 다양한 색상과 상태를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['blue', 'purple', 'gray'],
      description: '카드의 컬러 테마',
    },
    status: {
      control: { type: 'select' },
      options: ['active', 'coming-soon'],
      description: '카드의 활성화 상태',
    },
    title: {
      control: 'text',
      description: '카드의 제목',
    },
    description: {
      control: 'text',
      description: '카드의 설명',
    },
  },
} satisfies Meta<typeof ProblemTrainingCard>

export default meta
type Story = StoryObj<typeof meta>

// 기본 활성 상태 카드
export const Default: Story = {
  args: {
    title: '오늘의 문제',
    description: '매일 업데이트되는 추천 문제를 풀어보세요',
    icon: <Zap size={32} />,
    color: 'blue',
    status: 'active',
  },
}

// 보라색 테마 카드
export const Purple: Story = {
  args: {
    title: '유형별 문제',
    description: '알고리즘 유형별로 분류된 문제들을 연습하세요',
    icon: <BookOpen size={32} />,
    color: 'purple',
    status: 'active',
  },
}

// 준비중 상태 카드
export const ComingSoon: Story = {
  args: {
    title: '특별 훈련',
    description: '고급 알고리즘 훈련 과정이 곧 출시됩니다',
    icon: <Settings size={32} />,
    color: 'gray',
    status: 'coming-soon',
  },
}

// 모든 색상 변형 표시
export const AllColors: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">모든 색상 변형</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <ProblemTrainingCard
          title="오늘의 문제"
          description="매일 업데이트되는 추천 문제를 풀어보세요"
          icon={<Zap size={32} />}
          color="blue"
          status="active"
        />
        <ProblemTrainingCard
          title="유형별 문제"
          description="알고리즘 유형별로 분류된 문제들을 연습하세요"
          icon={<BookOpen size={32} />}
          color="purple"
          status="active"
        />
        <ProblemTrainingCard
          title="특별 훈련"
          description="고급 알고리즘 훈련 과정이 곧 출시됩니다"
          icon={<Settings size={32} />}
          color="gray"
          status="coming-soon"
        />
      </div>
    </div>
  ),
  args: {
    title: '오늘의 문제',
    description: '매일 업데이트되는 추천 문제를 풀어보세요',
    icon: <Zap size={32} />,
    color: 'blue',
    status: 'active',
  },
}

// 상태별 비교
export const StatusComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">상태별 비교</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="text-md font-medium mb-3 text-gray-700">활성 상태</h4>
          <ProblemTrainingCard
            title="활성 카드"
            description="클릭 가능한 상태입니다"
            icon={<Zap size={32} />}
            color="blue"
            status="active"
          />
        </div>
        <div>
          <h4 className="text-md font-medium mb-3 text-gray-700">준비중 상태</h4>
          <ProblemTrainingCard
            title="준비중 카드"
            description="아직 사용할 수 없습니다"
            icon={<Settings size={32} />}
            color="gray"
            status="coming-soon"
          />
        </div>
      </div>
    </div>
  ),
  args: {
    title: '활성 카드',
    description: '클릭 가능한 상태입니다',
    icon: <Zap size={32} />,
    color: 'blue',
    status: 'active',
  },
}

// 반응형 레이아웃 예시
export const ResponsiveLayout: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">반응형 레이아웃</h3>
      <p className="text-sm text-gray-600">화면 크기를 조절해서 반응형 동작을 확인해보세요.</p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProblemTrainingCard
          title="기초 알고리즘"
          description="프로그래밍 기초를 다지는 알고리즘 문제들"
          icon={<Zap size={32} />}
          color="blue"
          status="active"
        />
        <ProblemTrainingCard
          title="중급 알고리즘"
          description="한 단계 높은 수준의 알고리즘 문제들"
          icon={<BookOpen size={32} />}
          color="purple"
          status="active"
        />
        <ProblemTrainingCard
          title="고급 알고리즘"
          description="전문가 수준의 복잡한 알고리즘 문제들"
          icon={<Settings size={32} />}
          color="gray"
          status="coming-soon"
        />
      </div>
    </div>
  ),
  args: {
    title: '기초 알고리즘',
    description: '프로그래밍 기초를 다지는 알고리즘 문제들',
    icon: <Zap size={32} />,
    color: 'blue',
    status: 'active',
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}