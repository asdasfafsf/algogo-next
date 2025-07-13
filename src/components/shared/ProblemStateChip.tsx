import { Chip } from "@/components/ui/Chip"
import type { ProblemState } from "@/types/problem.type"
import { PROBLEM_STATE } from "@/constants/problem.constant"

interface ProblemStateChipProps {
  state: ProblemState
  onRemove?: (state: ProblemState) => void
  variant?: 'filled' | 'outlined' | 'soft-outlined'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

// 상태에 따른 라벨 및 색상 결정
const getStateDisplay = (state: ProblemState) => {
  switch (state) {
    case PROBLEM_STATE.SOLVED:
      return { label: "맞힌 문제", color: "emerald" as const }
    case PROBLEM_STATE.FAILED:
      return { label: "틀린 문제", color: "rose" as const }
    case PROBLEM_STATE.NONE:
      return { label: "안 푼 문제", color: "indigo" as const }
    default:
      return { label: state, color: "gray" as const }
  }
}

export function ProblemStateChip({ 
  state, 
  onRemove, 
  variant = 'soft-outlined',
  size = 'small',
  className
}: ProblemStateChipProps) {
  const handleClick = onRemove ? () => onRemove(state) : undefined
  const { label, color } = getStateDisplay(state)

  return (
    <Chip
      variant={variant}
      color={color}
      size={size}
      onClick={handleClick}
      className={className}
    >
      <span className="font-bold">{label}</span>
    </Chip>
  )
}