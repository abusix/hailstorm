import React, { ReactNode } from "react";
import { classNames } from "../../util/class-names";

interface FeaturedTagProps {
    children: ReactNode;
    className?: string;
}

export const FeaturedTag = ({ children, className }: FeaturedTagProps) => {
    return (
        <span
            className={classNames(
                "absolute right-4 top-0 z-10 -translate-y-1/2 rounded border border-primary-600 bg-primary-50 px-1 text-xs font-medium uppercase tracking-wide text-primary-600",
                className
            )}
        >
            {children}
        </span>
    );
};
