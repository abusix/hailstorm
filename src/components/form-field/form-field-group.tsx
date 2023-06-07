import React from 'react';

interface FormFieldAttachedFieldsGroupProps {
  children: React.ReactNode;
}

export const FormFieldGroup = ({ children }: FormFieldAttachedFieldsGroupProps) => {
  return <div className="form-field-group group w-full flex flex-row">{children}</div>;
};
