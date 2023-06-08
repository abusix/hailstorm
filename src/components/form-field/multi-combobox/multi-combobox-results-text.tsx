import React from 'react';

export interface MultiComboboxResultsTextProps {
    children: React.ReactNode;
}

export const MultiComboboxResultsText = ({ children }: MultiComboboxResultsTextProps) => {
    return <div className="paragraph-100">{children}</div>;
};
