import { ProblemInputOutput } from '@/types/problem.type';
import { ProblemContentTitle } from './ProblemContentTitle';
import { ProblemInputOutputItem } from './ProblemInputOutputItem';
import { Typography } from '@/components/ui/Typography';
import { CornerDownLeft, Move3D } from 'lucide-react';

interface ProblemInputOutputListProps {
  inputOutputList: ProblemInputOutput[];
}

const SpaceIcon = () => (
  <div className="w-2 h-0.5 bg-blue-400 rounded-full inline-block" />
);

const EnterIcon = () => (
  <CornerDownLeft className="w-3 h-3 text-blue-400 inline" />
);

const TabIcon = () => (
  <Move3D className="w-3 h-3 text-blue-400 inline rotate-90" />
);

export function ProblemInputOutputList({ inputOutputList }: ProblemInputOutputListProps) {
  if (inputOutputList.length === 0) return null;

  return (
    <>
      <ProblemContentTitle title="입출력 예시" />
      <div className="mb-6">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <div className="bg-gray-900 border border-gray-700 rounded px-2 py-1">
              <SpaceIcon />
            </div>
            <span>띄어쓰기</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="bg-gray-900 border border-gray-700 rounded px-2 py-1">
              <EnterIcon />
            </div>
            <span>개행</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="bg-gray-900 border border-gray-700 rounded px-2 py-1">
              <TabIcon />
            </div>
            <span>탭</span>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {inputOutputList.map((example, index) => (
          <div key={index} className="space-y-4">
            <div className="mb-4">
              <Typography as="h3" variant="h4" className="text-gray-900 pb-2">
                예시 {index + 1}
              </Typography>
              <div className="relative border-b border-gray-200">
                <div className="absolute left-0 top-0 h-full w-12 border-b-2 border-blue-500"></div>
              </div>
            </div>
            <div className="space-y-4">
              <ProblemInputOutputItem
                content={example.input}
                label="입력"
                type="input"
              />
              <ProblemInputOutputItem
                content={example.output}
                label="출력"
                type="output"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}