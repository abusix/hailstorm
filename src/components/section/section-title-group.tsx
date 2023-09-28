import React from "react";
import { classNames } from "../../util/class-names";

export interface SectionTitleGroupProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionTitleGroup = ({ children, className }: SectionTitleGroupProps) => {
    return <div className={classNames("flex flex-col gap-2", className)}>{children}</div>;
};
