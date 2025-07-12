import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main'
import { ProblemListBanner } from '@/domains/problem/components/ProblemListBanner'
import { Typography } from '@/components/ui/Typography'
import { ProblemTrainingCard } from '@/domains/problem'

export const metadata: Metadata = {
  title: '알고고 - 알고리즘 학습 플랫폼',
  description: '체계적인 알고리즘 학습과 코딩테스트 준비를 위한 플랫폼. 매일 새로운 문제와 함께 실력을 향상시켜보세요.',
  keywords: ['알고리즘', '코딩테스트', '프로그래밍 문제', '자료구조', 'SQL', '문제 풀이', '학습 플랫폼'],
  openGraph: {
    title: '알고고 - 알고리즘 학습 플랫폼',
    description: '체계적인 알고리즘 학습과 코딩테스트 준비를 위한 플랫폼',
    type: 'website'
  }
}

export default function Home() {
  return (
    <MainLayout>
      <ProblemListBanner />
      
      {/* 임시 콘텐츠 - 나중에 다른 섹션들로 교체 */}
      <div className="space-y-4">
        <section>
          <Typography
            variant="large"
            className="font-bold mb-2"
          >
            알고리즘 트레이닝
          </Typography>
          <main className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ProblemTrainingCard
              title="오늘의 문제"
              description="매일 새로운 도전"
              iconUrl="https://cdn-icons-png.flaticon.com/512/2721/2721691.png"
              color="blue"
              status="active"
            />
            <ProblemTrainingCard
              title="유형별"
              description="패턴별 학습"
              iconUrl="https://cdn-icons-png.flaticon.com/512/5262/5262593.png"
              color="purple"
              status="coming-soon"
            />
            <ProblemTrainingCard
              title="준비중"
              description="곧 만나요"
              iconUrl="https://cdn-icons-png.flaticon.com/512/2972/2972531.png"
              color="gray"
              status="coming-soon"
            />
          </main>
        </section>

        <section>
          <Typography
            variant="large"
            className="font-bold mb-2"
          >
            전체 문제
          </Typography>
 
        </section>
      </div>
    </MainLayout>
  )
}
