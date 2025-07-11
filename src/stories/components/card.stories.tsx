import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  CardAction 
} from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MoreHorizontal, Star, Eye, Calendar } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'UI Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// 기본 카드
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드 내용이 여기에 들어갑니다.</p>
      </CardContent>
    </Card>
  ),
}

// 액션이 있는 카드
export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>프로젝트 카드</CardTitle>
        <CardDescription>새로운 프로젝트 설정</CardDescription>
        <CardAction>
          <Button size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>프로젝트의 기본 설정을 완료하고 시작하세요.</p>
      </CardContent>
      <CardFooter>
        <Button>시작하기</Button>
      </CardFooter>
    </Card>
  ),
}

// 통계 카드
export const Statistics: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">총 방문자</CardTitle>
          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45,231</div>
          <p className="text-xs text-muted-foreground">
            전월 대비 +20.1%
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">평점</CardTitle>
          <Star className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.8</div>
          <p className="text-xs text-muted-foreground">
            리뷰 1,429개
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">이번 달</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,234</div>
          <p className="text-xs text-muted-foreground">
            목표의 83% 달성
          </p>
        </CardContent>
      </Card>
    </div>
  ),
}

// 문제 카드 (알고리즘 관련)
export const ProblemCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>두 수의 합</CardTitle>
            <CardDescription>배열에서 두 수를 더해 target이 되는 인덱스 찾기</CardDescription>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Easy
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>정답률: 85%</span>
            <span>시간 제한: 1초</span>
            <span>메모리 제한: 128MB</span>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium">Array</span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium">Hash Table</span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium">Two Pointers</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">문제 보기</Button>
        <Button>풀이 시작</Button>
      </CardFooter>
    </Card>
  ),
}

// 학습 진행 카드
export const LearningProgress: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>정렬 알고리즘</CardTitle>
        <CardDescription>기본 정렬 알고리즘 마스터하기</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>진행도</span>
              <span>7/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium">완료한 문제</div>
              <div className="text-muted-foreground">7개</div>
            </div>
            <div>
              <div className="font-medium">평균 시간</div>
              <div className="text-muted-foreground">15분</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">계속 학습하기</Button>
      </CardFooter>
    </Card>
  ),
} 