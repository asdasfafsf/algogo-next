import { Metadata } from 'next'
import Home from '../page'

export const metadata: Metadata = {
  title: '전체 문제',
  description: '다양한 알고리즘 문제를 풀어보세요. 난이도별, 유형별로 정리된 코딩테스트 문제를 통해 실력을 향상시키세요.',
  keywords: ['알고리즘', '코딩테스트', '프로그래밍 문제', '자료구조', 'SQL', '문제 풀이'],
  openGraph: {
    title: '전체 문제 - AlgoGo',
    description: '다양한 알고리즘 문제를 풀어보세요',
    type: 'website'
  }
}

interface ProblemsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProblemsPage({ searchParams }: ProblemsPageProps) {
  const resolvedSearchParams = await searchParams
  return <Home searchParams={resolvedSearchParams} />
}