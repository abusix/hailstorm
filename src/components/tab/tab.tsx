import type { ElementType, ReactNode } from 'react'
import { useMemo } from 'react'
import {
  TabGroup as HeadlessUiTabGroup,
  TabGroupProps,
} from '@headlessui/react'
import { TabButton } from './tab-button'
import { TabContext, TabType } from './tab-context'
import { TabList } from './tab-list'
import { TabPanel } from './tab-panel'
import { TabPanels } from './tab-panels'

interface TabProps extends TabGroupProps<ElementType> {
  type?: TabType
  children: ReactNode
}

const Tab = ({ type = 'primary', children, ...props }: TabProps) => {
  const value = useMemo(() => ({ type }), [type])

  return (
    <TabContext.Provider value={value}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <HeadlessUiTabGroup {...props}>{children}</HeadlessUiTabGroup>
    </TabContext.Provider>
  )
}

Tab.List = TabList
Tab.Button = TabButton
Tab.Panels = TabPanels
Tab.Panel = TabPanel

export { Tab }
