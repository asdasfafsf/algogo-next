import { Metadata } from 'next';
import { ProblemHeader } from '@/components/layout/problem/ProblemHeader';
import { ProblemDescription } from '@/domains/problem-detail/components/problem/ProblemDescription';
import { ProblemFooter } from '@/components/layout/problem/ProblemFooter';
import { getProblem } from '@/lib/api/server/problem.api';
import { getSetting, loadCode } from '@/lib/api/server/code.api';
import { CodeEditor, CodeResult } from '@/domains/problem-detail/components/editor';
import { ResizablePanel } from '@/domains/problem-detail/components/ResizablePanel';
import { VerticalResizablePanel } from '@/domains/problem-detail/components/VerticalResizablePanel';
import { MobileLayout } from '@/domains/problem-detail/components/MobileLayout';

interface ProblemDetailPageProps {
  params: Promise<{ problemUuid: string }>;
}


export async function generateMetadata({ params }: ProblemDetailPageProps): Promise<Metadata> {
  const { problemUuid } = await params;
  const problemResponse = await getProblem(problemUuid);
  const problem = problemResponse.data;
  
  return {
    title: `${problem.title}`,
    description: `${problem.title} 문제를 풀어보세요.`,
    keywords: ['알고리즘', '코딩테스트', '프로그래밍 문제', problem.title],
    openGraph: {
      title: `${problem.title}`,
      description: `${problem.title} 문제를 풀어보세요`,
      type: 'website'
    }
  };
}

export default async function ProblemDetailPage({ params }: ProblemDetailPageProps) {
  const { problemUuid } = await params;

  // 서버 API는 재시도 + 에러 처리 정책이 포함되어 있음
  const problemResponse = await getProblem(problemUuid);
  const settingResponse = await getSetting();
  const codeResponse = await loadCode(problemUuid, settingResponse.data.defaultLanguage);

  const problem = problemResponse.data;
  const defaultLanguage = settingResponse.data.defaultLanguage;
  const initialCode = codeResponse.data.content;

  const problemPanel = <ProblemDescription problem={problem} />;

  const codePanel = (
    <CodeEditor
      initialCode={initialCode}
      initialLanguage={defaultLanguage}
      setting={settingResponse.data}
    />
  );
  
  const resultPanel = (
    <CodeResult 
      customInput=""
      customOutput=""
      defaultTab="testcases"
      initialTestCases={problem.inputOutputList.map(elem => ({
        ...elem,
        readOnly: true,
        expected: elem.output,
        state: '실행 전',
      }))}
    />
  );

  return (
    <div className="h-screen bg-editor-page-bg flex flex-col overflow-x-hidden">
      <ProblemHeader problemTitle={problem.title} />
      
      <div className="flex-1 min-h-0 overflow-x-hidden">
        {/* 데스크톱 레이아웃 (md 이상) */}
        <div className="hidden md:block h-full">
          <ResizablePanel
            leftPanel={problemPanel}
            rightPanel={
              <VerticalResizablePanel
                topPanel={codePanel}
                bottomPanel={resultPanel}
                defaultTopHeight={60}
                minTopHeight={30}
                maxTopHeight={80}
              />
            }
            defaultLeftWidth={50}
            minLeftWidth={25}
            maxLeftWidth={75}
          />
        </div>

        {/* 모바일 레이아웃 (sm 이하) */}
        <div className="block md:hidden h-full">
          <MobileLayout
            problemPanel={problemPanel}
            codePanel={codePanel}
            resultPanel={resultPanel}
          />
        </div>
      </div>
      
      {/* 데스크톱에서만 푸터 표시 */}
      <div className="hidden md:block">
        <ProblemFooter />
      </div>
    </div>
  );
}