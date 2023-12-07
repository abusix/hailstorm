import React, { FC, ReactNode } from "react";
import { classNames } from "../../util/class-names";

interface PanelProps {
    children: ReactNode;
    className?: string;
}

export const Panel: FC<PanelProps> = ({ children, className }) => (
    <div className={classNames("rounded border border-neutral-300 bg-neutral-0 p-5", className)}>
        {children}
    </div>
);
