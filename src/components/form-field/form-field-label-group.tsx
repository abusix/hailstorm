import React from "react";
import { classNames } from "../../util/class-names";

export interface FormFieldLabelGroupProps {
    children: React.ReactNode;
    className?: string;
}

export const FormFieldLabelGroup = ({ children, className }: FormFieldLabelGroupProps) => {
    return <div className={classNames("mb-2 flex flex-col gap-1", className)}>{children}</div>;
};
