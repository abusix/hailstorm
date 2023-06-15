import React from "react";

export interface FormFieldLabelGroupProps {
    children: React.ReactNode;
}

export const FormFieldLabelGroup = ({ children }: FormFieldLabelGroupProps) => {
    return <div className="mb-2 flex flex-col gap-1">{children}</div>;
};
