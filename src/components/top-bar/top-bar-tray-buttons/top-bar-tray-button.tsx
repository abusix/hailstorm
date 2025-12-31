import React from "react";

export interface TrayButtonProps {
    id?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export const TrayButton = ({ onClick, id, children }: TrayButtonProps) => {
    return (
        <div
            role="button"
            id={id}
            tabIndex={-1}
            onClick={onClick}
            onKeyDown={onClick}
            className="hover:bg-sidebar-bg-hover focus:ring-border-brand cursor-pointer rounded-sm p-3 focus:ring-2 focus:outline-hidden"
        >
            {children}
        </div>
    );
};
