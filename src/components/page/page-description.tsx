import React from "react";
import { classNames } from "../../util/class-names";

export interface PageDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const PageDescription = ({ children, className }: PageDescriptionProps) => {
    return <p className={classNames("paragraph-200 text-neutral-800", className)}>{children}</p>;
};
