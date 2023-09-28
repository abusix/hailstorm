import React from "react";
import { classNames } from "../../util/class-names";

export interface FormFieldDescriptionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export const FormFieldDescription = ({ id, children, className }: FormFieldDescriptionProps) => {
    return (
        <p
            id={`${id}-description`}
            className={classNames("paragraph-100 text-neutral-700", className)}
        >
            {children}
        </p>
    );
};
