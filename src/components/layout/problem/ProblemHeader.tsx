import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/Breadcrumb';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { EditorThemeSelector } from '@/components/ui/EditorThemeSelector';
import Link from 'next/link';

interface ProblemHeaderProps {
  problemTitle?: string;
}

export function ProblemHeader({ problemTitle }: ProblemHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-editor-page-border bg-editor-page-bg backdrop-blur supports-[backdrop-filter]:bg-editor-page-bg/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-12 items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-editor-page-text-secondary hover:text-editor-page-text">홈</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/problems" className="text-editor-page-text-secondary hover:text-editor-page-text">문제</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-editor-page-text">
                  {problemTitle || '문제 상세'}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center gap-2">
            <EditorThemeSelector variant="compact" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}