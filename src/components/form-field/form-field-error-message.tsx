import React from "react";
import { WarningSignIcon } from "../../icons";

export interface FormFieldErrorMessageProps {
    children: React.ReactNode;
}

export const FormFieldErrorMessage = ({ children }: FormFieldErrorMessageProps) => {
    return (
        <div className="mt-0.5 flex items-center gap-1">
            <WarningSignIcon className="fill-icon-danger h-3 w-3" />
            <p className="paragraph-100 text-text-danger">{children}</p>
        </div>
    );
};
