import React from "react";
import { classNames } from "../../util/class-names";

export interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export const PageTitle = ({ children, className }: TitleProps) => {
    return <h3 className={classNames("headline-700 text-black", className)}>{children}</h3>;
};
