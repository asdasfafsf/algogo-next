"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
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

interface CodeResultTestcaseProps {
  testCases?: TestCase[];
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
      return <Badge variant="default" className="bg-green-500 text-white">성공</Badge>;
    case 'failed':
      return <Badge variant="destructive">실패</Badge>;
    case 'error':
      return <Badge variant="destructive">실패</Badge>;
    default:
      return <Badge variant="secondary">대기</Badge>;
  }
};

export function CodeResultTestcase({
  testCases = []
}: CodeResultTestcaseProps) {
  const passedCount = testCases.filter(tc => tc.status === 'passed').length;
  const failedCount = testCases.filter(tc => tc.status === 'failed').length;
  const errorCount = testCases.filter(tc => tc.status === 'error').length;
  const totalCount = testCases.length;

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between px-5 py-4 bg-editor-page-surface rounded-lg border border-editor-page-border">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-editor-page-text-secondary">
                성공<span className="ml-2 text-green-600 font-normal">{passedCount}</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="text-sm text-editor-page-text-secondary">
                실패<span className="ml-2 text-red-600 font-normal">{failedCount + errorCount}</span>
              </span>
            </div>
          </div>
          <span className="text-sm text-editor-page-text-muted font-light">
            총 {totalCount}개
          </span>
        </div>
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
    </div>
  );
}