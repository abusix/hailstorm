import type { ReactNode } from 'react'
import { TabPanels as HeadlessUiTabPanels } from '@headlessui/react'

export interface TabPanelsProps {
  children: ReactNode
  className?: string
}

export const TabPanels = ({ children, className }: TabPanelsProps) => {
  return (
    <HeadlessUiTabPanels className={className}>{children}</HeadlessUiTabPanels>
  )
}
