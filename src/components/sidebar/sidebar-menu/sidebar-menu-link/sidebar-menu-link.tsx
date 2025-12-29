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
                "relative px-4 py-3 font-sans text-sm text-text-base hover:bg-bg-muted active:bg-bg-subtle",
                isActive &&
                    "bg-primary-100 text-primary-400 before:bg-primary-400 hover:bg-primary-100 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[3px] before:rounded-r-md"
            )}
        >
            {children}
        </div>
    );
};
