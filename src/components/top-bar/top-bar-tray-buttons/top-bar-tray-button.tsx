import type { ReactNode } from 'react'

export interface TrayButtonProps {
  id?: string
  onClick?: () => void
  children: ReactNode
}

export const TrayButton = ({ onClick, id, children }: TrayButtonProps) => {
  return (
    <div
      role='button'
      id={id}
      tabIndex={-1}
      onClick={onClick}
      onKeyDown={onClick}
      className='hover:bg-primary-900 focus:ring-primary-200 cursor-pointer rounded-sm p-3 focus:ring-2 focus:outline-hidden'
    >
      {children}
    </div>
  )
}
