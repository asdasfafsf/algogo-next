import { Typography } from '@/components/ui/Typography';

interface ProblemContentTitleProps {
  title: string;
}

export function ProblemContentTitle({ title }: ProblemContentTitleProps) {
  return (
    <div className="mt-8 mb-4">
      <Typography as="h3" variant="h4" className="text-gray-900 pb-2">
        {title}
      </Typography>
      <div className="border-b border-gray-200"></div>
    </div>
  );
}