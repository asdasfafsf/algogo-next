import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProblemListBanner } from '@/domains/problem/components/ProblemListBanner'

const meta = {
  title: 'Domains/Problem/ProblemListBanner',
  component: ProblemListBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '문제 목록 페이지의 배너 캐러셀입니다. 자동 슬라이드와 계정 연동 서비스 준비중 메시지를 포함합니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProblemListBanner>

export default meta
type Story = StoryObj<typeof meta>

// 기본 히어로 배너
export const Default: Story = {
  render: () => (
    <div className="bg-gray-50 p-8">
      <ProblemListBanner />
    </div>
  ),
}

// 다크 배경에서의 히어로 배너
export const OnDarkBackground: Story = {
  render: () => (
    <div className="bg-gray-900 p-8 min-h-screen">
      <ProblemListBanner />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '어두운 배경에서 문제 목록 배너가 어떻게 보이는지 확인할 수 있습니다.',
      },
    },
  },
}

// 모바일 뷰 시뮬레이션
export const MobileView: Story = {
  render: () => (
    <div className="max-w-sm bg-gray-50 p-4">
      <ProblemListBanner />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: '모바일 화면에서의 반응형 디자인을 확인할 수 있습니다.',
      },
    },
  },
}