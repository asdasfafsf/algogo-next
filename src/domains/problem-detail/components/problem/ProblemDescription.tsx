import { Typography } from '@/components/ui/Typography';
import { Chip } from '@/components/ui/Chip';
import { Problem } from '@/types/problem.type';
import { ProblemStats } from './ProblemStats';
import { ProblemLevel } from './ProblemLevel';
import { ProblemTypeList } from './ProblemTypeList';
import { ProblemContent } from './ProblemContent';
import { ProblemContentTitle } from './ProblemContentTitle';
import { ProblemInputOutputList } from './ProblemInputOutputList';

interface ProblemDescriptionProps {
  problem: Problem;
}

export function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="p-6">
        <div className="mb-4">
          <Typography variant="h2" size="lg" className="font-bold text-gray-900 pb-3">
            {problem.title}
          </Typography>
          <div className="border-b border-gray-200"></div>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <ProblemLevel level={problem.level} />
 
          <div className="h-4 w-px bg-gray-300" />
          <ProblemTypeList typeList={problem.typeList} />
          {problem.isSpecialJudge && (
            <>
            <Chip variant="soft-outlined" color="amber" size="small">
              스페셜 저지
            </Chip>
            </>
          )}
          {problem.isSubTask && (
            <>
            <Chip variant="soft-outlined" color="purple" size="small">
              서브태스크
            </Chip>
            </>
          )}
        </div>

        <ProblemStats problem={problem} />

        <ProblemContentTitle title="문제 설명" />
        <ProblemContent content={problem.content} />

        {problem.customExample && (
          <>
            <ProblemContentTitle title="예시" />
            <ProblemContent content={problem.customExample} />
          </>
        )}

        {problem.customImplementation && (
          <>
            <ProblemContentTitle title="구현" />
            <ProblemContent content={problem.customImplementation} />
          </>
        )}

        {problem.customGrader && (
          <>
            <ProblemContentTitle title="예제" />
            <ProblemContent content={problem.customGrader} />
          </>
        )}

        {problem.limit && (
          <>
            <ProblemContentTitle title="제한" />
            <ProblemContent content={problem.limit} />
          </>
        )}

        {(problem.input || problem.output) && (
          <>
            {problem.input && (
              <>
                <ProblemContentTitle title="입력" />
                <ProblemContent content={problem.input} />
              </>
            )}
            {problem.output && (
              <>
                <ProblemContentTitle title="출력" />
                <ProblemContent content={problem.output} />
              </>
            )}
          </>
        )}

        <ProblemInputOutputList inputOutputList={problem.inputOutputList} />

        {problem.subTaskList.map((subTask) => (
          <div key={subTask.order}>
            <ProblemContentTitle title={subTask.title} />
            <ProblemContent content={subTask.content} />
          </div>
        ))}

        {problem.customNotes && (
          <>
            <ProblemContentTitle title="테스트용 입력 형식" />
            <ProblemContent content={problem.customNotes} />
          </>
        )}

        {problem.customAttachment && (
          <>
            <ProblemContentTitle title="첨부파일" />
            <ProblemContent content={problem.customAttachment} />
          </>
        )}

        {problem.hint && (
          <>
            <ProblemContentTitle title="힌트" />
            <ProblemContent content={problem.hint} />
          </>
        )}

        {problem.problemSource ? (
          <>
            <ProblemContentTitle title="출처" />
            <ProblemContent content={problem.problemSource} />
          </>
        ) : (
          <div className="mt-8">
            {/* 출처 정보 컴포넌트 */}
          </div>
        )}
      </div>
    </div>
  );
}