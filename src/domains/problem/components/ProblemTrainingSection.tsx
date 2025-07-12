import { Zap, BookOpen, Settings } from "lucide-react";

import { Typography } from "@/components/ui/Typography";

import { ProblemTrainingCard } from "./ProblemTrainingCard";

export const ProblemTrainingSection = () => {
  return (
        <section>
          <Typography
            variant="large"
            className="font-bold mb-2"
          >
            알고리즘 트레이닝
          </Typography>
          <main className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ProblemTrainingCard
              title="오늘의 문제"
              description="매일 새로운 도전"
              icon={<Zap size={32} />}
              color="blue"
              status="active"
            />
            <ProblemTrainingCard
              title="유형별"
              description="패턴별 학습"
              icon={<BookOpen size={32} />}
              color="purple"
              status="coming-soon"
            />
            <ProblemTrainingCard
              title="준비중"
              description="곧 만나요"
              icon={<Settings size={32} />}
              color="gray"
              status="coming-soon"
            />
          </main>
        </section>
  )
}