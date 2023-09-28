import React from "react";
import { classNames } from "../../../util/class-names";

export interface MenuSeparatorProps {
    className?: string;
}

export const MenuSeparator = ({ className }: MenuSeparatorProps) => {
    return <hr className={classNames("h-px border-none bg-neutral-300", className)} />;
};
