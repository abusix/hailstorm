import { Tab as HeadlessUiTab, TabProps as HeadlessUiTabProps } from "@headlessui/react";
import React from "react";
import { classNames } from "../../util/class-names";
import { TabType, useTabContext } from "./tab-context";

export interface TabButtonProps<TTag extends React.ElementType>
    extends HeadlessUiTabProps<React.ElementType> {
    children: React.ReactNode;
    as?: TTag;
    hasIndicator?: boolean;
}

const buttonVariants: Record<TabType, string> = {
    primary:
        "relative whitespace-nowrap focus:ring-2 ring:border-brand hover:ui-not-selected:text-text-secondary-hover ui-not-selected:after:hidden ui-selected:after:absolute ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:-bottom-2 ui-selected:after:block ui-selected:after:h-0.5 ui-selected:after:bg-bg-brand ui-selected:disabled:after:bg-bg-brand-disabled disabled:text-text-disabled",
    secondary:
        "px-4 py-2 ui-not-selected:bg-transparent hover:ui-not-selected:text-text-secondary-hover focus:ring-2 ring:border-brand hover:ui-not-selected:bg-bg-primary-hover ui-selected:text-text-brand ui-selected:bg-bg-brand-subtle disabled:text-text-disabled",
};

export const TabButton = <TTag extends React.ElementType>({
    children,
    hasIndicator = false,
    ...props
}: TabButtonProps<TTag> &
    Omit<React.ComponentPropsWithoutRef<TTag>, keyof TabButtonProps<TTag>>) => {
    const { type } = useTabContext();

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any
        <HeadlessUiTab {...(props as any)} className="focus-visible:outline-hidden">
            <div
                className={classNames(
                    "ui-selected:text-text-brand ui-not-selected:text-text-primary rounded-sm text-xs font-medium outline-hidden",
                    buttonVariants[type]
                )}
            >
                <div className="flex items-center gap-2">
                    {children}
                    {hasIndicator && <div className="bg-bg-danger h-2 w-2 rounded-full" />}
                </div>
            </div>
        </HeadlessUiTab>
    );
};
