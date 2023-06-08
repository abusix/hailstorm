import React from 'react';

export interface SidebarMenuProps {
    children: React.ReactNode;
}

export const SidebarMenu = ({ children }: SidebarMenuProps) => {
    return <div className="flex flex-col">{children}</div>;
};
