import React, { FC, ReactNode } from "react";
import { classNames } from "../../util/class-names";

interface PanelProps {
    children: ReactNode;
    className?: string;
}

export const Panel: FC<PanelProps> = ({ children, className }) => (
    <div
        className={classNames(
            "rounded border border-border-primary bg-background-primary p-5",
            className
        )}
    >
        {children}
    </div>
);
