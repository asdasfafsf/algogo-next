import { Typography } from "@/components/ui/Typography";

export function ProblemListSection() {
    return (
        <section>
            <div className="mb-6">
                <Typography
                    variant="large"
                    className="font-bold mb-2"
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
        </section>
    )
}