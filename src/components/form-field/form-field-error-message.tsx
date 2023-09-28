import React from "react";
import { WarningSignIcon } from "../../icons";
import { classNames } from "../../util/class-names";

export interface FormFieldErrorMessageProps {
    children: React.ReactNode;
    className?: string;
}

export const FormFieldErrorMessage = ({ children, className }: FormFieldErrorMessageProps) => {
    return (
        <div className={classNames("mt-0.5 flex items-center gap-1", className)}>
            <WarningSignIcon className="h-3 w-3 fill-danger-500" />
            <p className="paragraph-100 text-danger-500 ">{children}</p>
        </div>
    );
};
