/* eslint-disable react/button-has-type */
import React from "react";
import { classNames } from "../../util/class-names";
import { Spinner } from "../spinner";

const buttonVariants = {
    primary:
        "bg-primary-500 text-neutral-0 hover:bg-primary-600 active:bg-primary-600 focus:ring-2 focus:ring-primary-200 focus:bg-primary-600 disabled:bg-primary-200 fill-neutral-0",
    secondary:
        "text-foreground bg-background border border-border hover:border-border-hover hover:text-foreground active:bg-background-tertiary focus:ring-2 focus:ring-primary-200 focus:text-foreground disabled:text-foreground-subtle disabled:border-border disabled:bg-background fill-foreground-muted",
    minimal:
        "text-foreground hover:bg-background-tertiary hover:text-foreground active:bg-background-secondary focus:ring-2 focus:ring-primary-200 focus:text-foreground disabled:text-foreground-subtle disabled:bg-background fill-foreground-muted underline",
    danger: "text-neutral-0 bg-danger-500 hover:bg-danger-500 active:bg-danger-700 focus:ring-2 focus:ring-danger-100 focus:bg-danger-600 disabled:bg-danger-100 fill-neutral-0",
    "danger-secondary":
        "bg-background text-danger-500 border border-danger-400 hover:bg-danger-50 hover:text-danger-600 active:border-danger-700 active:text-danger-700 active:bg-danger-100 focus:ring-2 focus:ring-danger-100 focus:text-danger-600 disabled:border-danger-100 disabled:text-danger-100 disabled:bg-background fill-danger-600 disabled:fill-danger-100",
};

const iconVariants = {
    primary: "text-neutral-0",
    secondary:
        "fill-foreground-muted group-hover:text-foreground group-focus:text-foreground group-disabled:text-foreground-subtle",
    minimal:
        "fill-foreground-muted group-hover:text-foreground group-focus:text-foreground group-disabled:text-foreground-subtle",
    danger: "",
    "danger-secondary": "",
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
        `group flex h-8 items-center gap-2 whitespace-nowrap rounded-sm px-4 text-xs font-semibold focus:outline-hidden disabled:cursor-not-allowed`,
        buttonVariants[variant],
        className
    );

    return (
        <button className={commonClasses} {...props}>
            {loading ? <Spinner size="small" /> : null}
            {LeftIcon && !loading ? (
                <LeftIcon className={`${iconVariants[variant]} h-3 w-3`} />
            ) : null}
            {children}
            {RightIcon ? <RightIcon className={`${iconVariants[variant]} h-3 w-3`} /> : null}
        </button>
    );
};

export { Button };
