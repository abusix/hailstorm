import type { ChangeEvent } from 'react'
import {
  ComboboxInputProps,
  ComboboxButton as HeadlessUiComboboxButton,
  ComboboxInput as HeadlessUiComboboxInput,
} from '@headlessui/react'
import { CaretDownIcon } from '../../../icons'
import { classNames } from '../../../util/class-names'

export interface MultiComboboxInputProps extends Omit<
  ComboboxInputProps,
  'displayValue'
> {
  id: string
  displayValue: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  showButton?: boolean
}

export const MultiComboboxInput = ({
  id,
  displayValue,
  placeholder,
  onChange,
  showButton = true,
  disabled = false,
  ...props
}: MultiComboboxInputProps) => {
  return (
    <div className='relative'>
      <HeadlessUiComboboxInput
        id={id}
        name={id}
        placeholder={placeholder}
        displayValue={() => displayValue}
        onChange={onChange}
        className={classNames(
          'paragraph-100 focus-visible:border-primary-400 focus-visible:ring-primary-200 flex h-8 w-full items-center rounded-sm border border-neutral-400 py-2 pr-8 pl-3 focus-visible:ring-2',
          disabled &&
            'cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-600 hover:border-neutral-300',
        )}
        {...props}
      />
      {showButton && !disabled ?
        <HeadlessUiComboboxButton className='absolute inset-y-0 right-0 flex items-center px-1.5'>
          <div className='flex h-5 w-5 items-center justify-center rounded-sm rounded-r-md bg-neutral-100'>
            <CaretDownIcon
              name='caret-down'
              className='h-3 w-3 fill-neutral-600'
              aria-hidden='true'
            />
          </div>
        </HeadlessUiComboboxButton>
      : null}
    </div>
  )
}
