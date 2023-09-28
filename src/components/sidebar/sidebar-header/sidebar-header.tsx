import React from "react";
import { classNames } from "../../../util/class-names";

export interface SidebarHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const SidebarHeader = ({ children, className }: SidebarHeaderProps) => {
    return (
        <h2 className={classNames("pl-4 font-display text-2xl font-bold", className)}>
            {children}
        </h2>
    );
};
