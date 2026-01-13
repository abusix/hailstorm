import React from "react";

export interface SidebarHeaderProps {
    children: React.ReactNode;
}

export const SidebarHeader = ({ children }: SidebarHeaderProps) => {
    return <h2 className="font-display text-text-inverse pl-4 text-2xl font-bold">{children}</h2>;
};
