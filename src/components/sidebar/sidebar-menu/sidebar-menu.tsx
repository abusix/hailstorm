import React from "react";

export interface SidebarMenuProps {
    children: React.ReactNode;
}

export const SidebarMenu = ({ children }: SidebarMenuProps) => {
    return <div className="text-text-inverse flex flex-col">{children}</div>;
};
