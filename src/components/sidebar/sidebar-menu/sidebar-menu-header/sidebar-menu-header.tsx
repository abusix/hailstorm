import React from "react";

export interface SidebarMenuHeaderProps {
    children: React.ReactNode;
}

export const SidebarMenuHeader = ({ children }: SidebarMenuHeaderProps) => {
    return (
        <h3 className="text-text-inverse/70 px-4 py-2 text-[0.7rem] font-semibold uppercase">
            {children}
        </h3>
    );
};
