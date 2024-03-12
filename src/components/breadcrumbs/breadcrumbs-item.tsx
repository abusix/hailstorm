import React from "react";
import { classNames } from "../../util/class-names";

interface BreadcrumbItemProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    isActive?: boolean;
}

export const BreadcrumbsItem: React.FC<BreadcrumbItemProps> = ({
    children,
    className,
    href,
    isActive,
}) => {
    return (
        <a
            className={classNames(
                "headline-500 text-neutral-800",
                !isActive && "cursor-pointer underline-offset-2 hover:underline",
                isActive && "text-black",
                className
            )}
            href={href}
        >
            {children}
        </a>
    );
};
