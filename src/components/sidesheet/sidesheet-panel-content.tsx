import React from "react";
import { classNames } from "../../util/class-names";

export interface SidesheetPanelContentProps {
    children: React.ReactNode;
    className?: string;
}

export const SidesheetPanelContent = ({ children, className }: SidesheetPanelContentProps) => {
    return <div className={classNames("px-8 py-6", className)}>{children}</div>;
};
