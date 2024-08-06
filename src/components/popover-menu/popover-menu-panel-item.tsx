import React from "react";
import { classNames } from "../../util/class-names";

const itemIntents = {
    neutral: "text-neutral-700 fill-neutral-700 hover:bg-primary-100",
    danger: "text-danger-500 fill-danger-500 hover:bg-danger-100",
};

const activeItemIntents = {
    neutral: "bg-primary-100 fill-primary-400 text-primary-400 before:bg-primary-400",
    danger: "bg-danger-100 fill-danger-400 text-danger-500 before:bg-danger-400",
};

export interface PopoverMenuPanelItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    Icon?: React.ComponentType<{ className: string }>;
    variant?: keyof typeof itemIntents;
    active?: boolean;
}

export const PopoverMenuPanelItem = ({
    children,
    onClick,
    Icon,
    variant = "neutral",
    active,
}: PopoverMenuPanelItemProps) => {
    const intentStyles = itemIntents[variant];

    return (
        <div
            className={classNames(
                "relative flex w-full cursor-pointer flex-row items-center gap-3 overflow-hidden px-4 py-2 text-sm font-normal focus:ring-2 focus:ring-primary-200",
                intentStyles,
                active && activeItemIntents[variant],
                active &&
                    "before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:rounded-r-md"
            )}
            role="menuitem"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onClick}
        >
            {Icon && <Icon className={classNames("h-3.5 w-3.5")} />}
            {children}
        </div>
    );
};
