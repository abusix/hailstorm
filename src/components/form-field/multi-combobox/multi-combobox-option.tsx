import React from "react";
import { Combobox as HeadlessCombobox } from "@headlessui/react";
import { SmallTickIcon } from "../../../icons";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxOptionProps<TValue> {
    value: TValue;
    children: React.ReactNode;
    className?: string;
}

export const MultiComboboxOption = <TValue,>({
    value,
    children,
    className,
}: MultiComboboxOptionProps<TValue>) => {
    return (
        <HeadlessCombobox.Option
            value={value}
            className={classNames(
                "relative flex cursor-pointer items-center px-3 py-2 ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-active:ui-selected:bg-primary-100",
                className
            )}
        >
            {children}
            <div className="absolute inset-y-0 right-3 hidden items-center fill-primary-500 ui-selected:flex">
                <SmallTickIcon />
            </div>
        </HeadlessCombobox.Option>
    );
};
