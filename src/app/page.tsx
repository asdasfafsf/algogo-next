import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main'
import { ProblemListBanner } from '@/domains/problem/components/ProblemListBanner'

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
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">오늘의 문제</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-600">오늘의 문제 컴포넌트가 여기에 들어갑니다.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">유형별 문제</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['알고리즘', '자료구조', 'SQL'].map((category) => (
              <div key={category} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">{category}</h3>
                <p className="text-gray-600 text-sm">{category} 문제 카드가 여기에 들어갑니다.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">전체 문제</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-600">문제 테이블이 여기에 들어갑니다.</p>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
