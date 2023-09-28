import React from "react";
import { classNames } from "../../util/class-names";

export interface SectionPanelProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionPanel = ({ children, className }: SectionPanelProps) => {
    return (
        <div
            className={classNames(
                "relative rounded border border-neutral-300 bg-neutral-0 p-5",
                className
            )}
        >
            {children}
        </div>
    );
};
