import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main'
import { ProblemListBanner, ProblemListSection } from '@/domains/problem'
import { ProblemTrainingSection } from '@/domains/problem'
import type { IquiryProblemsSummary, ProblemState, ProblemType } from '@/types/problem.type'
import { PROBLEM_SORT } from '@/constants/problem.constant'

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

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

// URL searchParams를 IquiryProblemsSummary 타입으로 변환
function parseSearchParams(searchParams: HomePageProps['searchParams']): Partial<IquiryProblemsSummary> {
  const parsed: Partial<IquiryProblemsSummary> = {}
  
  // levelList 파싱
  if (searchParams.levelList && typeof searchParams.levelList === 'string') {
    const levels = searchParams.levelList
      .split(',')
      .map(level => parseInt(level.trim(), 10))
      .filter(level => !isNaN(level))
    
    if (levels.length > 0) {
      parsed.levelList = levels
    }
  }

  if (searchParams.typeList && typeof searchParams.typeList === 'string') {
    const types = searchParams.typeList
      .split(',')
      .map(type => type.trim())
      .filter(type => type !== '')
    
    if (types.length > 0) {
      parsed.typeList = types as ProblemType[]
    }
  }

  if (searchParams.states && typeof searchParams.states === 'string') {
    const states = searchParams.states
      .split(',')
      .map(state => state.trim())
      .filter(state => state !== '')
    
    if (states.length > 0) {
      parsed.states = states as ProblemState[]
    }
  }
  
  return parsed
}

export default function Home({ searchParams }: HomePageProps) {
  const filters = parseSearchParams(searchParams)
  
  // sort 파라미터 파싱
  const sort = searchParams.sort && typeof searchParams.sort === 'string' 
    ? parseInt(searchParams.sort, 10) 
    : PROBLEM_SORT.DEFAULT
  
  return (
    <MainLayout>
      <ProblemListBanner />
      
      <div className="space-y-6">
        <ProblemTrainingSection />
        <ProblemListSection filters={filters} sort={sort} />
      </div>
    </MainLayout>
  )
}
