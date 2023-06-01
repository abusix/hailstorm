import React from 'react';

interface FormFieldAttachedFieldsGroupProps {
  children: React.ReactNode;
}

export const FormFieldAttachedFieldsGroup = ({ children }: FormFieldAttachedFieldsGroupProps) => {
  return <div className="attached-form-fields group w-full flex flex-row">{children}</div>;
};
