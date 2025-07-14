import { Typography } from "@/components/ui/Typography";
import { ProblemFilter } from "./filters";
import { ProblemTable } from "./table";
import type { IquiryProblemsSummary, ProblemSummary } from '@/types/problem.type';
import { PROBLEM_SORT } from '@/constants/problem.constant';
import { ProblemPagination } from "./ProblemPagination";



interface ProblemListSectionProps {
    filters?: Partial<IquiryProblemsSummary>;
    sort?: number;
    pageNo?: number;
    pageSize?: number;
    totalCount?: number;
    problems?: ProblemSummary[];
}

export function ProblemListSection({
  filters,
  sort = PROBLEM_SORT.DEFAULT,
  pageNo = 1,
  pageSize = 20,
  totalCount = 0,
  problems = []
}: ProblemListSectionProps) {
    return (
        <section className="space-y-6">
            {/* 섹션 헤더 */}
            <div>
                <Typography
                    variant="large"
                    className="font-bold"
                >
                    전체 문제
                </Typography>
                <Typography
                    variant="small"
                    className="text-gray-600"
                >
                    다양한 난이도의 알고리즘 문제를 탐색하고 도전해보세요
                </Typography>
            </div>

            {/* 필터 섹션 */}
            <ProblemFilter filters={filters} />

            {/* 테이블 섹션 */}
            <ProblemTable 
                problems={problems}
                sort={sort}
            />

            <ProblemPagination
                pageNo={pageNo}
                pageSize={pageSize}
                totalCount={totalCount}
            />

        </section>
    )
}