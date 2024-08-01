import { ComboboxOption as HeadlessUiComboboxOption } from "@headlessui/react";
import React from "react";

export interface SingleComboboxOptionProps<TValue> {
    value: TValue;
    children: React.ReactNode;
}

export const SingleComboboxOption = <TValue,>({
    value,
    children,
}: SingleComboboxOptionProps<TValue>) => (
    <HeadlessUiComboboxOption
        value={value}
        className="relative flex cursor-pointer items-center px-3 py-2 ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-active:ui-selected:bg-primary-100"
    >
        {children}
    </HeadlessUiComboboxOption>
);
