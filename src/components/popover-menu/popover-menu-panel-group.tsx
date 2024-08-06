import React from "react";

export interface PopoverMenuGroupProps {
    children: React.ReactNode;
}

export const PopoverMenuPanelGroup = ({ children }: PopoverMenuGroupProps) => {
    return <div className="flex flex-col">{children}</div>;
};
