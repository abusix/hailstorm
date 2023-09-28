import React from "react";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxResultsTagsProps {
    children: React.ReactNode;
    className?: string;
}

export const MultiComboboxResultsTags = ({
    children,
    className,
}: MultiComboboxResultsTagsProps) => {
    return <div className={classNames("flex flex-wrap gap-2", className)}>{children}</div>;
};
