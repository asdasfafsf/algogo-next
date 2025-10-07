import { Chip } from "@/components/ui/Chip"
import type { ProblemType } from "@/types/problem.type"

interface ProblemTypeChipProps {
  type: ProblemType
  onRemove?: (type: ProblemType) => void
  variant?: 'filled' | 'outlined' | 'soft-outlined'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export function ProblemTypeChip({ 
  type, 
  onRemove, 
  variant = 'soft-outlined',
  size = 'small',
  className
}: ProblemTypeChipProps) {
  const handleClick = onRemove ? () => onRemove(type) : undefined

  return (
    <Chip
      variant={variant}
      color="blue"
      size={size}
      onClick={handleClick}
      className={className}
    >
     {type}
    </Chip>
  )
}