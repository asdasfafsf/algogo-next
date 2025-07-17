import { Metadata } from 'next';
import { ProblemHeader } from '@/components/layout/problem/ProblemHeader';
import { ProblemDescription } from '@/domains/problem-detail/components/problem/ProblemDescription';
import { ProblemFooter } from '@/components/layout/problem/ProblemFooter';
import { getProblem } from '@/lib/api/problem-v2.api';
import { ProblemDetailClient } from './ProblemDetailClient';

interface ProblemDetailPageProps {
  params: Promise<{ problemUuid: string }>;
}


export async function generateMetadata({ params }: ProblemDetailPageProps): Promise<Metadata> {
  const { problemUuid } = await params;
  console.log('problemUuid', problemUuid);
  const problemResponse = await getProblem(problemUuid);
  const problem = problemResponse.data;
  
  return {
    title: `${problem.title} - AlgoGo`,
    description: `${problem.title} 문제를 풀어보세요. 난이도: ${problem.levelText}`,
    keywords: ['알고리즘', '코딩테스트', '프로그래밍 문제', problem.title],
    openGraph: {
      title: `${problem.title} - AlgoGo`,
      description: `${problem.title} 문제를 풀어보세요`,
      type: 'website'
    }
  };
}

export default async function ProblemDetailPage({ params }: ProblemDetailPageProps) {
  const { problemUuid } = await params;
  const problemResponse = await getProblem(problemUuid);
  const problem = problemResponse.data;

  const problemPanel = <ProblemDescription problem={problem} />;

  return (
    <div className="h-screen bg-editor-page-bg flex flex-col overflow-x-hidden">
      <ProblemHeader problemTitle={problem.title} />
      
      <div className="flex-1 min-h-0 overflow-x-hidden">
        <ProblemDetailClient problemPanel={problemPanel} />
      </div>
      
      {/* 데스크톱에서만 푸터 표시 */}
      <div className="hidden md:block">
        <ProblemFooter />
      </div>
    </div>
  );
}