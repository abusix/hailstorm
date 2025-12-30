import React from "react";

export interface SidebarHeaderProps {
    children: React.ReactNode;
}

export const SidebarHeader = ({ children }: SidebarHeaderProps) => {
    return <h2 className="font-display pl-4 text-2xl font-bold text-text-primary">{children}</h2>;
};
