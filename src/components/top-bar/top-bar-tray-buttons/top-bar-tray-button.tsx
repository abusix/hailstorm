import React from "react";
import { classNames } from "../../../util/class-names";

export interface TrayButtonProps {
    id?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const TrayButton = ({ onClick, id, children, className }: TrayButtonProps) => {
    return (
        <div
            role="button"
            id={id}
            tabIndex={-1}
            onClick={onClick}
            onKeyDown={onClick}
            className={classNames(
                "cursor-pointer rounded p-3 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",
                className
            )}
        >
            {children}
        </div>
    );
};
