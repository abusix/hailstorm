import React from "react";
import { classNames } from "../../util/class-names";

export interface SidesheetPanelHeaderActionGroupProps {
    children: React.ReactNode;
    className?: string;
}

export const SidesheetPanelHeaderActionGroup = ({
    children,
    className,
}: SidesheetPanelHeaderActionGroupProps) => {
    return <div className={classNames("flex gap-4", className)}>{children}</div>;
};
