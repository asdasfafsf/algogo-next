'use client'

import React, { useState, useRef, useEffect } from 'react'

export interface MaterialInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'outlined' | 'filled'
  size?: 'small' | 'medium' | 'large'
  color?: 'black' | 'blue' | 'purple' | 'green' | 'amber' | 'rose' | 'emerald' | 'indigo' | 'teal' | 'orange' | 'red'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export function MaterialInput({
  label,
  error,
  helperText,
  variant = 'outlined',
  size = 'medium',
  color = 'black',
  startIcon,
  endIcon,
  className = '',
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  ...props
}: MaterialInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(!!defaultValue || !!value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setHasValue(!!value || !!inputRef.current?.value)
  }, [value])

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setHasValue(!!e.target.value)
    onBlur?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value)
    onChange?.(e)
  }

  const isLabelFloating = isFocused || hasValue

  const colorConfig = {
    black: {
      focus: 'black',
      border: 'border-black',
      text: 'text-black',
    },
    blue: {
      focus: 'blue-600',
      border: 'border-blue-600',
      text: 'text-blue-600',
    },
    purple: {
      focus: 'purple-600',
      border: 'border-purple-600', 
      text: 'text-purple-600',
    },
    green: {
      focus: 'green-600',
      border: 'border-green-600',
      text: 'text-green-600',
    },
    amber: {
      focus: 'amber-600',
      border: 'border-amber-600',
      text: 'text-amber-600',
    },
    rose: {
      focus: 'rose-600',
      border: 'border-rose-600',
      text: 'text-rose-600',
    },
    emerald: {
      focus: 'emerald-600',
      border: 'border-emerald-600',
      text: 'text-emerald-600',
    },
    indigo: {
      focus: 'indigo-600',
      border: 'border-indigo-600',
      text: 'text-indigo-600',
    },
    teal: {
      focus: 'teal-600',
      border: 'border-teal-600',
      text: 'text-teal-600',
    },
    orange: {
      focus: 'orange-600',
      border: 'border-orange-600',
      text: 'text-orange-600',
    },
    red: {
      focus: 'red-600',
      border: 'border-red-600',
      text: 'text-red-600',
    },
  }

  const currentColor = colorConfig[color]

  const sizeClasses = {
    small: {
      input: 'px-3 py-2 text-sm',
      label: 'text-sm',
      icon: 'w-4 h-4',
      iconStart: 'left-3 pl-9',
      iconEnd: 'right-3 pr-9',
    },
    medium: {
      input: 'px-3 py-3 text-base',
      label: 'text-base', 
      icon: 'w-5 h-5',
      iconStart: 'left-3 pl-10',
      iconEnd: 'right-3 pr-10',
    },
    large: {
      input: 'px-3 py-4 text-lg',
      label: 'text-lg',
      icon: 'w-6 h-6',
      iconStart: 'left-3 pl-12',
      iconEnd: 'right-3 pr-12',
    },
  }

  const currentSize = sizeClasses[size]

  const baseInputClasses = `
    w-full outline-none transition-all duration-200 ease-in-out font-medium
    ${currentSize.input}
    ${startIcon ? currentSize.iconStart : ''}
    ${endIcon ? currentSize.iconEnd : ''}
    ${props.disabled ? 'cursor-not-allowed opacity-60' : ''}
    ${isLabelFloating ? '' : 'placeholder-transparent'}
  `

  const containerClasses = `
    relative w-full ${className}
  `

  if (variant === 'filled') {
    return (
      <div className={containerClasses}>
        <div className="relative">
          {/* Start Icon */}
          {startIcon && (
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10 ${currentSize.icon}`}>
              {startIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={inputRef}
            className={`
              ${baseInputClasses}
              bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 
              ${error ? 'bg-red-50 hover:bg-red-100 focus:bg-red-100' : ''}
              rounded-lg border-0 border-b-2 border-transparent
              ${isFocused 
                ? error ? 'border-b-red-600' : `border-b-${currentColor.focus}`
                : ''
              }
              transition-all duration-200
            `}
            placeholder={props.placeholder}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />

          {/* Label */}
          {label && (
            <label className={`
              absolute px-1 pointer-events-none
              transition-all duration-200 ease-in-out origin-left z-20
              ${startIcon ? 'left-10' : 'left-3'}
              ${error ? 'text-red-600' : isFocused ? currentColor.text : 'text-gray-500'}
              ${isLabelFloating 
                ? `-top-2 text-xs bg-gray-50` 
                : `top-0 bottom-0 flex items-center bg-transparent ${currentSize.label}`
              }
            `}>
              {label}
            </label>
          )}

          {/* End Icon */}
          {endIcon && (
            <div className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ${currentSize.icon}`}>
              {endIcon}
            </div>
          )}
        </div>

        {/* Helper/Error Text */}
        {(helperText || error) && (
          <div className={`mt-1 text-xs px-3 ${error ? 'text-red-600' : 'text-gray-500'}`}>
            {error || helperText}
          </div>
        )}
      </div>
    )
  }

  // Outlined variant
  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Start Icon */}
        {startIcon && (
          <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10 ${currentSize.icon}`}>
            {startIcon}
          </div>
        )}

        {/* Input */}
        <input
          ref={inputRef}
          className={`
            ${baseInputClasses}
            bg-white border rounded-lg
            ${isFocused 
              ? error 
                ? 'border-red-600 shadow-sm' 
                : `${currentColor.border} shadow-sm`
              : error
                ? 'border-red-300'
                : 'border-gray-300 hover:border-gray-400'
            }
            transition-all duration-200
          `}
          placeholder={props.placeholder}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />

        {/* Label */}
        {label && (
          <label className={`
            absolute pointer-events-none px-1
            transition-all duration-200 ease-in-out origin-left z-20
            ${startIcon ? 'left-10' : 'left-3'}
            ${error ? 'text-red-600' : isFocused ? currentColor.text : 'text-gray-500'}
            ${isLabelFloating 
              ? `-top-2 text-xs bg-white` 
              : `top-0 bottom-0 flex items-center bg-transparent ${currentSize.label}`
            }
          `}>
            {label}
          </label>
        )}

        {/* End Icon */}
        {endIcon && (
          <div className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ${currentSize.icon}`}>
            {endIcon}
          </div>
        )}
      </div>

      {/* Helper/Error Text */}
      {(helperText || error) && (
        <div className={`mt-1 text-xs px-3 ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  )
}