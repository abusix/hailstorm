import type { ElementType } from 'react'
import { ReactNode } from 'react'

export interface ListboxTextOptionProps {
  children: ReactNode
  LeftIcon?: ElementType
}

export const ListboxTextOption = ({
  children,
  LeftIcon,
}: ListboxTextOptionProps) => {
  return (
    <div className='flex items-center gap-2'>
      {LeftIcon ?
        <LeftIcon className='ui-selected:fill-primary-500 h-3 w-3 fill-neutral-500' />
      : null}

      <div className='paragraph-100'>{children}</div>
    </div>
  )
}
