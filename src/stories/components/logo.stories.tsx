import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Logo } from '@/components/ui/Logo'
import { LogoWithText } from '@/components/ui/LogoWithText'

const meta: Meta<typeof Logo> = {
  title: 'UI Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'black', 'white', 'green', 'purple', 'red'],
    },
    animate: {
      control: { type: 'boolean' },
    },
    animateOnHover: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 기본 로고
export const Default: Story = {
  args: {
    size: 'medium',
    color: 'blue',
  },
}

// 애니메이션 로고
export const AnimatedBounce: Story = {
  args: {
    size: 'medium',
    color: 'blue',
    animate: true,
  },
}

// 호버 애니메이션 로고
export const HoverAnimation: Story = {
  args: {
    size: 'medium',
    color: 'blue',
    animateOnHover: true,
  },
}

// 모든 크기
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Logo size="small" color="blue" animate={true} />
        <p className="mt-2 text-sm">Small</p>
      </div>
      <div className="text-center">
        <Logo size="medium" color="blue" animate={true} />
        <p className="mt-2 text-sm">Medium</p>
      </div>
      <div className="text-center">
        <Logo size="large" color="blue" animate={true} />
        <p className="mt-2 text-sm">Large</p>
      </div>
    </div>
  ),
}

// 모든 색상 (애니메이션 적용)
export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <div className="text-center">
        <Logo color="blue" animate={true} />
        <p className="mt-2 text-sm">Blue</p>
      </div>
      <div className="text-center">
        <Logo color="green" animate={true} />
        <p className="mt-2 text-sm">Green</p>
      </div>
      <div className="text-center">
        <Logo color="purple" animate={true} />
        <p className="mt-2 text-sm">Purple</p>
      </div>
      <div className="text-center">
        <Logo color="red" animate={true} />
        <p className="mt-2 text-sm">Red</p>
      </div>
      <div className="text-center">
        <Logo color="black" animate={true} />
        <p className="mt-2 text-sm">Black</p>
      </div>
      <div className="text-center bg-gray-800 p-4 rounded">
        <Logo color="white" animate={true} />
        <p className="mt-2 text-sm text-white">White</p>
      </div>
    </div>
  ),
}

// 텍스트와 함께 (LogoWithText)
export const WithText: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <LogoWithText size="small" animateOnHover={true} />
        <p className="mt-2 text-sm">Small (hover to see animation)</p>
      </div>
      <div className="text-center">
        <LogoWithText size="medium" animate={true} />
        <p className="mt-2 text-sm">Medium (always bouncing)</p>
      </div>
      <div className="text-center">
        <LogoWithText size="large" animateOnHover={true} />
        <p className="mt-2 text-sm">Large (hover to see animation)</p>
      </div>
    </div>
  ),
}

// 통통 튀는 효과 비교
export const BounceComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold">통통 튀는 공 애니메이션 🏀</h3>
        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <Logo size="large" color="blue" />
            <p className="mt-2 text-sm">정적</p>
          </div>
          <div className="text-center">
            <Logo size="large" color="blue" animate={true} />
            <p className="mt-2 text-sm">계속 튀는 공</p>
          </div>
          <div className="text-center">
            <Logo size="large" color="blue" animateOnHover={true} />
            <p className="mt-2 text-sm">호버 시 튀는 공</p>
          </div>
        </div>
      </div>
    </div>
  ),
}