import React from "react";

interface PopoverMenuPanelTitleProps {
    children: React.ReactNode;
}

export const PopoverMenuPanelTitle = ({ children }: PopoverMenuPanelTitleProps) => {
    return (
        <p className="px-4 pb-2 pt-3 text-xs font-normal uppercase text-neutral-700">{children}</p>
    );
};
