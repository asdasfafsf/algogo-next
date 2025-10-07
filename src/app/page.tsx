import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main'
import { ProblemListBanner, ProblemListSection } from '@/domains/problem'
import { ProblemTrainingSection } from '@/domains/problem'
import type { IquiryProblemsSummary, ProblemSort, ProblemState, ProblemType } from '@/types/problem.type'
import { PROBLEM_SORT } from '@/constants/problem.constant'
import { getProblemList } from '@/lib/api/pure/problem.api'

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
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// URL searchParams를 IquiryProblemsSummary 타입으로 변환
function parseSearchParams(searchParams: { [key: string]: string | string[] | undefined }): Partial<IquiryProblemsSummary> {
  const parsed: Partial<IquiryProblemsSummary> = {}
  
  // title 파싱
  if (searchParams.title && typeof searchParams.title === 'string') {
    const title = searchParams.title.trim()
    if (title !== '') {
      parsed.title = title
    }
  }
  
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


export default async function Home({ searchParams }: HomePageProps) {
  // searchParams를 await로 기다림
  const params = await searchParams
  
  const filters = parseSearchParams(params)
  
  // sort 파라미터 파싱
  const sort = params.sort && typeof params.sort === 'string' 
    ? parseInt(params.sort, 10) 
    : PROBLEM_SORT.DEFAULT
  
  const pageNo = params.pageNo && typeof params.pageNo === 'string' 
    ? parseInt(params.pageNo, 10) 
    : 1

  const pageSize = params.pageSize && typeof params.pageSize === 'string' 
    ? parseInt(params.pageSize, 10) 
    : 20


  const problemsResponse = await getProblemList({
    ...filters,
    sort: sort as ProblemSort,
    pageNo: pageNo,
    pageSize: pageSize
  })

  const { data } = problemsResponse;
  const { totalCount, problemList } = data;
  
  return (
    <MainLayout>
      <ProblemListBanner />
      
      <div className="space-y-6">
        <ProblemTrainingSection />
        <ProblemListSection 
          filters={filters} 
          sort={sort} 
          pageNo={pageNo} 
          pageSize={pageSize} 
          totalCount={totalCount} 
          problems={problemList}
        />
      </div>
    </MainLayout>
  )
}
