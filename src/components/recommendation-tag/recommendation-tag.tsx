import React, { ReactNode } from "react";
import { classNames } from "../../util/class-names";

interface RecommendationTagProps {
    children: ReactNode;
    className?: string;
}

export const RecommendationTag = ({ children, className }: RecommendationTagProps) => {
    return (
        <span
            className={classNames(
                "absolute right-6 top-0 z-10 -translate-y-1/2 rounded border border-primary-500 bg-primary-100 px-1 text-xs uppercase tracking-wide text-primary-500",
                className
            )}
        >
            {children}
        </span>
    );
};
