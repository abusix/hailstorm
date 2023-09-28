import React from "react";
import { classNames } from "../../../util/class-names";

export interface SingleComboboxEmptyOptionProps {
    children: React.ReactNode;
    className?: string;
}

export const SingleComboboxEmptyOption = ({
    children,
    className,
}: SingleComboboxEmptyOptionProps) => {
    return (
        <div className={classNames("px-3 py-2 ui-selected:bg-primary-100", className)}>
            {children}
        </div>
    );
};
