import React from "react";
import { classNames } from "../../util/class-names";

export interface FormFieldLabelProps {
    htmlFor: string;
    children: React.ReactNode;
    optional?: boolean;
    className?: string;
}

export const FormFieldLabel = ({ htmlFor, children, optional, className }: FormFieldLabelProps) => {
    return (
        <div className={classNames("flex items-baseline gap-1", className)}>
            <label htmlFor={htmlFor} className="headline-400 text-neutral-800">
                {children}
            </label>

            {optional ? <div className="paragraph-100">(Optional)</div> : null}
        </div>
    );
};
