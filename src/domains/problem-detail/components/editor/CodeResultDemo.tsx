"use client"

import { useState } from 'react';
import { CodeResult } from './CodeResult';

// 데모용 컴포넌트 - 실제 사용 예시
export function CodeResultDemo() {
  const [customInput, setCustomInput] = useState('');
  const [customOutput, setCustomOutput] = useState('');

  // 예시 테스트 케이스 데이터
  const testCases = [
    {
      input: '1 2',
      expectedOutput: '3',
      actualOutput: '3',
      status: 'passed' as const,
      runtime: 1,
    },
    {
      input: '5 7',
      expectedOutput: '12',
      actualOutput: '11',
      status: 'failed' as const,
      runtime: 2,
    },
    {
      input: '10 20',
      expectedOutput: '30',
      status: 'pending' as const,
    },
  ];

  const handleRunCode = () => {
    // 실제로는 API 호출 등을 통해 코드를 실행
    console.log('코드 실행:', customInput);
    setCustomOutput(`입력된 값: ${customInput}\n실행 결과: 처리 완료`);
  };

  const handleInputChange = (input: string) => {
    setCustomInput(input);
  };

  return (
    <div className="h-96 border border-gray-300 rounded-lg overflow-hidden">
      <CodeResult
        testCases={testCases}
        customInput={customInput}
        customOutput={customOutput}
        defaultTab="input"
        onRunCode={handleRunCode}
        onInputChange={handleInputChange}
      />
    </div>
  );
}