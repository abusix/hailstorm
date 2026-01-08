import type { ReactNode } from 'react'

export interface FormFieldGroupProps {
  children: ReactNode
}

export const FormFieldGroup = ({ children }: FormFieldGroupProps) => {
  return (
    <div className='form-field-group group flex w-full flex-row'>
      {children}
    </div>
  )
}
