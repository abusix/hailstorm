import type { ReactNode } from 'react'
import { ComboboxOption as HeadlessUiComboboxOption } from '@headlessui/react'
import { SmallTickIcon } from '../../../icons'

export interface MultiComboboxOptionProps<TValue> {
  value: TValue
  children: ReactNode
}

export const MultiComboboxOption = <TValue,>({
  value,
  children,
}: MultiComboboxOptionProps<TValue>) => {
  return (
    <HeadlessUiComboboxOption
      value={value}
      className='ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-selected:ui-active:bg-primary-100 relative flex cursor-pointer items-center px-3 py-2'
    >
      {children}
      <div className='fill-primary-500 ui-selected:flex absolute inset-y-0 right-3 hidden items-center'>
        <SmallTickIcon />
      </div>
    </HeadlessUiComboboxOption>
  )
}
