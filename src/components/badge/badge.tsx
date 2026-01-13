import React, { ReactNode } from "react";
import { classNames } from "../../util/class-names";

const buttonVariants = {
    primary: "bg-bg-brand-subtle text-text-brand",
    violet: "bg-violet-100 text-violet-800",
    green: "bg-bg-success-subtle text-text-success",
    neutral: "bg-bg-secondary text-text-primary",
    yellow: "bg-bg-warning-subtle text-text-warning",
    teal: "bg-teal-100 text-teal-800",
    orange: "bg-orange-100 text-orange-800",
    pink: "bg-pink-300 text-pink-800",
    red: "bg-bg-danger-subtle text-text-danger",
    purple: "bg-purple-100 text-purple-800",
};

const shapeVariants = {
    rounded: "rounded-full",
    default: "rounded-sm",
};

export type BadgeType = keyof typeof buttonVariants;

export interface BadgeProps {
    type?: BadgeType;
    shape?: keyof typeof shapeVariants;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Badge = ({
    type = "primary",
    shape = "default",
    children,
    onClick,
    className,
}: BadgeProps) => {
    const interactiveVariant = onClick ? "cursor-pointer" : "pointer-events-none";

    return (
        <div
            tabIndex={onClick ? 0 : undefined}
            role="button"
            aria-label="Badge"
            className={classNames(
                "inline-flex h-4 items-center px-2 text-xs font-semibold tracking-wide uppercase",
                buttonVariants[type],
                shapeVariants[shape],
                interactiveVariant,
                className
            )}
            onClick={onClick}
            onKeyDown={onClick}
        >
            {children}
        </div>
    );
};
