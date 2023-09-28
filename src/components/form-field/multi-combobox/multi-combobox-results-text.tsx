import React from "react";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxResultsTextProps {
    children: React.ReactNode;
    className?: string;
}

export const MultiComboboxResultsText = ({
    children,
    className,
}: MultiComboboxResultsTextProps) => {
    return <div className={classNames("paragraph-100", className)}>{children}</div>;
};
