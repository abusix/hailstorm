import type { ReactNode } from 'react'
import { MenuButton as HeadlessUiMenuButton } from '@headlessui/react'

export interface MenuButtonProps {
  children: ReactNode
  className?: string
}

export const MenuButton = ({ children, className }: MenuButtonProps) => {
  return (
    <HeadlessUiMenuButton as='div' className={className}>
      {children}
    </HeadlessUiMenuButton>
  )
}
