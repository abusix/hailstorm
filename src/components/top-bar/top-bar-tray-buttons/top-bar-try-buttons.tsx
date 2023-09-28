import React from "react";
import { classNames } from "../../../util/class-names";

export interface TTrayButtonsProps {
    children: React.ReactNode;
    className?: string;
}

export const TrayButtons = ({ children, className }: TTrayButtonsProps) => {
    return <div className={classNames("flex items-center gap-2 px-2", className)}>{children}</div>;
};
