import React from "react";
import { classNames } from "../../util/class-names";

export interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
    return <h4 className={classNames("headline-500 text-neutral-900", className)}>{children}</h4>;
};
