'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from './button'

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './drawer'
import { Sidebar } from '../sidebar'

export const MenuMobile = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="xl:hidden flex">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Menu mobile</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <Sidebar DrawerClose={DrawerClose} />
      </DrawerContent>
    </Drawer>
  )
}
