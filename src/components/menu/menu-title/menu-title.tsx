import React from "react";

export interface MenuTitleProps {
    children: string;
}

export const MenuTitle = ({ children }: MenuTitleProps) => {
    return (
        <div className="px-4 pb-2 pt-3 font-sans text-xs font-medium uppercase text-neutral-700">
            {children}
        </div>
    );
};
