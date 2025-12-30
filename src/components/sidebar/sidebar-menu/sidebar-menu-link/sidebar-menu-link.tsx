import React from "react";
import { classNames } from "../../../../util/class-names";

export interface SidebarMenuLinkProps {
    isActive?: boolean;
    children: React.ReactNode;
}

export const SidebarMenuLink = ({ isActive, children }: SidebarMenuLinkProps) => {
    return (
        <div
            className={classNames(
                "relative px-4 py-3 font-sans text-sm text-text-primary hover:bg-bg-secondary-hover active:bg-bg-secondary-pressed",
                isActive &&
                    "bg-bg-primary-selected text-text-brand before:bg-brand-light-purple-400 hover:bg-bg-primary-selected before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-0.75 before:rounded-r-md"
            )}
        >
            {children}
        </div>
    );
};
