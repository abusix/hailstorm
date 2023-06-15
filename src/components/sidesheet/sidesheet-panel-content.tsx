import React from "react";

export interface SidesheetPanelContentProps {
    children: React.ReactNode;
}

export const SidesheetPanelContent = ({ children }: SidesheetPanelContentProps) => {
    return <div className="px-8 py-6">{children}</div>;
};
