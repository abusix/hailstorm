import React from "react";

export interface SingleComboboxEmptyOptionProps {
    children: React.ReactNode;
}

export const SingleComboboxEmptyOption = ({ children }: SingleComboboxEmptyOptionProps) => {
    return <div className="ui-selected:bg-primary-100 px-3 py-2">{children}</div>;
};
