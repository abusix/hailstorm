import React from "react";
import { classNames } from "../../../util/class-names";

export interface MenuTitleProps {
    children: string;
    className?: string;
}

export const MenuTitle = ({ children, className }: MenuTitleProps) => {
    return (
        <div
            className={classNames(
                "px-4 pb-2 pt-3 font-sans text-xs font-medium uppercase text-neutral-700",
                className
            )}
        >
            {children}
        </div>
    );
};
