import type { ReactNode } from 'react'

export interface SectionPanelProps {
  children: ReactNode
}

/**
 * @deprecated Use the dedicated Panel component
 * Delete me on version 3
 */
export const SectionPanel = ({ children }: SectionPanelProps) => {
  return (
    <div className='bg-neutral-0 relative rounded-sm border border-neutral-300 p-5'>
      {children}
    </div>
  )
}
