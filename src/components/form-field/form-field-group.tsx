import React from 'react';

export interface FormFieldGroupProps {
    children: React.ReactNode;
}

export const FormFieldGroup = ({ children }: FormFieldGroupProps) => {
    return <div className="form-field-group group flex w-full flex-row">{children}</div>;
};
