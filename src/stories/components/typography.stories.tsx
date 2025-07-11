import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Typography } from '@/components/ui/Typography'

const meta: Meta<typeof Typography> = {
  title: 'UI Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'lead', 'large', 'small', 'muted', 'blockquote', 'code', 'list'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 기본 Typography
export const Default: Story = {
  args: {
    children: '이것은 기본 텍스트입니다.',
  },
}

// 모든 헤딩들
export const Headings: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
    </div>
  ),
}

// 헤딩 사이즈 변형
export const HeadingSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" size="sm">H1 Small</Typography>
        <Typography variant="h1" size="default">H1 Default</Typography>
        <Typography variant="h1" size="lg">H1 Large</Typography>
      </div>
      <div>
        <Typography variant="h2" size="sm">H2 Small</Typography>
        <Typography variant="h2" size="default">H2 Default</Typography>
        <Typography variant="h2" size="lg">H2 Large</Typography>
      </div>
    </div>
  ),
}

// 텍스트 스타일들
export const TextStyles: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Typography variant="p">
        이것은 일반적인 문단 텍스트입니다. 웹사이트나 애플리케이션에서 
        본문 내용을 표시할 때 사용됩니다.
      </Typography>
      
      <Typography variant="lead">
        이것은 리드 텍스트입니다. 문단의 시작이나 중요한 내용을 강조할 때 사용됩니다.
      </Typography>
      
      <Typography variant="large">
        이것은 큰 텍스트입니다. 일반 텍스트보다 크고 중요한 정보를 표시할 때 사용됩니다.
      </Typography>
      
      <Typography variant="small">
        이것은 작은 텍스트입니다. 부가 정보나 메타데이터를 표시할 때 사용됩니다.
      </Typography>
      
      <Typography variant="muted">
        이것은 흐릿한 텍스트입니다. 덜 중요한 정보나 설명을 표시할 때 사용됩니다.
      </Typography>
    </div>
  ),
}

// 특수 스타일들
export const SpecialStyles: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Typography variant="blockquote">
        &ldquo;좋은 디자인은 사용자가 알아차리지 못할 정도로 자연스러워야 한다.&rdquo;
      </Typography>
      
      <div>
        <Typography variant="p">
          코드 예시: <Typography variant="code" asChild><code>console.log(&apos;Hello World&apos;)</code></Typography>
        </Typography>
      </div>
      
      <Typography variant="list">
        <li>첫 번째 항목</li>
        <li>두 번째 항목</li>
        <li>세 번째 항목</li>
      </Typography>
    </div>
  ),
}

// 사이즈 비교
export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 text-lg font-semibold">Paragraph Sizes</h4>
        <div className="space-y-2">
          <Typography variant="p" size="sm">Small paragraph text</Typography>
          <Typography variant="p" size="default">Default paragraph text</Typography>
          <Typography variant="p" size="lg">Large paragraph text</Typography>
        </div>
      </div>
      
      <div>
        <h4 className="mb-4 text-lg font-semibold">Lead Sizes</h4>
        <div className="space-y-2">
          <Typography variant="lead" size="sm">Small lead text</Typography>
          <Typography variant="lead" size="default">Default lead text</Typography>
          <Typography variant="lead" size="lg">Large lead text</Typography>
        </div>
      </div>
    </div>
  ),
}

// 실제 콘텐츠 예시
export const ContentExample: Story = {
  render: () => (
    <article className="max-w-3xl space-y-6">
      <header className="space-y-2">
        <Typography variant="h1">알고리즘 학습 가이드</Typography>
        <Typography variant="lead">
          프로그래밍 면접을 위한 핵심 알고리즘과 자료구조를 체계적으로 학습해보세요.
        </Typography>
      </header>
      
      <Typography variant="h2">시작하기 전에</Typography>
      <Typography variant="p">
        알고리즘 학습은 체계적인 접근이 중요합니다. 기초부터 차근차근 학습하여 
        견고한 기반을 만들어보세요.
      </Typography>
      
      <Typography variant="h3">학습 단계</Typography>
      <Typography variant="list">
        <li>기본 자료구조 (배열, 연결 리스트, 스택, 큐)</li>
        <li>정렬 알고리즘 (버블, 선택, 삽입, 병합, 퀵 정렬)</li>
        <li>탐색 알고리즘 (이진 탐색, BFS, DFS)</li>
        <li>동적 프로그래밍</li>
        <li>그래프 알고리즘</li>
      </Typography>
      
      <Typography variant="blockquote">
        &ldquo;연습 없이는 완벽해질 수 없다. 하지만 완벽한 연습만이 완벽을 만든다.&rdquo;
      </Typography>
      
      <Typography variant="h4">코드 예시</Typography>
      <Typography variant="p">
        간단한 이진 탐색 구현: <Typography variant="code" asChild><code>binary_search(arr, target)</code></Typography>
      </Typography>
      
      <Typography variant="small">
        마지막 수정: 2024년 1월 15일
      </Typography>
    </article>
  ),
} 