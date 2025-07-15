import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { Chip } from '@/components/ui/Chip';
import { Problem } from '@/types/problem.type';
import { ProblemStats } from './ProblemStats';
import { ProblemLevel } from './ProblemLevel';
import { ProblemTypeList } from './ProblemTypeList';

interface ProblemDescriptionProps {
  problem: Problem;
}

export function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="p-6">
        <Typography variant="h1" size="sm" className="text-gray-900 mb-4">{problem.title}</Typography>
        
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <ProblemLevel level={problem.level} />
 
          <div className="h-4 w-px bg-gray-300" />
          <ProblemTypeList typeList={problem.typeList} />
          {problem.isSpecialJudge && (
            <>
            <Chip variant="soft-outlined" color="orange" size="small">
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

        <Card className="bg-white text-gray-900 border-gray-200 mt-6">
          <CardHeader>
            <Typography as="h3" variant="h4" className="text-gray-900">문제 설명</Typography>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-sm max-w-none text-gray-900"
              dangerouslySetInnerHTML={{ __html: problem.content }}
            />
          </CardContent>
        </Card>

        {problem.input && (
          <Card className="bg-white text-gray-900 border-gray-200 mt-6">
            <CardHeader>
              <Typography as="h3" variant="h4" className="text-gray-900">입력</Typography>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none text-gray-900"
                dangerouslySetInnerHTML={{ __html: problem.input }}
              />
            </CardContent>
          </Card>
        )}

        {problem.output && (
          <Card className="bg-white text-gray-900 border-gray-200 mt-6">
            <CardHeader>
              <Typography as="h3" variant="h4" className="text-gray-900">출력</Typography>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none text-gray-900"
                dangerouslySetInnerHTML={{ __html: problem.output }}
              />
            </CardContent>
          </Card>
        )}

        {problem.inputOutputList.length > 0 && (
          <Card className="bg-white text-gray-900 border-gray-200 mt-6">
            <CardHeader>
              <Typography as="h3" variant="h4" className="text-gray-900">예제</Typography>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {problem.inputOutputList.map((example, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div>
                      <Typography variant="small" className="mb-2 text-gray-700">입력 {index + 1}</Typography>
                      <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto text-gray-900">
                        {example.input}
                      </pre>
                    </div>
                    <div>
                      <Typography variant="small" className="mb-2 text-gray-700">출력 {index + 1}</Typography>
                      <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto text-gray-900">
                        {example.output}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {problem.hint && (
          <Card className="bg-white text-gray-900 border-gray-200 mt-6">
            <CardHeader>
              <Typography as="h3" variant="h4" className="text-gray-900">힌트</Typography>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none text-gray-900"
                dangerouslySetInnerHTML={{ __html: problem.hint }}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}