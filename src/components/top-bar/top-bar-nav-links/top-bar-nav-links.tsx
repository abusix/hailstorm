import React from "react";
import { classNames } from "../../../util/class-names";

export interface TopBarNavLinksProps {
    children: React.ReactNode;
    className?: string;
}

export const TopBarNavLinks = ({ children, className }: TopBarNavLinksProps) => {
    return <div className={classNames("flex grow gap-12 pl-20 pr-6", className)}>{children}</div>;
};
