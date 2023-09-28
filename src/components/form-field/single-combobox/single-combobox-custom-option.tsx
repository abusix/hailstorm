import { Combobox as HeadlessCombobox } from "@headlessui/react";
import React from "react";
import { classNames } from "../../../util/class-names";

export interface SingleComboboxCustomOptionProps<TValue> {
    value: TValue;
    children: React.ReactNode;
    className?: string;
}

export const SingleComboboxCustomOption = <TValue,>({
    value,
    children,
    className,
}: SingleComboboxCustomOptionProps<TValue>) => {
    return (
        <HeadlessCombobox.Option
            value={value}
            className={classNames(
                "paragraph-100 flex cursor-pointer items-center gap-1 px-3 py-2 text-neutral-700 ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-active:ui-selected:bg-primary-100",
                className
            )}
        >
            {children}
        </HeadlessCombobox.Option>
    );
};
