'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { User, Settings, FileText, LogOut } from 'lucide-react'
import { Me } from '@/types/me.type'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip'

interface ProfileDropdownProps {
  me: Me
}

export function ProfileDropdown({ me }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const displayName = me.name || '사용자'

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('me')
    router.push('/', { scroll: false })
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="프로필 메뉴"
        >
          <Image 
            src={me.profilePhoto} 
            alt={displayName}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200"
          />
        </button>
      </PopoverTrigger>
      
      <PopoverContent align="end" className="w-52 p-0 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center space-x-3">
            <Image 
              src={me.profilePhoto} 
              alt={displayName}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <Typography variant="small" className="font-semibold text-gray-900">{displayName}</Typography>
              <Typography variant="muted" size="sm">알고고 사용자</Typography>
            </div>
          </div>
        </div>
        
        <div className="py-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start px-4 py-2.5 h-auto text-gray-700 hover:text-gray-900"
            asChild
          >
            <Link href="/profile" onClick={() => setIsOpen(false)}>
              <User className="w-4 h-4 mr-3 text-gray-500" />
              내 프로필
            </Link>
          </Button>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start px-4 py-2.5 h-auto text-gray-400 cursor-not-allowed"
                disabled
              >
                <Settings className="w-4 h-4 mr-3" />
                설정
              </Button>
            </TooltipTrigger>
            <TooltipContent>곧 출시될 예정입니다</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start px-4 py-2.5 h-auto text-gray-400 cursor-not-allowed"
                disabled
              >
                <FileText className="w-4 h-4 mr-3" />
                내 문제
              </Button>
            </TooltipTrigger>
            <TooltipContent>곧 출시될 예정입니다</TooltipContent>
          </Tooltip>
          
          <hr className="my-1 border-gray-100" />
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start px-4 py-2.5 h-auto text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-3" />
            로그아웃
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}