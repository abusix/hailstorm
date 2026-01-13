import React from "react";
import { classNames } from "../../util/class-names";
import { ErrorIcon, InfoSignIcon, TickCircleIcon, WarningSignIcon } from "../../icons";

export type AlertIntent = "success" | "info" | "warning" | "danger";

const alertVariants: Record<AlertIntent, string> = {
    info: "border-border-info bg-bg-info-subtle text-text-info",
    danger: "border-border-danger bg-bg-danger-subtle text-text-danger",
    warning: "border-border-warning bg-bg-warning-subtle text-text-warning",
    success: "border-border-success bg-bg-success-subtle text-text-success",
};

const iconVariants: Record<AlertIntent, string> = {
    info: "fill-icon-info",
    danger: "fill-icon-danger",
    success: "fill-icon-success",
    warning: "fill-icon-warning",
};

const iconNames: Record<AlertIntent, React.ElementType> = {
    info: InfoSignIcon,
    success: TickCircleIcon,
    warning: WarningSignIcon,
    danger: ErrorIcon,
};

export interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string;
    intent: AlertIntent;
    children?: React.ReactNode;
}

export const Alert = ({ title, children, intent, className, ...props }: AlertProps) => {
    const Icon = iconNames[intent];

    return (
        <div
            role="alert"
            className={classNames(
                "flex flex-row gap-4 rounded-lg border px-4 py-3",
                alertVariants[intent],
                className
            )}
            {...props}
        >
            <Icon className={classNames("h-4 w-4 shrink-0", iconVariants[intent])} />
            <div className="grow">
                <div className="text-sm font-medium">{title}</div>
                {children && <div className="pt-1 text-sm">{children}</div>}
            </div>
        </div>
    );
};
