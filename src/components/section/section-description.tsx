import React from "react";
import { classNames } from "../../util/class-names";

export interface DescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionDescription = ({ children, className }: DescriptionProps) => {
    return <p className={classNames("paragraph-200 text-neutral-800", className)}>{children}</p>;
};
