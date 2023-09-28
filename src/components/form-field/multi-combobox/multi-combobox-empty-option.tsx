import React from "react";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxEmptyOptionProps {
    children: React.ReactNode;
    className?: string;
}

export const MultiComboboxEmptyOption = ({
    children,
    className,
}: MultiComboboxEmptyOptionProps) => {
    return (
        <div className={classNames("px-3 py-2 ui-selected:bg-primary-100", className)}>
            {children}
        </div>
    );
};
