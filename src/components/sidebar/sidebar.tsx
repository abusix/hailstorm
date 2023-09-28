import React from "react";
import { SidebarHeader } from "./sidebar-header/sidebar-header";
import { SidebarMenu } from "./sidebar-menu/sidebar-menu";
import { SidebarMenuHeader } from "./sidebar-menu/sidebar-menu-header/sidebar-menu-header";
import { SidebarMenuLink } from "./sidebar-menu/sidebar-menu-link/sidebar-menu-link";
import { classNames } from "../../util/class-names";

interface SidebarProps {
    children: React.ReactNode;
    className?: string;
}
const Sidebar = ({ children, className }: SidebarProps) => {
    return (
        <div className={classNames("flex min-w-[13rem] flex-col gap-5 py-5", className)}>
            {children}
        </div>
    );
};

Sidebar.Header = SidebarHeader;
Sidebar.Menu = SidebarMenu;
Sidebar.MenuHeader = SidebarMenuHeader;
Sidebar.MenuLink = SidebarMenuLink;

export { Sidebar };
