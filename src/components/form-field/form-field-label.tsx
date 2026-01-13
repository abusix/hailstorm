import React from "react";

export interface FormFieldLabelProps {
    htmlFor: string;
    children: React.ReactNode;
    optional?: boolean;
}

export const FormFieldLabel = ({ htmlFor, children, optional }: FormFieldLabelProps) => {
    return (
        <div className="text-text-primary flex items-baseline gap-1">
            <label htmlFor={htmlFor} className="headline-400">
                {children}
            </label>

            {optional ? <div className="paragraph-100">(Optional)</div> : null}
        </div>
    );
};
