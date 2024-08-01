import { ComboboxOptions as HeadlessUiComboboxOptions } from "@headlessui/react";
import React from "react";

export interface SingleComboboxOptionsProps {
    children: React.ReactNode;
}

export const SingleComboboxOptions = ({ children }: SingleComboboxOptionsProps) => {
    return (
        <HeadlessUiComboboxOptions
            hold
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 bg-neutral-0 shadow-md outline-none ring-0"
        >
            {children}
        </HeadlessUiComboboxOptions>
    );
};
