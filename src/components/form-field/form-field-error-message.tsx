import React from "react";
import { WarningSignIcon } from "../../icons";

export interface FormFieldErrorMessageProps {
    children: React.ReactNode;
}

export const FormFieldErrorMessage = ({ children }: FormFieldErrorMessageProps) => {
    return (
        <div className="mt-0.5 flex items-center gap-1">
            <WarningSignIcon className="h-3 w-3 fill-danger-500" />
            <p className="paragraph-100 text-danger-500">{children}</p>
        </div>
    );
};
