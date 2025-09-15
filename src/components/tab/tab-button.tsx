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
        "relative whitespace-nowrap focus:ring-2 ring:primary-200 ui-not-selected:hover:text-neutral-800 ui-not-selected:after:hidden ui-selected:after:absolute ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:-bottom-2 ui-selected:after:block ui-selected:after:h-0.5 ui-selected:after:bg-primary-500 disabled:ui-selected:after:bg-primary-500 disabled:text-neutral-500",
    secondary:
        "px-4 py-2 ui-not-selected:bg-transparent ui-not-selected:hover:text-neutral-800 focus:ring-2 ring:primary-200 ui-not-selected:hover:bg-neutral-100 ui-selected:text-primary-500 ui-selected:bg-primary-100 disabled:text-neutral-500",
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
        <HeadlessUiTab {...(props as any)} className="focus-visible:outline-none">
            <div
                className={classNames(
                    "rounded text-xs font-medium outline-none ui-selected:text-primary-500 ui-not-selected:text-neutral-700",
                    buttonVariants[type]
                )}
            >
                <div className="flex items-center gap-2">
                    {children}
                    {hasIndicator && <div className="h-2 w-2 rounded-full bg-danger-500" />}
                </div>
            </div>
        </HeadlessUiTab>
    );
};
