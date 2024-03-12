import React from "react";
import { classNames } from "../../util/class-names";

interface BreadcrumbItemProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    active?: boolean;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    children,
    className,
    href,
    active,
}) => {
    return (
        <a
            className={classNames(
                "headline-500 text-neutral-800",
                !active && "cursor-pointer underline-offset-2 hover:underline",
                active && "text-black",
                className
            )}
            href={href}
        >
            {children}
        </a>
    );
};
