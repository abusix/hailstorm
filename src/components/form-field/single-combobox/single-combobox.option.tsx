import { Combobox as HeadlessCombobox } from "@headlessui/react";
import React from "react";
import { classNames } from "../../../util/class-names";

export interface SingleComboboxOptionProps<TValue> {
    value: TValue;
    children: React.ReactNode;
    className?: string;
}

export const SingleComboboxOption = <TValue,>({
    value,
    children,
    className,
}: SingleComboboxOptionProps<TValue>) => (
    <HeadlessCombobox.Option
        value={value}
        className={classNames(
            "relative flex cursor-pointer items-center px-3 py-2 ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-active:ui-selected:bg-primary-100",
            className
        )}
    >
        {children}
    </HeadlessCombobox.Option>
);
