'use client'

import { Typography } from "@/components/ui/Typography";
import { ProblemFilter } from "./ProblemFilter";
import { ProblemTable } from "./ProblemTable";
import { ProblemPagination } from "./ProblemPagination";
import type { IquiryProblemsSummary, ProblemSummary } from '@/types/problem.type';
import { PROBLEM_TYPE, PROBLEM_STATE } from '@/constants/problem.constant';

// 샘플 데이터
const sampleProblems: ProblemSummary[] = [
  {
    uuid: "problem-001",
    title: "Two Sum",
    levelText: "브론즈 II",
    level: 4,
    answerCount: 1523,
    answerRate: 85.2,
    submitCount: 1789,
    answerPeopleCount: 1432,
    source: "백준",
    sourceId: "1001",
    sourceUrl: "https://www.acmicpc.net/problem/1001",
    typeList: [PROBLEM_TYPE.구현, PROBLEM_TYPE.수학],
    state: PROBLEM_STATE.SOLVED
  },
  {
    uuid: "problem-002",
    title: "Add Two Numbers",
    levelText: "실버 III",
    level: 8,
    answerCount: 892,
    answerRate: 42.1,
    submitCount: 2119,
    answerPeopleCount: 823,
    source: "백준",
    sourceId: "2042",
    sourceUrl: "https://www.acmicpc.net/problem/2042",
    typeList: [PROBLEM_TYPE.자료_구조, PROBLEM_TYPE.세그먼트_트리],
    state: PROBLEM_STATE.FAILED
  },
  {
    uuid: "problem-003",
    title: "Median of Two Sorted Arrays",
    levelText: "골드 I",
    level: 16,
    answerCount: 234,
    answerRate: 28.7,
    submitCount: 815,
    answerPeopleCount: 201,
    source: "백준",
    sourceId: "1300",
    sourceUrl: "https://www.acmicpc.net/problem/1300",
    typeList: [PROBLEM_TYPE.이분_탐색, PROBLEM_TYPE.매개_변수_탐색],
    state: PROBLEM_STATE.NONE
  }
];

interface ProblemListSectionProps {
    filters?: Partial<IquiryProblemsSummary>
}

export function ProblemListSection({ filters }: ProblemListSectionProps) {
    const handleProblemClick = (problemUuid: string) => {
        console.log(`Problem ${problemUuid} clicked`);
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