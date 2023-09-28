import React from "react";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxResultsBadgesProps {
    children: React.ReactNode;
    className?: string;
}

export const MultiComboboxResultsBadges = ({
    children,
    className,
}: MultiComboboxResultsBadgesProps) => {
    return <div className={classNames("flex flex-wrap gap-2", className)}>{children}</div>;
};
