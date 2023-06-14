import React from "react";

export interface SingleComboboxEmptyOptionProps {
    children: React.ReactNode;
}

export const SingleComboboxEmptyOption = ({ children }: SingleComboboxEmptyOptionProps) => {
    return <div className="px-3 py-2 ui-selected:bg-primary-100">{children}</div>;
};
