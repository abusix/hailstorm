import { Combobox as HeadlessCombobox } from '@headlessui/react';
import React from 'react';
import { MultiComboboxCustomOption } from './multi-combobox-custom-option';
import { MultiComboboxEmptyOption } from './multi-combobox-empty-option';
import { MultiComboboxInput } from './multi-combobox-input';
import { MultiComboboxOption } from './multi-combobox-option';
import { MultiComboboxOptions } from './multi-combobox-options';
import { MultiComboboxResults } from './multi-combobox-results';

export interface MultiComboboxProps<TValue> {
    value: TValue[];
    onChange: (value: TValue[]) => void;
    children: React.ReactNode;
}

const MultiCombobox = <TValue,>({ value, onChange, children }: MultiComboboxProps<TValue>) => {
    return (
        <HeadlessCombobox multiple value={value} onChange={onChange}>
            <div className="relative">{children}</div>
        </HeadlessCombobox>
    );
};

MultiCombobox.Input = MultiComboboxInput;
MultiCombobox.Options = MultiComboboxOptions;
MultiCombobox.Option = MultiComboboxOption;
MultiCombobox.CustomOption = MultiComboboxCustomOption;
MultiCombobox.EmptyOption = MultiComboboxEmptyOption;
MultiCombobox.Results = MultiComboboxResults;

export { MultiCombobox };
