import React from "react";

export interface MultiComboboxResultsBadgesProps {
    children: React.ReactNode;
}

export const MultiComboboxResultsBadges = ({ children }: MultiComboboxResultsBadgesProps) => {
    return <div className="flex flex-wrap gap-2">{children}</div>;
};
