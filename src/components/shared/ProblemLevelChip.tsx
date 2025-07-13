import { Chip } from "@/components/ui/Chip"

interface ProblemLevelChipProps {
  level: number
  onRemove?: (level: number) => void
  variant?: 'filled' | 'outlined' | 'soft-outlined'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

// 레벨 값을 한글 라벨로 변환
const getLevelLabel = (value: number): string => {
  if (value === 0) return "알 수 없음"
  if (value <= 5) return `브론즈 ${6 - value}`
  if (value <= 10) return `실버 ${11 - value}`
  if (value <= 15) return `골드 ${16 - value}`
  if (value <= 20) return `플래티넘 ${21 - value}`
  if (value <= 25) return `다이아몬드 ${26 - value}`
  return `루비 ${31 - value}`
}

// 레벨에 따른 색상 결정
const getLevelColor = (value: number): 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'ruby' | 'gray' => {
  if (value === 0) return "gray"
  if (value <= 5) return "bronze"
  if (value <= 10) return "silver"
  if (value <= 15) return "gold"
  if (value <= 20) return "platinum"
  if (value <= 25) return "diamond"
  return "ruby"
}

export function ProblemLevelChip({ 
  level, 
  onRemove, 
  variant = 'soft-outlined',
  size = 'small',
  className
}: ProblemLevelChipProps) {
  const handleClick = onRemove ? () => onRemove(level) : undefined

  return (
    <Chip
      variant={variant}
      color={getLevelColor(level)}
      size={size}
      onClick={handleClick}
      className={className}
    >
      {getLevelLabel(level)}
    </Chip>
  )
}