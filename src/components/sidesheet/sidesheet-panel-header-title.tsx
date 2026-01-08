import type { ReactNode } from 'react'
import { DialogTitle as HeadlessUiDialogTitle } from '@headlessui/react'

export interface PanelHeaderTitleProps {
  children: ReactNode
}

export const SidesheetPanelHeaderTitle = ({
  children,
}: PanelHeaderTitleProps) => {
  return (
    <HeadlessUiDialogTitle className='headline-600'>
      {children}
    </HeadlessUiDialogTitle>
  )
}
