import React, { FC, ReactNode } from "react";
import { classNames } from "../../util/class-names";

interface PanelProps {
    children: ReactNode;
    className?: string;
}

export const Panel: FC<PanelProps> = ({ children, className }) => (
    <div
        className={classNames(
            "bg-bg-primary text-text-primary border-border-primary rounded-sm border p-5",
            className
        )}
    >
        {children}
    </div>
);
