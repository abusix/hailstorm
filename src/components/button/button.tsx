/* eslint-disable react/button-has-type */
import React from "react";
import { classNames } from "../../util/class-names";
import { Spinner } from "../spinner";

import "./button.css";

const buttonVariants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    minimal: "btn-minimal",
    danger: "btn-danger",
    "danger-secondary":
        "bg-neutral-0 text-danger-500 border border-danger-400 hover:bg-danger-50 hover:text-danger-600 active:border-danger-700 active:text-danger-700 active:bg-danger-100 focus:ring-2 focus:ring-danger-100 focus:text-danger-600 disabled:border-danger-100 disabled:text-danger-100 disabled:bg-neutral-0 fill-danger-600 disabled:fill-danger-100",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonVariants;
    loading?: boolean;
    LeftIcon?: React.ElementType;
    RightIcon?: React.ElementType;
}

const Button = ({
    variant = "primary",
    className,
    children,
    loading,
    LeftIcon,
    RightIcon,
    ...props
}: ButtonProps) => {
    const commonClasses = classNames(
        `group flex h-8 items-center gap-2 whitespace-nowrap rounded px-4 text-xs font-semibold focus:outline-none disabled:cursor-not-allowed`,
        buttonVariants[variant],
        className
    );

    return (
        <button className={commonClasses} {...props}>
            {loading ? <Spinner size="small" /> : null}
            {LeftIcon && !loading ? <LeftIcon className="h-3 w-3" /> : null}
            {children}
            {RightIcon ? <RightIcon className="h-3 w-3" /> : null}
        </button>
    );
};

export { Button };
