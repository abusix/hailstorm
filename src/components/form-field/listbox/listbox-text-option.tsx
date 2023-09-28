import React from "react";
import { classNames } from "../../../util/class-names";

export interface ListboxTextOptionProps {
    children: React.ReactNode;
    LeftIcon?: React.ElementType;
    className?: string;
}

export const ListboxTextOption = ({ children, LeftIcon, className }: ListboxTextOptionProps) => {
    return (
        <div className={classNames("flex items-center gap-2", className)}>
            {LeftIcon ? (
                <LeftIcon className="h-3 w-3 fill-neutral-500 ui-selected:fill-primary-500" />
            ) : null}

            <div className="paragraph-100">{children}</div>
        </div>
    );
};
