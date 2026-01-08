import { createContext, useContext } from 'react'

export type TabType = 'primary' | 'secondary'

interface TabContextProps {
  type: TabType
}

const TabContext = createContext<TabContextProps>({ type: 'primary' })

function useTabContext() {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error(
      `Tab compound components cannot be rendered outside the Tab component`,
    )
  }
  return context
}

export { TabContext, useTabContext }
