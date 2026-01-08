import type { ReactNode } from 'react'

export interface SidesheetPanelHeaderActionGroupProps {
  children: ReactNode
}

export const SidesheetPanelHeaderActionGroup = ({
  children,
}: SidesheetPanelHeaderActionGroupProps) => {
  return <div className='flex gap-4'>{children}</div>
}
