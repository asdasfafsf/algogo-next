'use client'

import { Typography } from "@/components/ui/Typography";
import { ProblemFilter } from "./ProblemFilter";
import { ProblemTable, type Problem } from "./ProblemTable";
import { ProblemPagination } from "./ProblemPagination";
import type { IquiryProblemsSummary } from '@/types/problem.type';

// 샘플 데이터
const sampleProblems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    type: "배열",
    solveRate: 85.2,
    status: "solved"
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    type: "연결 리스트",
    solveRate: 42.1,
    status: "attempted"
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    type: "이진 탐색",
    solveRate: 28.7,
    status: "unsolved"
  }
];

interface ProblemListSectionProps {
    filters?: Partial<IquiryProblemsSummary>
}

export function ProblemListSection({ filters }: ProblemListSectionProps) {
    const handleProblemClick = (problemId: number) => {
        console.log(`Problem ${problemId} clicked`);
    };

    const handlePageChange = (page: number) => {
        console.log(`Page changed to ${page}`);
    };

    const handleItemsPerPageChange = (itemsPerPage: number) => {
        console.log(`Items per page changed to ${itemsPerPage}`);
    };

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
                problems={sampleProblems}
                onProblemClick={handleProblemClick}
            />

            {/* 페이지네이션 섹션 */}
            <ProblemPagination
                currentPage={1}
                totalPages={16}
                itemsPerPage={10}
                totalItems={156}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
            />
        </section>
    )
}