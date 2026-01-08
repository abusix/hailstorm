import type { ReactNode } from 'react'
import { TabList as HeadlessUiTabList } from '@headlessui/react'
import { classNames } from '../../util/class-names'
import { TabType, useTabContext } from './tab-context'

export interface TabListProps {
  children: ReactNode
}

const listVariants: Record<TabType, string> = {
  primary: 'gap-5 pb-2',
  secondary: 'gap-2',
}

export const TabList = ({ children }: TabListProps) => {
  const { type } = useTabContext()

  return (
    <HeadlessUiTabList className={classNames('flex', listVariants[type])}>
      {children}
    </HeadlessUiTabList>
  )
}
