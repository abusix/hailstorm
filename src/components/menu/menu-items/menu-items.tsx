import type { ReactNode } from 'react'
import { MenuItems as HeadlessUiMenuItems } from '@headlessui/react'

export interface MenuItemsProps {
  children: ReactNode
}
export const MenuItems = ({ children }: MenuItemsProps) => {
  return (
    <HeadlessUiMenuItems className='bg-neutral-0 absolute right-0 z-10 mt-2 flex w-52 flex-col rounded-md py-2 shadow-md outline-hidden'>
      {children}
    </HeadlessUiMenuItems>
  )
}
