import type { ReactNode } from 'react'
import { FormFieldDescription } from './form-field-description'
import { FormFieldErrorMessage } from './form-field-error-message'
import { FormFieldLabel } from './form-field-label'
import { FormFieldLabelGroup } from './form-field-label-group'
import { RadioInput } from './radio-input/radio-input'
import { TextInput } from './text-input/text-input'
import { Textarea } from './textarea/textarea'
import { NumberInput } from './number-input/number-input'
import { Listbox } from './listbox/listbox'
import { MultiCombobox } from './multi-combobox/multi-combobox'
import { SingleCombobox } from './single-combobox/single-combobox'
import { FormFieldGroup } from './form-field-group'
import { SearchInput } from './search-input/search-input'
import { RadioBox } from './radio-box/radio-box'

interface FormFieldProps {
  children: ReactNode
}

const FormField = ({ children }: FormFieldProps) => {
  return <div className='w-full'>{children}</div>
}

FormField.LabelGroup = FormFieldLabelGroup
FormField.Label = FormFieldLabel
FormField.Description = FormFieldDescription
FormField.ErrorMessage = FormFieldErrorMessage
FormField.TextInput = TextInput
FormField.Textarea = Textarea
FormField.RadioInput = RadioInput
FormField.NumberInput = NumberInput
FormField.Listbox = Listbox
FormField.MultiCombobox = MultiCombobox
FormField.SingleCombobox = SingleCombobox
FormField.Group = FormFieldGroup
FormField.SearchInput = SearchInput
FormField.RadioBox = RadioBox

export { FormField }
