import React from "react";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxResultsLabelProps {
    children: React.ReactNode;
    className?: string;
}

export const MultiComboboxResultsLabel = ({
    children,
    className,
}: MultiComboboxResultsLabelProps) => {
    return (
        <div className={classNames("paragraph-100 mt-2 text-neutral-900", className)}>
            {children}
        </div>
    );
};
