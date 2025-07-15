import { Metadata } from 'next';
import { ProblemHeader } from '@/components/layout/problem/ProblemHeader';
import { ProblemDescription } from '@/domains/problem-detail/components/ProblemDescription';
import { CodeEditor } from '@/domains/problem-detail/components/CodeEditor';
import { CodeResult } from '@/domains/problem-detail/components/CodeResult';
import { ResizablePanel } from '@/domains/problem-detail/components/ResizablePanel';
import { VerticalResizablePanel } from '@/domains/problem-detail/components/VerticalResizablePanel';
import { ProblemFooter } from '@/components/layout/problem/ProblemFooter';
import { Problem } from '@/types/problem.type';

interface ProblemDetailPageProps {
  params: Promise<{ problemUuid: string }>;
}

async function getProblem(uuid: string): Promise<Problem> {
  // TODO: API 호출로 실제 문제 데이터 가져오기
  // 임시 데이터
  return {
    uuid,
    title: "두 수의 합",
    level: 1,
    levelText: "브론즈 5",
    answerRate: 87.5,
    submitCount: 1234,
    timeout: 2,
    memoryLimit: 256,
    answerCount: 1080,
    answerPeopleCount: 980,
    source: "백준",
    sourceId: "1000",
    sourceUrl: "https://www.acmicpc.net/problem/1000",
    content: "<p>두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.</p>",
    input: "<p>첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)</p>",
    output: "<p>첫째 줄에 A+B를 출력한다.</p>",
    additionalTimeAllowed: false,
    isSpecialJudge: false,
    isSubTask: false,
    isFunction: false,
    isInteractive: false,
    isTwoStep: false,
    isClass: false,
    isLanguageRestrict: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    inputOutputList: [
      {
        order: 1,
        input: "1 2",
        output: "3",
        content: ""
      }
    ],
    typeList: ["수학", "구현"],
    style: "",
    subTaskList: [],
    languageLimitList: [],
    customExample: "",
    customImplementation: "",
    customGrader: "",
    customNotes: "",
    customAttachment: "",
    customSample: "",
    problemSource: "",
    state: "NONE"
  };
}

export async function generateMetadata({ params }: ProblemDetailPageProps): Promise<Metadata> {
  const { problemUuid } = await params;
  const problem = await getProblem(problemUuid);
  
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
  const problem = await getProblem(problemUuid);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <ProblemHeader problemTitle={problem.title} />
      
      <div className="flex-1 min-h-0">
        <ResizablePanel
          leftPanel={<ProblemDescription problem={problem} />}
          rightPanel={
            <VerticalResizablePanel
              topPanel={
                <CodeEditor 
                  initialCode="# 여기에 코드를 작성하세요\n\n"
                  selectedLanguage="python"
                />
              }
              bottomPanel={
                <CodeResult 
                  testCases={[]}
                  customInput=""
                  customOutput=""
                  activeTab="testcases"
                />
              }
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
      
      <ProblemFooter />
    </div>
  );
}