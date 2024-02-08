'use client'

import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { RiPhoneFindLine } from 'react-icons/ri'
import { AiOutlineLike } from 'react-icons/ai'
import { DialogCloseProps } from '@radix-ui/react-dialog'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  DrawerClose?: React.ForwardRefExoticComponent<
    DialogCloseProps & React.RefAttributes<HTMLButtonElement>
  >
}

export function Sidebar({ className, DrawerClose }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const isOnHomePage = pathname === '/'
  const isOnLikedPage = pathname === '/liked'

  function handleClickHome() {
    router.push('/')
  }

  function handleClickLiked() {
    router.push('/liked')
  }

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant={isOnHomePage ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={handleClickHome}
            >
              {DrawerClose ? (
                <DrawerClose className="flex items-center w-full">
                  <RiPhoneFindLine className="mr-2" />
                  Discover
                </DrawerClose>
              ) : (
                <>
                  <RiPhoneFindLine className="mr-2" />
                  Discover
                </>
              )}
            </Button>
            <Button
              variant={isOnLikedPage ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={handleClickLiked}
            >
              {DrawerClose ? (
                <DrawerClose className="flex items-center w-full">
                  <AiOutlineLike className="mr-2" />
                  Liked
                </DrawerClose>
              ) : (
                <>
                  <AiOutlineLike className="mr-2" />
                  Liked
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
