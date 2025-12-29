import React, { FC, ReactNode } from "react";
import { classNames } from "../../util/class-names";

interface PanelProps {
    children: ReactNode;
    className?: string;
}

export const Panel: FC<PanelProps> = ({ children, className }) => (
    <div className={classNames("bg-bg-base rounded-sm border border-border-default p-5", className)}>
        {children}
    </div>
);
