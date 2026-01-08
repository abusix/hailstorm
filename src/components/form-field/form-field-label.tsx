import type { ReactNode } from 'react'

export interface FormFieldLabelProps {
  htmlFor: string
  children: ReactNode
  optional?: boolean
}

export const FormFieldLabel = ({
  htmlFor,
  children,
  optional,
}: FormFieldLabelProps) => {
  return (
    <div className='flex items-baseline gap-1 text-neutral-800'>
      <label htmlFor={htmlFor} className='headline-400'>
        {children}
      </label>

      {optional ?
        <div className='paragraph-100'>(Optional)</div>
      : null}
    </div>
  )
}
