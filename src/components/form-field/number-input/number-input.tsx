import type { ChangeEvent, ElementType } from 'react'
import { classNames } from '../../../util/class-names'

const textAlignVariants = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export interface NumberInputProps {
  id: string
  placeholder: string
  value: number
  textAlign?: keyof typeof textAlignVariants
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  readOnly?: boolean
  ariaDescribedBy: string
  LeftIcon?: ElementType
  error?: boolean
  disabled?: boolean
  min?: number
  max?: number
}

export const NumberInput = ({
  id,
  placeholder,
  value,
  min,
  max,
  onChange,
  ariaDescribedBy,
  LeftIcon,
  textAlign = 'left',
  readOnly,
  error,
  disabled,
}: NumberInputProps) => {
  return (
    <div className='relative w-full'>
      {LeftIcon ?
        <div
          className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'
          aria-hidden='true'
        >
          <LeftIcon className='h-4 w-4 fill-neutral-600 text-gray-400' />
        </div>
      : null}

      <input
        id={id}
        name={id}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby={ariaDescribedBy}
        type='number'
        min={min}
        max={max}
        className={classNames(
          'paragraph-100 block w-full rounded-sm border border-neutral-400 py-2 pr-2 pl-3 text-neutral-800 placeholder:text-neutral-600 focus:outline-hidden',
          textAlignVariants[textAlign],
          LeftIcon && 'pl-9',
          readOnly && 'bg-neutral-100',
          disabled && 'cursor-not-allowed bg-neutral-100 text-neutral-600',
          !error &&
            !disabled &&
            'focus:border-primary-400 focus:ring-primary-200 hover:border-neutral-600 focus:ring-2',
          error && !disabled && 'border-danger-500',
        )}
        disabled={disabled}
      />
    </div>
  )
}
