import { ComboboxOption as HeadlessUiComboboxOption } from "@headlessui/react";
import React from "react";

export interface MultiComboboxCustomOptionProps<TValue> {
    value: TValue;
    children: React.ReactNode;
}

export const MultiComboboxCustomOption = <TValue,>({
    value,
    children,
}: MultiComboboxCustomOptionProps<TValue>) => {
    return (
        <HeadlessUiComboboxOption
            value={value}
            className="paragraph-100 ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-selected:ui-active:bg-primary-100 flex cursor-pointer items-center gap-1 px-3 py-2 text-neutral-700"
        >
            {children}
        </HeadlessUiComboboxOption>
    );
};
