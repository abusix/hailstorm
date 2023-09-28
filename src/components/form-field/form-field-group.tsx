import React from "react";
import { classNames } from "../../util/class-names";

export interface FormFieldGroupProps {
    children: React.ReactNode;
    className?: string;
}

export const FormFieldGroup = ({ children, className }: FormFieldGroupProps) => {
    return (
        <div className={classNames("form-field-group group flex w-full flex-row", className)}>
            {children}
        </div>
    );
};
