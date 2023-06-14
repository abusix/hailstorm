import React from "react";

export interface SidesheetPanelHeaderActionGroupProps {
    children: React.ReactNode;
}

export const SidesheetPanelHeaderActionGroup = ({
    children,
}: SidesheetPanelHeaderActionGroupProps) => {
    return <div className="flex gap-4 ">{children}</div>;
};
