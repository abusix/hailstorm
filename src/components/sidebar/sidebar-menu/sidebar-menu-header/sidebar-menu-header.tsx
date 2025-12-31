import React from "react";

export interface SidebarMenuHeaderProps {
    children: React.ReactNode;
}

export const SidebarMenuHeader = ({ children }: SidebarMenuHeaderProps) => {
    return (
        <h3 className="px-4 py-2 text-[0.7rem] font-semibold text-text-inverse/70 uppercase">
            {children}
        </h3>
    );
};
