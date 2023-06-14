import React from "react";

export interface TTrayButtonsProps {
    children: React.ReactNode;
}

export const TrayButtons = ({ children }: TTrayButtonsProps) => {
    return <div className="flex items-center gap-2 px-2">{children}</div>;
};
