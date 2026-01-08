import type { ReactNode } from 'react'
import { ComboboxOptions as HeadlessUiComboboxOptions } from '@headlessui/react'
import { classNames } from '../../../util/class-names'

export interface MultiComboboxOptionsProps {
  children: ReactNode
  className?: string
}

const MultiComboboxOptions = ({
  children,
  className,
}: MultiComboboxOptionsProps) => {
  return (
    <HeadlessUiComboboxOptions
      hold
      className={classNames(
        'bg-neutral-0 absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 shadow-md ring-0 outline-hidden',
        className,
      )}
    >
      {children}
    </HeadlessUiComboboxOptions>
  )
}

export { MultiComboboxOptions }
