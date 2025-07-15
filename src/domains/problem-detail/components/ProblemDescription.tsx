import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ProblemLevelChip } from '@/components/shared/ProblemLevelChip';
import { ProblemTypeChip } from '@/components/shared/ProblemTypeChip';
import { ProblemStateChip } from '@/components/shared/ProblemStateChip';
import { Problem } from '@/types/problem.type';

interface ProblemDescriptionProps {
  problem: Problem;
}

export function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-6 p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{problem.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <ProblemLevelChip level={problem.level} />
              <ProblemStateChip state={problem.state} />
              <div className="flex gap-1">
                {problem.typeList.map((type) => (
                  <ProblemTypeChip key={type} type={type} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">정답률</span>
              <span className="font-medium">{problem.answerRate.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">제출 수</span>
              <span className="font-medium">{problem.submitCount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">정답 수</span>
              <span className="font-medium">{problem.answerCount.toLocaleString()}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">시간 제한</span>
              <span className="font-medium">{problem.timeout}초</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">메모리 제한</span>
              <span className="font-medium">{problem.memoryLimit}MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">출처</span>
              <span className="font-medium">{problem.source}</span>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>문제 설명</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: problem.content }}
            />
          </CardContent>
        </Card>

        {problem.input && (
          <Card>
            <CardHeader>
              <CardTitle>입력</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: problem.input }}
              />
            </CardContent>
          </Card>
        )}

        {problem.output && (
          <Card>
            <CardHeader>
              <CardTitle>출력</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: problem.output }}
              />
            </CardContent>
          </Card>
        )}

        {problem.inputOutputList.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>예제</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {problem.inputOutputList.map((example, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">입력 {index + 1}</h4>
                      <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto">
                        {example.input}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">출력 {index + 1}</h4>
                      <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto">
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
          <Card>
            <CardHeader>
              <CardTitle>힌트</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: problem.hint }}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}