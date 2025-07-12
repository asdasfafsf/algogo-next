import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main'
import { Typography } from '@/components/ui/Typography'
import { ProblemListBanner } from '@/domains/problem'
import { ProblemTrainingSection } from '@/domains/problem'

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
      
      <div className="space-y-4">
        <ProblemTrainingSection />
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
