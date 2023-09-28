import React from "react";
import { classNames } from "../../../util/class-names";

export interface SidebarMenuProps {
    children: React.ReactNode;
    className?: string;
}

export const SidebarMenu = ({ children, className }: SidebarMenuProps) => {
    return <div className={classNames("flex flex-col", className)}>{children}</div>;
};
