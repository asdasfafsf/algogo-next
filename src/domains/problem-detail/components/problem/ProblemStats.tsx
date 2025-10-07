import { Problem } from '@/types/problem.type';
import { Typography } from '@/components/ui/Typography';
import { ProblemSource } from './ProblemSource';

interface ProblemStatsProps {
  problem: Problem;
}

export function ProblemStats({ problem }: ProblemStatsProps) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      <div className="flex items-center gap-2">
        <Typography variant="muted" size="sm">시간 제한</Typography>
        <Typography variant="large" size="sm">{problem.timeout} ms</Typography>
      </div>
      <div className="flex items-center gap-2">
        <Typography variant="muted" size="sm">메모리 제한</Typography>
        <Typography variant="large" size="sm">{problem.memoryLimit}MB</Typography>
      </div>
      <div className="flex items-center gap-2">
        <Typography variant="muted" size="sm">정답률</Typography>
        <Typography variant="large" size="sm">{problem.answerRate.toFixed(1)}%</Typography>
      </div>
      <div className="flex items-center gap-2">
        <Typography variant="muted" size="sm">제출</Typography>
        <Typography variant="large" size="sm">{problem.submitCount.toLocaleString()}</Typography>
      </div>
      <div className="flex items-center gap-2">
        <Typography variant="muted" size="sm">정답</Typography>
        <Typography variant="large" size="sm">{problem.answerCount.toLocaleString()}</Typography>
      </div>
      <ProblemSource source={problem.source} sourceId={problem.sourceId} sourceUrl={problem.sourceUrl} />
    </div>
  );
}