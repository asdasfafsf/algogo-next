import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import React from 'react';

export interface TrainingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'gray' | 'green' | 'amber' | 'rose' | 'emerald' | 'indigo' | 'teal' | 'orange';
  status: 'active' | 'coming-soon';
  href?: string;
  onClick?: () => void;
}

const colorConfig = {
  blue: {
    gradient: 'from-blue-500 via-blue-600 to-cyan-600',
    border: 'hover:border-blue-400/40 hover:shadow-blue-500/20',
    textHover: 'group-hover:text-blue-300',
    overlay: 'from-blue-500/15 via-cyan-500/10',
    accent: 'from-blue-400 to-cyan-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-blue-500/25',
  },
  purple: {
    gradient: 'from-purple-500 via-purple-600 to-indigo-600',
    border: 'hover:border-purple-400/40 hover:shadow-purple-500/20',
    textHover: 'group-hover:text-purple-300',
    overlay: 'from-purple-500/15 via-indigo-500/10',
    accent: 'from-purple-400 to-indigo-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-purple-500/25',
  },
  green: {
    gradient: 'from-green-500 via-green-600 to-emerald-600',
    border: 'hover:border-green-400/40 hover:shadow-green-500/20',
    textHover: 'group-hover:text-green-300',
    overlay: 'from-green-500/15 via-emerald-500/10',
    accent: 'from-green-400 to-emerald-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-green-500/25',
  },
  amber: {
    gradient: 'from-amber-500 via-amber-600 to-orange-500',
    border: 'hover:border-amber-400/40 hover:shadow-amber-500/20',
    textHover: 'group-hover:text-amber-300',
    overlay: 'from-amber-500/15 via-orange-500/10',
    accent: 'from-amber-400 to-orange-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-amber-500/25',
  },
  rose: {
    gradient: 'from-rose-500 via-rose-600 to-pink-600',
    border: 'hover:border-rose-400/40 hover:shadow-rose-500/20',
    textHover: 'group-hover:text-rose-300',
    overlay: 'from-rose-500/15 via-pink-500/10',
    accent: 'from-rose-400 to-pink-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-rose-500/25',
  },
  emerald: {
    gradient: 'from-emerald-500 via-emerald-600 to-teal-600',
    border: 'hover:border-emerald-400/40 hover:shadow-emerald-500/20',
    textHover: 'group-hover:text-emerald-300',
    overlay: 'from-emerald-500/15 via-teal-500/10',
    accent: 'from-emerald-400 to-teal-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-emerald-500/25',
  },
  indigo: {
    gradient: 'from-indigo-500 via-indigo-600 to-blue-600',
    border: 'hover:border-indigo-400/40 hover:shadow-indigo-500/20',
    textHover: 'group-hover:text-indigo-300',
    overlay: 'from-indigo-500/15 via-blue-500/10',
    accent: 'from-indigo-400 to-blue-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-indigo-500/25',
  },
  teal: {
    gradient: 'from-teal-500 via-teal-600 to-cyan-600',
    border: 'hover:border-teal-400/40 hover:shadow-teal-500/20',
    textHover: 'group-hover:text-teal-300',
    overlay: 'from-teal-500/15 via-cyan-500/10',
    accent: 'from-teal-400 to-cyan-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-teal-500/25',
  },
  orange: {
    gradient: 'from-orange-500 via-orange-600 to-red-500',
    border: 'hover:border-orange-400/40 hover:shadow-orange-500/20',
    textHover: 'group-hover:text-orange-300',
    overlay: 'from-orange-500/15 via-red-500/10',
    accent: 'from-orange-400 to-red-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-orange-500/25',
  },
  gray: {
    gradient: 'from-gray-600 via-gray-700 to-slate-700',
    border: 'hover:border-gray-500/40',
    textHover: 'group-hover:text-gray-300',
    overlay: 'from-gray-500/10 via-slate-500/5',
    accent: 'from-gray-400 to-slate-400',
    glow: 'group-hover:shadow-lg group-hover:shadow-gray-500/20',
  },
};

export function ProblemTrainingCard({
  title,
  description,
  icon,
  color,
  status,
  href,
  onClick,
}: TrainingCardProps) {
  const config = colorConfig[color];
  const isActive = status === 'active';

  const cardContent = (
    <Card
      className={`
        relative p-6 text-white transition-all duration-500 overflow-hidden
        bg-gradient-to-br from-slate-900 via-gray-900 to-black 
        border border-gray-800/50 backdrop-blur-sm
        ${isActive ? `cursor-pointer hover:scale-[1.02] hover:-translate-y-1 group ${config.border} ${config.glow}` : 'cursor-not-allowed'}
      `}
      onClick={isActive && !href ? onClick : undefined}
    >
      {/* 배경 글로우 효과 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-5 rounded-lg`} />

      <div className={`relative flex items-center gap-5 ${!isActive ? 'opacity-60' : ''}`}>
        {/* 왼쪽 아이콘 */}
        <div className={`
          relative flex items-center justify-center w-16 h-16 flex-shrink-0
          bg-gradient-to-br ${config.gradient} rounded-2xl shadow-lg
          ${isActive ? 'transition-all duration-500 group-hover:scale-110 group-hover:rotate-3' : ''}
        `}>
          {/* 아이콘 글로우 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-2xl blur-md opacity-50 ${isActive ? 'group-hover:opacity-75' : ''}`} />
          
          <div className={`relative w-8 h-8 text-white ${!isActive ? 'opacity-60' : ''} transition-all duration-300`}>
            {icon}
          </div>
        </div>

        {/* 오른쪽 텍스트 정보 */}
        <div className="flex-1 min-w-0 space-y-2">
          <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? config.textHover : 'text-gray-400'}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500'}`}>
            {description}
          </p>
          
          {/* 프로그레스 바 스타일 액센트 */}
          <div className="flex items-center gap-2 mt-3">
            <div className={`h-1 bg-gradient-to-r ${config.accent} rounded-full transition-all duration-500 ${
              isActive ? 'w-12 group-hover:w-20' : 'w-8'
            }`} />
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.accent} opacity-60 transition-all duration-300 ${
              isActive ? 'group-hover:opacity-100 group-hover:scale-125' : ''
            }`} />
          </div>
        </div>
      </div>

      {/* 호버 오버레이 */}
      {isActive && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${config.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
          {/* 미묘한 파티클 효과 */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className={`absolute top-4 right-8 w-1 h-1 bg-gradient-to-r ${config.accent} rounded-full animate-pulse`} />
            <div className={`absolute top-8 right-12 w-0.5 h-0.5 bg-gradient-to-r ${config.accent} rounded-full animate-pulse delay-100`} />
            <div className={`absolute bottom-8 left-8 w-1 h-1 bg-gradient-to-r ${config.accent} rounded-full animate-pulse delay-200`} />
          </div>
        </>
      )}

      {/* 준비중 배지 */}
      {status === 'coming-soon' && (
        <div className="absolute flex items-center gap-2 px-3 py-2 text-xs bg-gradient-to-r from-slate-800 to-gray-800 backdrop-blur-sm rounded-full top-4 right-4 border border-gray-700/50 shadow-lg">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="font-medium">준비중</span>
        </div>
      )}

      {/* 비활성 오버레이 */}
      {status === 'coming-soon' && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-900/30 to-transparent backdrop-blur-[1px]" />
      )}
    </Card>
  );

  // href가 있고 활성 상태면 Link로 감싸기
  if (href && isActive) {
    return (
      <Link href={href} className="block w-full h-full no-underline text-inherit">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
