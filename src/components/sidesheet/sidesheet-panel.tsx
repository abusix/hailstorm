import type { ReactNode } from 'react'
import { DialogPanel as HeadlessUiDialogPanel } from '@headlessui/react'

export interface SidesheetPanelProps {
  children: ReactNode
}

export const SidesheetPanel = ({ children }: SidesheetPanelProps) => {
  return <HeadlessUiDialogPanel>{children}</HeadlessUiDialogPanel>
}
