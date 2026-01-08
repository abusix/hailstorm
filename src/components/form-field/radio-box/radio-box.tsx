import type { ReactNode } from 'react'
import { RadioGroup as HeadlessUiRadioGroup } from '@headlessui/react'
import { RadioBoxOption } from './radio-box-option'

export interface RadioBoxProps {
  id: string
  children: ReactNode
  value: string
  onChange: (value: string) => void
  className?: string
}

export const RadioBox = ({
  id,
  value,
  children,
  onChange,
  className,
}: RadioBoxProps) => {
  return (
    <HeadlessUiRadioGroup
      id={id}
      value={value}
      onChange={onChange}
      className={className}
    >
      {children}
    </HeadlessUiRadioGroup>
  )
}

RadioBox.Option = RadioBoxOption
