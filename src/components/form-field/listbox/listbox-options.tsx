import { ListboxOptions as HeadlessUiListboxOptions } from "@headlessui/react";
import React from "react";

export interface ListboxOptionsProps {
    children: React.ReactNode;
}

export const ListboxOptions = ({ children }: ListboxOptionsProps) => {
    return (
        <HeadlessUiListboxOptions className="bg-neutral-0 absolute mt-1 max-h-60 w-full list-none overflow-auto rounded-md border border-neutral-300 shadow-md ring-0 outline-hidden">
            {children}
        </HeadlessUiListboxOptions>
    );
};
