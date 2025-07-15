import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

interface TestCase {
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  status: 'pending' | 'passed' | 'failed' | 'error';
  runtime?: number;
  memory?: number;
}

interface CodeResultProps {
  testCases?: TestCase[];
  customInput?: string;
  customOutput?: string;
  activeTab?: 'testcases' | 'custom';
}

const getStatusIcon = (status: TestCase['status']) => {
  switch (status) {
    case 'passed':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'failed':
      return <XCircle className="h-4 w-4 text-red-500" />;
    case 'error':
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    default:
      return <Clock className="h-4 w-4 text-gray-400" />;
  }
};

const getStatusBadge = (status: TestCase['status']) => {
  switch (status) {
    case 'passed':
      return <Badge variant="default" className="bg-green-500 text-white">통과</Badge>;
    case 'failed':
      return <Badge variant="destructive">실패</Badge>;
    case 'error':
      return <Badge variant="outline" className="border-yellow-500 text-yellow-600">오류</Badge>;
    default:
      return <Badge variant="secondary">대기</Badge>;
  }
};

export function CodeResult({ 
  testCases = [], 
  customInput = '',
  customOutput = '',
  activeTab = 'testcases'
}: CodeResultProps) {
  return (
    <div className="h-full flex flex-col bg-editor-page-surface">
      <div className="flex border-b border-editor-page-border">
        <Button
          variant={activeTab === 'testcases' ? 'default' : 'ghost'}
          size="sm"
          className="rounded-none"
          disabled
        >
          테스트 케이스
        </Button>
        <Button
          variant={activeTab === 'custom' ? 'default' : 'ghost'}
          size="sm"
          className="rounded-none"
          disabled
        >
          사용자 입력
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'testcases' ? (
          <div className="p-4 space-y-4">
            {testCases.length === 0 ? (
              <div className="text-center text-editor-page-text-muted py-8">
                코드를 실행하면 테스트 결과가 표시됩니다.
              </div>
            ) : (
              testCases.map((testCase, index) => (
                <Card key={index} className="border-l-4 border-l-editor-page-border bg-editor-page-bg border-editor-page-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm flex items-center gap-2 text-editor-page-text">
                        {getStatusIcon(testCase.status)}
                        테스트 케이스 {index + 1}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(testCase.status)}
                        {testCase.runtime && (
                          <span className="text-xs text-editor-page-text-muted">
                            {testCase.runtime}ms
                          </span>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="text-xs font-medium mb-1 text-editor-page-text">입력</h4>
                      <pre className="bg-editor-page-surface p-2 rounded text-xs overflow-x-auto text-editor-page-text">
                        {testCase.input}
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium mb-1 text-editor-page-text">기대 출력</h4>
                      <pre className="bg-editor-page-surface p-2 rounded text-xs overflow-x-auto text-editor-page-text">
                        {testCase.expectedOutput}
                      </pre>
                    </div>
                    {testCase.actualOutput && (
                      <div>
                        <h4 className="text-xs font-medium mb-1 text-editor-page-text">실제 출력</h4>
                        <pre className={`p-2 rounded text-xs overflow-x-auto text-editor-page-text ${
                          testCase.status === 'passed' ? 'bg-green-50' : 'bg-red-50'
                        }`}>
                          {testCase.actualOutput}
                        </pre>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        ) : (
          <div className="p-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2 text-editor-page-text">사용자 입력</h4>
              <div className="w-full h-32 p-3 border border-editor-page-border rounded-lg font-mono text-sm bg-editor-page-bg whitespace-pre-wrap text-editor-page-text">
                {customInput || "테스트할 입력을 입력하세요..."}
              </div>
            </div>
            <Button disabled className="w-full">
              실행
            </Button>
            {customOutput && (
              <div>
                <h4 className="text-sm font-medium mb-2 text-editor-page-text">출력</h4>
                <pre className="bg-editor-page-surface p-3 rounded-lg text-sm overflow-x-auto text-editor-page-text">
                  {customOutput}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}