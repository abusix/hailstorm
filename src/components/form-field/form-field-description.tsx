import React from 'react';

export interface FormFieldDescriptionProps {
    id: string;
    children: React.ReactNode;
}

export const FormFieldDescription = ({ id, children }: FormFieldDescriptionProps) => {
    return (
        <p id={`${id}-description`} className="paragraph-100 text-neutral-700">
            {children}
        </p>
    );
};
