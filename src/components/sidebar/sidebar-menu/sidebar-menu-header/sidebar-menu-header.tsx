import React from "react";
import { classNames } from "../../../../util/class-names";

export interface SidebarMenuHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const SidebarMenuHeader = ({ children, className }: SidebarMenuHeaderProps) => {
    return (
        <h3
            className={classNames(
                "px-4 py-2 text-[0.7rem] font-semibold uppercase text-neutral-700",
                className
            )}
        >
            {children}
        </h3>
    );
};
