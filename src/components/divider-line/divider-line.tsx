import React from "react";
import { classNames } from "../../util/class-names";

export interface DividerLineProps {
    className?: string;
}

export const DividerLine = ({ className }: DividerLineProps) => {
    return (
        <hr
            className={classNames(
                "col-span-full my-8 h-px w-full border-none bg-neutral-300",
                className
            )}
        />
    );
};
