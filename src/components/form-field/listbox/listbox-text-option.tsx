import React from "react";

export interface ListboxTextOptionProps {
    children: React.ReactNode;
    LeftIcon?: React.ElementType;
}

export const ListboxTextOption = ({ children, LeftIcon }: ListboxTextOptionProps) => {
    return (
        <div className="flex items-center gap-2">
            {LeftIcon ? (
                <LeftIcon className="h-3 w-3 fill-neutral-500 ui-selected:fill-primary-500" />
            ) : null}

            <div className="paragraph-100">{children}</div>
        </div>
    );
};
