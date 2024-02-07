'use client'

import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { RiPhoneFindLine } from 'react-icons/ri'
import { AiOutlineLike } from 'react-icons/ai'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const isOnHomePage = pathname === '/'
  const isOnLikedPage = pathname === '/liked'

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant={isOnHomePage ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => router.push('/')}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg> */}
              <RiPhoneFindLine className="mr-2" />
              Discover
            </Button>
            <Button
              variant={isOnLikedPage ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => router.push('/liked')}
            >
              <AiOutlineLike className="mr-2" />
              Liked
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
