import type { ReactNode } from 'react'
import { SidesheetPanelHeaderActionGroup } from './sidesheet-panel-header-action-group'
import { SidesheetPanelHeaderTitle } from './sidesheet-panel-header-title'

export interface SidesheetPanelHeaderProps {
  children: ReactNode
}

const SidesheetPanelHeader = ({ children }: SidesheetPanelHeaderProps) => {
  return (
    <>
      <div className='flex items-center justify-between gap-2 px-8 py-5'>
        {children}
      </div>
      <hr className='border-neutral-300' />
    </>
  )
}

SidesheetPanelHeader.Title = SidesheetPanelHeaderTitle
SidesheetPanelHeader.ActionGroup = SidesheetPanelHeaderActionGroup

export { SidesheetPanelHeader }
