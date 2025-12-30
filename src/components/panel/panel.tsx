import React, { FC, ReactNode } from "react";
import { classNames } from "../../util/class-names";

interface PanelProps {
    children: ReactNode;
    className?: string;
}

export const Panel: FC<PanelProps> = ({ children, className }) => (
    <div className={classNames("bg-bg-primary text-text-primary rounded-sm border border-border-primary p-5", className)}>
        {children}
    </div>
);
