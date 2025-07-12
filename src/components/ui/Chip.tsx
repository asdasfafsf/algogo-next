'use client'

import React from 'react'
import { X } from 'lucide-react'

export interface ChipProps {
  children: React.ReactNode
  variant?: 'filled' | 'outlined' | 'soft' | 'soft-outlined'
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'gray' | 'blue' | 'purple' | 'green' | 'amber' | 'red' | 'rose' | 'emerald' | 'indigo' | 'teal' | 'orange' | 'cyan' | 'lime' | 'pink' | 'yellow' |
          'kakao' | 'ruby' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze'
  rounded?: 'full' | 'lg' | 'md' | 'sm' | 'none'
  disabled?: boolean
  deletable?: boolean
  onDelete?: () => void
  onClick?: () => void
  className?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export function Chip({
  children,
  variant = 'filled',
  size = 'medium',
  color = 'default',
  rounded = 'full',
  disabled = false,
  deletable = false,
  onDelete,
  onClick,
  className = '',
  startIcon,
  endIcon,
}: ChipProps) {
  const isClickable = !!onClick && !disabled

  const sizeClasses = {
    small: {
      base: 'px-3 py-1 text-xs',
      icon: 'w-3 h-3',
      deleteIcon: 'w-3 h-3 ml-1.5 -mr-0.5',
      iconMargin: 'mr-1.5 ml-1.5',
    },
    medium: {
      base: 'px-4 py-2 text-xs',
      icon: 'w-3.5 h-3.5',
      deleteIcon: 'w-3.5 h-3.5 ml-1.5 -mr-0.5',
      iconMargin: 'mr-1.5 ml-1.5',
    },
    large: {
      base: 'px-6 py-3 text-sm',
      icon: 'w-5 h-5',
      deleteIcon: 'w-5 h-5 ml-2 -mr-1',
      iconMargin: 'mr-2 ml-2',
    },
  } as const

  const roundedClasses = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    sm: 'rounded-sm',
    none: 'rounded-none',
  }

  const colorVariants = {
    filled: {
      default: 'border border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300',
      // Material Design Colors
      gray: 'border border-transparent bg-gray-600 text-white hover:bg-gray-700',
      blue: 'border border-transparent bg-blue-600 text-white hover:bg-blue-700',
      purple: 'border border-transparent bg-purple-600 text-white hover:bg-purple-700',
      green: 'border border-transparent bg-green-600 text-white hover:bg-green-700',
      amber: 'border border-transparent bg-amber-600 text-white hover:bg-amber-700',
      red: 'border border-transparent bg-red-600 text-white hover:bg-red-700',
      rose: 'border border-transparent bg-rose-600 text-white hover:bg-rose-700',
      emerald: 'border border-transparent bg-emerald-600 text-white hover:bg-emerald-700',
      indigo: 'border border-transparent bg-indigo-600 text-white hover:bg-indigo-700',
      teal: 'border border-transparent bg-teal-600 text-white hover:bg-teal-700',
      orange: 'border border-transparent bg-orange-600 text-white hover:bg-orange-700',
      cyan: 'border border-transparent bg-cyan-600 text-white hover:bg-cyan-700',
      lime: 'border border-transparent bg-lime-600 text-white hover:bg-lime-700',
      pink: 'border border-transparent bg-pink-600 text-white hover:bg-pink-700',
      yellow: 'border border-transparent bg-yellow-500 text-white hover:bg-yellow-600',
      // Brand & Rank Colors
      kakao: 'border border-transparent bg-kakao text-white hover:bg-kakao/90',
      ruby: 'border border-transparent bg-ruby text-white hover:bg-ruby/90',
      diamond: 'border border-transparent bg-diamond text-white hover:bg-diamond/90',
      platinum: 'border border-transparent bg-platinum text-white hover:bg-platinum/90',
      gold: 'border border-transparent bg-gold text-white hover:bg-gold/90',
      silver: 'border border-transparent bg-silver text-white hover:bg-silver/90',
      bronze: 'border border-transparent bg-bronze text-white hover:bg-bronze/90',
    },
    outlined: {
      default: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      // Material Design Colors
      gray: 'border border-gray-600 text-gray-600 hover:bg-gray-50',
      blue: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
      purple: 'border border-purple-600 text-purple-600 hover:bg-purple-50',
      green: 'border border-green-600 text-green-600 hover:bg-green-50',
      amber: 'border border-amber-600 text-amber-600 hover:bg-amber-50',
      red: 'border border-red-600 text-red-600 hover:bg-red-50',
      rose: 'border border-rose-600 text-rose-600 hover:bg-rose-50',
      emerald: 'border border-emerald-600 text-emerald-600 hover:bg-emerald-50',
      indigo: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
      teal: 'border border-teal-600 text-teal-600 hover:bg-teal-50',
      orange: 'border border-orange-600 text-orange-600 hover:bg-orange-50',
      cyan: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50',
      lime: 'border border-lime-600 text-lime-600 hover:bg-lime-50',
      pink: 'border border-pink-600 text-pink-600 hover:bg-pink-50',
      yellow: 'border border-yellow-500 text-yellow-600 hover:bg-yellow-50',
      // Brand & Rank Colors
      kakao: 'border border-kakao text-kakao hover:bg-kakao/10',
      ruby: 'border border-ruby text-ruby hover:bg-ruby/10',
      diamond: 'border border-diamond text-diamond hover:bg-diamond/10',
      platinum: 'border border-platinum text-platinum hover:bg-platinum/10',
      gold: 'border border-gold text-gold hover:bg-gold/10',
      silver: 'border border-silver text-silver hover:bg-silver/10',
      bronze: 'border border-bronze text-bronze hover:bg-bronze/10',
    },
    soft: {
      default: 'border border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200',
      // Material Design Colors
      gray: 'border border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200',
      blue: 'border border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200',
      purple: 'border border-transparent bg-purple-100 text-purple-700 hover:bg-purple-200',
      green: 'border border-transparent bg-green-100 text-green-700 hover:bg-green-200',
      amber: 'border border-transparent bg-amber-100 text-amber-700 hover:bg-amber-200',
      red: 'border border-transparent bg-red-100 text-red-700 hover:bg-red-200',
      rose: 'border border-transparent bg-rose-100 text-rose-700 hover:bg-rose-200',
      emerald: 'border border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
      indigo: 'border border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
      teal: 'border border-transparent bg-teal-100 text-teal-700 hover:bg-teal-200',
      orange: 'border border-transparent bg-orange-100 text-orange-700 hover:bg-orange-200',
      cyan: 'border border-transparent bg-cyan-100 text-cyan-700 hover:bg-cyan-200',
      lime: 'border border-transparent bg-lime-100 text-lime-700 hover:bg-lime-200',
      pink: 'border border-transparent bg-pink-100 text-pink-700 hover:bg-pink-200',
      yellow: 'border border-transparent bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
      // Brand & Rank Colors
      kakao: 'border border-transparent bg-kakao/10 text-kakao hover:bg-kakao/20',
      ruby: 'border border-transparent bg-ruby/10 text-ruby hover:bg-ruby/20',
      diamond: 'border border-transparent bg-diamond/10 text-diamond hover:bg-diamond/20',
      platinum: 'border border-transparent bg-platinum/10 text-platinum hover:bg-platinum/20',
      gold: 'border border-transparent bg-gold/10 text-gold hover:bg-gold/20',
      silver: 'border border-transparent bg-silver/10 text-silver hover:bg-silver/20',
      bronze: 'border border-transparent bg-bronze/10 text-bronze hover:bg-bronze/20',
    },
    'soft-outlined': {
      default: 'bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400',
      // Material Design Colors
      gray: 'bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400',
      blue: 'bg-blue-100 border border-blue-300 text-blue-700 hover:bg-blue-200 hover:border-blue-400',
      purple: 'bg-purple-100 border border-purple-300 text-purple-700 hover:bg-purple-200 hover:border-purple-400',
      green: 'bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400',
      amber: 'bg-amber-100 border border-amber-300 text-amber-700 hover:bg-amber-200 hover:border-amber-400',
      red: 'bg-red-100 border border-red-300 text-red-700 hover:bg-red-200 hover:border-red-400',
      rose: 'bg-rose-100 border border-rose-300 text-rose-700 hover:bg-rose-200 hover:border-rose-400',
      emerald: 'bg-emerald-100 border border-emerald-300 text-emerald-700 hover:bg-emerald-200 hover:border-emerald-400',
      indigo: 'bg-indigo-100 border border-indigo-300 text-indigo-700 hover:bg-indigo-200 hover:border-indigo-400',
      teal: 'bg-teal-100 border border-teal-300 text-teal-700 hover:bg-teal-200 hover:border-teal-400',
      orange: 'bg-orange-100 border border-orange-300 text-orange-700 hover:bg-orange-200 hover:border-orange-400',
      cyan: 'bg-cyan-100 border border-cyan-300 text-cyan-700 hover:bg-cyan-200 hover:border-cyan-400',
      lime: 'bg-lime-100 border border-lime-300 text-lime-700 hover:bg-lime-200 hover:border-lime-400',
      pink: 'bg-pink-100 border border-pink-300 text-pink-700 hover:bg-pink-200 hover:border-pink-400',
      yellow: 'bg-yellow-100 border border-yellow-300 text-yellow-700 hover:bg-yellow-200 hover:border-yellow-400',
      // Brand & Rank Colors
      kakao: 'bg-kakao/10 border border-kakao/30 text-kakao hover:bg-kakao/20 hover:border-kakao/40',
      ruby: 'bg-ruby/10 border border-ruby/30 text-ruby hover:bg-ruby/20 hover:border-ruby/40',
      diamond: 'bg-diamond/10 border border-diamond/30 text-diamond hover:bg-diamond/20 hover:border-diamond/40',
      platinum: 'bg-platinum/10 border border-platinum/30 text-platinum hover:bg-platinum/20 hover:border-platinum/40',
      gold: 'bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 hover:border-gold/40',
      silver: 'bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 hover:border-silver/40',
      bronze: 'bg-bronze/10 border border-bronze/30 text-bronze hover:bg-bronze/20 hover:border-bronze/40',
    },
  }

  const currentSize = sizeClasses[size]
  const currentColor = colorVariants[variant]?.[color] || colorVariants[variant].default
  const currentRounded = roundedClasses[rounded]

  const baseClasses = `
    inline-flex items-center justify-center font-medium
    transition-all duration-200 ease-in-out
    ${currentSize.base}
    ${currentColor}
    ${currentRounded}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${isClickable ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1' : ''}
    ${className}
  `.trim()

  const handleClick = () => {
    if (isClickable) {
      onClick?.()
    }
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!disabled) {
      onDelete?.()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && isClickable) {
      e.preventDefault()
      onClick?.()
    }
  }

  return (
    <div 
      className={baseClasses} 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={isClickable ? 0 : -1}
      role={isClickable ? 'button' : undefined}
      aria-disabled={disabled}
    >
      {/* Start Icon */}
      {startIcon && (
        <span className={`${currentSize.iconMargin.split(' ')[0]} ${currentSize.icon} flex items-center justify-center`}>
          {startIcon}
        </span>
      )}

      {/* Content */}
      <span>{children}</span>

      {/* End Icon */}
      {endIcon && !deletable && (
        <span className={`${currentSize.iconMargin.split(' ')[1]} ${currentSize.icon} flex items-center justify-center`}>
          {endIcon}
        </span>
      )}

      {/* Delete Icon */}
      {deletable && (
        <button
          type="button"
          className={`
            ${currentSize.deleteIcon} flex items-center justify-center
            ${rounded === 'none' ? 'rounded-sm' : 'rounded-full'} hover:bg-black/10 transition-colors duration-150
            ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
          onClick={handleDelete}
          disabled={disabled}
          aria-label="삭제"
        >
          <X className="w-full h-full" />
        </button>
      )}
    </div>
  )
}