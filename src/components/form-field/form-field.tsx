import { FormFieldDescription } from "./form-field-description";
import { FormFieldErrorMessage } from "./form-field-error-message";
import { FormFieldLabel } from "./form-field-label";
import { FormFieldLabelGroup } from "./form-field-label-group";
import { RadioInput } from "./radio-input/radio-input";
import { TextInput } from "./text-input/text-input";
import { Textarea } from "./textarea/textarea";
import { NumberInput } from "./number-input/number-input";
import { Listbox } from "./listbox/listbox";
import { MultiCombobox } from "./multi-combobox/multi-combobox";
import { SingleCombobox } from "./single-combobox/single-combobox";
import React from "react";

interface FormFieldProps {
  children: React.ReactNode;
}

const FormField = ({ children }: FormFieldProps) => {
  return <div className="w-full">{children}</div>;
};

FormField.LabelGroup = FormFieldLabelGroup;
FormField.Label = FormFieldLabel;
FormField.Description = FormFieldDescription;
FormField.ErrorMessage = FormFieldErrorMessage;
FormField.TextInput = TextInput;
FormField.Textarea = Textarea;
FormField.RadioInput = RadioInput;
FormField.NumberInput = NumberInput;
FormField.Listbox = Listbox;
FormField.MultiCombobox = MultiCombobox;
FormField.SingleCombobox = SingleCombobox;

export { FormField };
