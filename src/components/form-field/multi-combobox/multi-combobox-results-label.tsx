import React from "react";

export interface MultiComboboxResultsLabelProps {
    children: React.ReactNode;
}

export const MultiComboboxResultsLabel = ({ children }: MultiComboboxResultsLabelProps) => {
    return <div className="paragraph-100 mt-2 text-neutral-900">{children}</div>;
};
