import React from "react";

export interface PopoverMenuPanelTitleProps {
    children: React.ReactNode;
}

export const PopoverMenuPanelTitle = ({ children }: PopoverMenuPanelTitleProps) => {
    return (
        <p className="px-4 pt-3 pb-2 text-xs font-normal text-neutral-700 uppercase">{children}</p>
    );
};
