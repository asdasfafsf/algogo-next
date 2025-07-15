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
    <div className="h-full overflow-y-auto bg-white">
      <div className="space-y-6 p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">{problem.title}</h1>
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
              <span className="font-medium text-gray-900">{problem.answerRate.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">제출 수</span>
              <span className="font-medium text-gray-900">{problem.submitCount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">정답 수</span>
              <span className="font-medium text-gray-900">{problem.answerCount.toLocaleString()}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">시간 제한</span>
              <span className="font-medium text-gray-900">{problem.timeout}초</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">메모리 제한</span>
              <span className="font-medium text-gray-900">{problem.memoryLimit}MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">출처</span>
              <span className="font-medium text-gray-900">{problem.source}</span>
            </div>
          </div>
        </div>

        <Card className="bg-white text-gray-900 border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">문제 설명</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-sm max-w-none text-gray-900"
              dangerouslySetInnerHTML={{ __html: problem.content }}
            />
          </CardContent>
        </Card>

        {problem.input && (
          <Card className="bg-white text-gray-900 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">입력</CardTitle>
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
          <Card className="bg-white text-gray-900 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">출력</CardTitle>
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
          <Card className="bg-white text-gray-900 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">예제</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {problem.inputOutputList.map((example, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-gray-900">입력 {index + 1}</h4>
                      <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto text-gray-900">
                        {example.input}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-gray-900">출력 {index + 1}</h4>
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
          <Card className="bg-white text-gray-900 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">힌트</CardTitle>
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