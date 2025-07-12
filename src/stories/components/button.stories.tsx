import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '@/components/ui/Button'
import { ChevronRight, Download, Plus, Search } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'secondary', 'ghost', 'link'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'default', 'destructive',
        'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 
        'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange',
        'brown', 'blue-gray', 'gray'
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
    ripple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 기본 버튼
export const Default: Story = {
  args: {
    children: '버튼',
  },
}

// 모든 Variant들 (기본 색상)
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

// Material Design 색상들 (Default Variant)
export const MaterialColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-sm font-medium text-muted-foreground">Material Design Colors - Default Variant</div>
      <div className="grid grid-cols-4 gap-3">
        <Button color="red">Red</Button>
        <Button color="pink">Pink</Button>
        <Button color="purple">Purple</Button>
        <Button color="deep-purple">Deep Purple</Button>
        <Button color="indigo">Indigo</Button>
        <Button color="blue">Blue</Button>
        <Button color="light-blue">Light Blue</Button>
        <Button color="cyan">Cyan</Button>
        <Button color="teal">Teal</Button>
        <Button color="green">Green</Button>
        <Button color="light-green">Light Green</Button>
        <Button color="lime">Lime</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="amber">Amber</Button>
        <Button color="orange">Orange</Button>
        <Button color="deep-orange">Deep Orange</Button>
        <Button color="brown">Brown</Button>
        <Button color="blue-gray">Blue Gray</Button>
        <Button color="gray">Gray</Button>
      </div>
    </div>
  ),
}



// 색상별 Variant 예시 (Blue)
export const BlueVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Blue Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="blue" variant="default">Default</Button>
        <Button color="blue" variant="outline">Outline</Button>
        <Button color="blue" variant="secondary">Secondary</Button>
        <Button color="blue" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 색상별 Variant 예시 (Green)
export const GreenVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Green Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="green" variant="default">Default</Button>
        <Button color="green" variant="outline">Outline</Button>
        <Button color="green" variant="secondary">Secondary</Button>
        <Button color="green" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 색상별 Variant 예시 (Red)
export const RedVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Red Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="red" variant="default">Default</Button>
        <Button color="red" variant="outline">Outline</Button>
        <Button color="red" variant="secondary">Secondary</Button>
        <Button color="red" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 색상별 Variant 예시 (Purple)
export const PurpleVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Purple Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="purple" variant="default">Default</Button>
        <Button color="purple" variant="outline">Outline</Button>
        <Button color="purple" variant="secondary">Secondary</Button>
        <Button color="purple" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 색상별 Variant 예시 (Yellow)
export const YellowVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Yellow Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="yellow" variant="default">Default</Button>
        <Button color="yellow" variant="outline">Outline</Button>
        <Button color="yellow" variant="secondary">Secondary</Button>
        <Button color="yellow" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 색상별 Variant 예시 (Cyan)
export const CyanVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Cyan Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="cyan" variant="default">Default</Button>
        <Button color="cyan" variant="outline">Outline</Button>
        <Button color="cyan" variant="secondary">Secondary</Button>
        <Button color="cyan" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 색상별 Variant 예시 (Pink)
export const PinkVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Pink Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="pink" variant="default">Default</Button>
        <Button color="pink" variant="outline">Outline</Button>
        <Button color="pink" variant="secondary">Secondary</Button>
        <Button color="pink" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 색상별 Variant 예시 (Lime)
export const LimeVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm font-medium text-muted-foreground">Lime Color Variants</div>
      <div className="flex flex-wrap gap-4">
        <Button color="lime" variant="default">Default</Button>
        <Button color="lime" variant="outline">Outline</Button>
        <Button color="lime" variant="secondary">Secondary</Button>
        <Button color="lime" variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

// 전체 색상 팔레트 쇼케이스
export const FullColorPalette: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="text-lg font-semibold text-gray-900">Complete Color Palette</div>
        <div className="text-sm text-muted-foreground">All available colors with default variant</div>
        <div className="grid grid-cols-5 gap-3">
          <Button color="red" size="sm">Red</Button>
          <Button color="pink" size="sm">Pink</Button>
          <Button color="purple" size="sm">Purple</Button>
          <Button color="deep-purple" size="sm">Deep Purple</Button>
          <Button color="indigo" size="sm">Indigo</Button>
          <Button color="blue" size="sm">Blue</Button>
          <Button color="light-blue" size="sm">Light Blue</Button>
          <Button color="cyan" size="sm">Cyan</Button>
          <Button color="teal" size="sm">Teal</Button>
          <Button color="green" size="sm">Green</Button>
          <Button color="light-green" size="sm">Light Green</Button>
          <Button color="lime" size="sm">Lime</Button>
          <Button color="yellow" size="sm">Yellow</Button>
          <Button color="amber" size="sm">Amber</Button>
          <Button color="orange" size="sm">Orange</Button>
          <Button color="deep-orange" size="sm">Deep Orange</Button>
          <Button color="brown" size="sm">Brown</Button>
          <Button color="blue-gray" size="sm">Blue Gray</Button>
          <Button color="gray" size="sm">Gray</Button>
          <Button color="destructive" size="sm">Destructive</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-md font-medium text-gray-900">Outline Variants</div>
        <div className="grid grid-cols-5 gap-3">
          <Button color="red" variant="outline" size="sm">Red</Button>
          <Button color="pink" variant="outline" size="sm">Pink</Button>
          <Button color="purple" variant="outline" size="sm">Purple</Button>
          <Button color="deep-purple" variant="outline" size="sm">Deep Purple</Button>
          <Button color="indigo" variant="outline" size="sm">Indigo</Button>
          <Button color="blue" variant="outline" size="sm">Blue</Button>
          <Button color="light-blue" variant="outline" size="sm">Light Blue</Button>
          <Button color="cyan" variant="outline" size="sm">Cyan</Button>
          <Button color="teal" variant="outline" size="sm">Teal</Button>
          <Button color="green" variant="outline" size="sm">Green</Button>
          <Button color="light-green" variant="outline" size="sm">Light Green</Button>
          <Button color="lime" variant="outline" size="sm">Lime</Button>
          <Button color="yellow" variant="outline" size="sm">Yellow</Button>
          <Button color="amber" variant="outline" size="sm">Amber</Button>
          <Button color="orange" variant="outline" size="sm">Orange</Button>
          <Button color="deep-orange" variant="outline" size="sm">Deep Orange</Button>
          <Button color="brown" variant="outline" size="sm">Brown</Button>
          <Button color="blue-gray" variant="outline" size="sm">Blue Gray</Button>
          <Button color="gray" variant="outline" size="sm">Gray</Button>
          <Button color="destructive" variant="outline" size="sm">Destructive</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-md font-medium text-gray-900">Ghost Variants</div>
        <div className="grid grid-cols-5 gap-3">
          <Button color="red" variant="ghost" size="sm">Red</Button>
          <Button color="pink" variant="ghost" size="sm">Pink</Button>
          <Button color="purple" variant="ghost" size="sm">Purple</Button>
          <Button color="deep-purple" variant="ghost" size="sm">Deep Purple</Button>
          <Button color="indigo" variant="ghost" size="sm">Indigo</Button>
          <Button color="blue" variant="ghost" size="sm">Blue</Button>
          <Button color="light-blue" variant="ghost" size="sm">Light Blue</Button>
          <Button color="cyan" variant="ghost" size="sm">Cyan</Button>
          <Button color="teal" variant="ghost" size="sm">Teal</Button>
          <Button color="green" variant="ghost" size="sm">Green</Button>
          <Button color="light-green" variant="ghost" size="sm">Light Green</Button>
          <Button color="lime" variant="ghost" size="sm">Lime</Button>
          <Button color="yellow" variant="ghost" size="sm">Yellow</Button>
          <Button color="amber" variant="ghost" size="sm">Amber</Button>
          <Button color="orange" variant="ghost" size="sm">Orange</Button>
          <Button color="deep-orange" variant="ghost" size="sm">Deep Orange</Button>
          <Button color="brown" variant="ghost" size="sm">Brown</Button>
          <Button color="blue-gray" variant="ghost" size="sm">Blue Gray</Button>
          <Button color="gray" variant="ghost" size="sm">Gray</Button>
          <Button color="destructive" variant="ghost" size="sm">Destructive</Button>
        </div>
      </div>
    </div>
  ),
}

// 다양한 색상 조합 쇼케이스
export const ColorShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="text-sm font-medium text-muted-foreground">Default Variants</div>
        <div className="grid grid-cols-5 gap-2">
          <Button color="red" size="sm">Red</Button>
          <Button color="blue" size="sm">Blue</Button>
          <Button color="green" size="sm">Green</Button>
          <Button color="purple" size="sm">Purple</Button>
          <Button color="orange" size="sm">Orange</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="text-sm font-medium text-muted-foreground">Outline Variants</div>
        <div className="grid grid-cols-5 gap-2">
          <Button color="red" variant="outline" size="sm">Red</Button>
          <Button color="blue" variant="outline" size="sm">Blue</Button>
          <Button color="green" variant="outline" size="sm">Green</Button>
          <Button color="purple" variant="outline" size="sm">Purple</Button>
          <Button color="orange" variant="outline" size="sm">Orange</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="text-sm font-medium text-muted-foreground">Ghost Variants</div>
        <div className="grid grid-cols-5 gap-2">
          <Button color="red" variant="ghost" size="sm">Red</Button>
          <Button color="blue" variant="ghost" size="sm">Blue</Button>
          <Button color="green" variant="ghost" size="sm">Green</Button>
          <Button color="purple" variant="ghost" size="sm">Purple</Button>
          <Button color="orange" variant="ghost" size="sm">Orange</Button>
        </div>
      </div>

                    <div className="space-y-3">
        <div className="text-sm font-medium text-muted-foreground">Extended Color Palette</div>
        <div className="grid grid-cols-6 gap-2">
          <Button color="pink" size="sm">Pink</Button>
          <Button color="deep-purple" size="sm">Deep Purple</Button>
          <Button color="light-blue" size="sm">Light Blue</Button>
          <Button color="cyan" size="sm">Cyan</Button>
          <Button color="light-green" size="sm">Light Green</Button>
          <Button color="lime" size="sm">Lime</Button>
          <Button color="yellow" size="sm">Yellow</Button>
          <Button color="amber" size="sm">Amber</Button>
          <Button color="deep-orange" size="sm">Deep Orange</Button>
          <Button color="brown" size="sm">Brown</Button>
          <Button color="blue-gray" size="sm">Blue Gray</Button>
          <Button color="gray" size="sm">Gray</Button>
        </div>
      </div>
    </div>
  ),
}

// 모든 Size들
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs" color="blue">XS</Button>
      <Button size="sm" color="blue">Small</Button>
      <Button size="default" color="blue">Default</Button>
      <Button size="lg" color="blue">Large</Button>
      <Button size="xl" color="blue">XL</Button>
      <Button size="icon" color="blue">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  ),
}

// 아이콘이 포함된 버튼들
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">아이콘 + 텍스트 (왼쪽 아이콘)</div>
        <div className="flex flex-wrap gap-4">
          <Button color="blue">
            <Download className="mr-2 h-4 w-4" />
            다운로드
          </Button>
          <Button variant="outline" color="green">
            <Search className="mr-2 h-4 w-4" />
            검색
          </Button>
          <Button variant="secondary" color="red">
            <Plus className="mr-2 h-4 w-4" />
            추가하기
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">텍스트 + 아이콘 (오른쪽 아이콘)</div>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" color="purple">
            계속하기
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button color="indigo">
            저장하기
            <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" color="teal">
            자세히 보기
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">아이콘만 있는 버튼들 (size=&quot;icon&quot;)</div>
        <div className="flex flex-wrap gap-4">
          <Button size="icon" color="blue">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" color="orange">
            <Search className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" color="purple">
            <Download className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" color="green">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">다양한 크기의 아이콘 버튼</div>
        <div className="flex items-center gap-4">
          <Button size="sm" color="cyan">
            <Plus className="mr-1.5 h-3 w-3" />
            작은 버튼
          </Button>
          <Button size="default" color="pink">
            <Plus className="mr-2 h-4 w-4" />
            기본 버튼
          </Button>
          <Button size="lg" color="amber">
            <Plus className="mr-2 h-5 w-5" />
            큰 버튼
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 비활성화된 버튼들
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Default</Button>
      <Button disabled color="destructive">
        Destructive
      </Button>
      <Button disabled variant="outline" color="blue">
        Outline
      </Button>
      <Button disabled variant="secondary" color="green">
        Secondary
      </Button>
      <Button disabled variant="ghost" color="purple">
        Ghost
      </Button>
    </div>
  ),
}

// 로딩 상태
export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled color="blue">
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        로딩 중...
      </Button>
      <Button variant="outline" disabled color="green">
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        처리 중...
      </Button>
    </div>
  ),
}

// Ripple Effects 데모
export const RippleEffects: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Ripple Effects - 클릭해서 확인하세요!</div>
        <div className="flex flex-wrap gap-4">
          <Button color="blue" ripple>
            Blue Ripple
          </Button>
          <Button color="green" ripple>
            Green Ripple
          </Button>
          <Button color="red" ripple>
            Red Ripple
          </Button>
          <Button color="purple" ripple>
            Purple Ripple
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Outline Variants with Ripple</div>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" color="blue" ripple>
            Blue Outline
          </Button>
          <Button variant="outline" color="green" ripple>
            Green Outline
          </Button>
          <Button variant="outline" color="red" ripple>
            Red Outline
          </Button>
          <Button variant="outline" color="purple" ripple>
            Purple Outline
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">다양한 크기의 Ripple Buttons</div>
        <div className="flex items-center gap-4">
          <Button size="xs" color="cyan" ripple>
            XS Ripple
          </Button>
          <Button size="sm" color="pink" ripple>
            SM Ripple
          </Button>
          <Button size="default" color="amber" ripple>
            Default Ripple
          </Button>
          <Button size="lg" color="teal" ripple>
            LG Ripple
          </Button>
          <Button size="xl" color="orange" ripple>
            XL Ripple
          </Button>
        </div>
      </div>
    </div>
  ),
}

// All Button Sizes 업데이트
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">모든 크기 옵션</div>
        <div className="flex items-center gap-4">
          <Button size="xs" color="blue">XS</Button>
          <Button size="sm" color="blue">SM</Button>
          <Button size="default" color="blue">Default</Button>
          <Button size="lg" color="blue">LG</Button>
          <Button size="xl" color="blue">XL</Button>
          <Button size="icon" color="blue">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Ripple과 함께</div>
        <div className="flex items-center gap-4">
          <Button size="xs" color="purple" ripple>XS Ripple</Button>
          <Button size="sm" color="purple" ripple>SM Ripple</Button>
          <Button size="default" color="purple" ripple>Default Ripple</Button>
          <Button size="lg" color="purple" ripple>LG Ripple</Button>
          <Button size="xl" color="purple" ripple>XL Ripple</Button>
          <Button size="icon" color="purple" ripple>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  ),
}

// Hover Effects Showcase
export const HoverEffects: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Drop Shadow Hover Effects - 호버해보세요!</div>
        <div className="grid grid-cols-4 gap-4">
          <Button color="blue">Blue Shadow</Button>
          <Button color="green">Green Shadow</Button>
          <Button color="red">Red Shadow</Button>
          <Button color="purple">Purple Shadow</Button>
          <Button color="pink">Pink Shadow</Button>
          <Button color="orange">Orange Shadow</Button>
          <Button color="indigo">Indigo Shadow</Button>
          <Button color="teal">Teal Shadow</Button>
          <Button color="cyan">Cyan Shadow</Button>
          <Button color="yellow">Yellow Shadow</Button>
          <Button color="amber">Amber Shadow</Button>
          <Button color="lime">Lime Shadow</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Ripple + Hover 조합</div>
        <div className="grid grid-cols-4 gap-4">
          <Button color="blue" ripple>Blue Both</Button>
          <Button color="green" ripple>Green Both</Button>
          <Button color="red" ripple>Red Both</Button>
          <Button color="purple" ripple>Purple Both</Button>
        </div>
      </div>
    </div>
  ),
}

// 새로운 기능들 데모
export const NewFeatures: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Loading States</div>
        <div className="flex flex-wrap gap-4">
          <Button loading color="blue">
            Loading...
          </Button>
          <Button loading variant="outline" color="green">
            Processing...
          </Button>
          <Button loading variant="secondary" color="red">
            Saving...
          </Button>
          <Button loading startIcon={<Search className="h-4 w-4" />} color="purple">
            Searching...
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Icon Buttons (Start/End Icons)</div>
        <div className="flex flex-wrap gap-4">
          <Button startIcon={<Download className="h-4 w-4" />} color="blue">
            Download
          </Button>
          <Button endIcon={<ChevronRight className="h-4 w-4" />} variant="outline" color="green">
            Next
          </Button>
          <Button 
            startIcon={<Plus className="h-4 w-4" />} 
            endIcon={<ChevronRight className="h-4 w-4" />}
            variant="secondary" 
            color="purple"
          >
            Add & Continue
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Full Width Buttons</div>
        <div className="space-y-3">
          <Button fullWidth color="blue">
            Full Width Primary
          </Button>
          <Button fullWidth variant="outline" color="green">
            Full Width Outline
          </Button>
          <Button fullWidth loading color="purple">
            Full Width Loading
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Improved Sizes (더 균형잡힌 크기)</div>
        <div className="flex items-center gap-4">
          <Button size="xs" color="blue">XS (32px)</Button>
          <Button size="sm" color="blue">SM (40px)</Button>
          <Button size="default" color="blue">Default (44px)</Button>
          <Button size="lg" color="blue">LG (48px)</Button>
          <Button size="xl" color="blue">XL (56px)</Button>
        </div>
      </div>
    </div>
  ),
} 