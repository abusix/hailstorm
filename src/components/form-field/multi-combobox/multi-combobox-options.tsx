import { ComboboxOptions as HeadlessUiComboboxOptions } from "@headlessui/react";
import React from "react";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxOptionsProps {
    children: React.ReactNode;
    className?: string;
}

const MultiComboboxOptions = ({ children, className }: MultiComboboxOptionsProps) => {
    return (
        <HeadlessUiComboboxOptions
            hold
            className={classNames(
                "absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 bg-neutral-0 shadow-md outline-none ring-0",
                className
            )}
        >
            {children}
        </HeadlessUiComboboxOptions>
    );
};

export { MultiComboboxOptions };
