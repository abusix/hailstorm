import React from 'react';

interface FormFieldAttachedFieldsGroupProps {
    children: React.ReactNode;
}

export const FormFieldGroup = ({ children }: FormFieldAttachedFieldsGroupProps) => {
    return <div className="form-field-group group flex w-full flex-row">{children}</div>;
};
