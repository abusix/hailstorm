import type { ReactNode } from 'react'
import { ComboboxOptions as HeadlessUiComboboxOptions } from '@headlessui/react'

export interface SingleComboboxOptionsProps {
  children: ReactNode
}

export const SingleComboboxOptions = ({
  children,
}: SingleComboboxOptionsProps) => {
  return (
    <HeadlessUiComboboxOptions
      hold
      className='bg-neutral-0 absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 shadow-md ring-0 outline-hidden'
    >
      {children}
    </HeadlessUiComboboxOptions>
  )
}
