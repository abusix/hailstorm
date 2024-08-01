import { ListboxOptions as HeadlessUiListboxOptions } from "@headlessui/react";
import React from "react";

export interface ListboxOptionsProps {
    children: React.ReactNode;
}

export const ListboxOptions = ({ children }: ListboxOptionsProps) => {
    return (
        <HeadlessUiListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 bg-neutral-0 shadow-md outline-none ring-0">
            {children}
        </HeadlessUiListboxOptions>
    );
};
