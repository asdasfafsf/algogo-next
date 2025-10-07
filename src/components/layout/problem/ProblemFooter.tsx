import { Typography } from '@/components/ui/Typography';

export function ProblemFooter() {
  return (
    <footer className="bg-editor-page-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-screen-xl">
        <div className="flex items-center justify-center">
          <Typography variant="muted" size="sm" className="text-editor-page-text-muted">
            © {new Date().getFullYear()} AlgoGo Corp. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}