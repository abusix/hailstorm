/* eslint-disable react/button-has-type */
import React from "react";
import { classNames } from "../../util/class-names";
import { Spinner } from "../spinner";

const buttonVariants = {
    primary:
        "bg-bg-brand text-text-inverse hover:bg-bg-brand-hover active:bg-bg-brand-pressed focus:ring-2 focus:ring-border-brand focus:bg-bg-brand-hover disabled:bg-bg-brand-disabled disabled:text-text-inverse-disabled fill-icon-inverse",
    secondary:
        "text-text-primary bg-bg-primary border border-border-secondary hover:border-border-secondary-hover hover:text-text-secondary-hover active:bg-bg-primary-pressed focus:ring-2 focus:ring-border-brand focus:text-text-secondary-hover disabled:text-text-disabled disabled:border-border-disabled disabled:bg-bg-primary fill-icon-primary",
    minimal:
        "text-text-primary hover:bg-bg-primary-hover hover:text-text-secondary-hover active:bg-bg-primary-pressed focus:ring-2 focus:ring-border-brand focus:text-text-secondary-hover disabled:text-text-disabled disabled:bg-bg-primary fill-icon-primary underline",
    danger: "text-text-inverse bg-bg-danger hover:bg-bg-danger-hover active:bg-bg-danger-pressed focus:ring-2 focus:ring-border-danger focus:bg-bg-danger-hover disabled:bg-bg-danger-disabled disabled:text-text-inverse-disabled fill-icon-inverse",
    "danger-secondary":
        "bg-bg-primary text-text-danger border border-border-danger hover:bg-bg-danger-subtle hover:text-text-danger active:border-border-danger active:text-text-danger active:bg-bg-danger-subtle focus:ring-2 focus:ring-border-danger focus:text-text-danger disabled:border-border-disabled disabled:text-text-disabled disabled:bg-bg-primary fill-icon-danger disabled:fill-icon-disabled",
};

const iconVariants = {
    primary: "text-text-inverse",
    secondary:
        "fill-icon-primary group-hover:text-icon-primary-hover group-focus:text-icon-primary-hover group-disabled:text-icon-disabled",
    minimal:
        "fill-icon-primary group-hover:text-icon-primary-hover group-focus:text-icon-primary-hover group-disabled:text-icon-disabled",
    danger: "text-text-inverse",
    "danger-secondary": "fill-icon-danger group-disabled:fill-icon-disabled",
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
