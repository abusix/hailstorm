import React from 'react';
import { Combobox as HeadlessCombobox } from '@headlessui/react';

export interface MultiComboboxOptionsProps {
    children: React.ReactNode;
}

const MultiComboboxOptions = ({ children }: MultiComboboxOptionsProps) => {
    return (
        <HeadlessCombobox.Options
            hold
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 bg-neutral-0 shadow-md outline-none ring-0"
        >
            {children}
        </HeadlessCombobox.Options>
    );
};

export { MultiComboboxOptions };
