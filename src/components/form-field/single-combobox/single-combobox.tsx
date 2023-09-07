import { Combobox as HeadlessCombobox } from "@headlessui/react";
import React from "react";
import { SingleComboboxInput } from "./single-combobox-input";
import { SingleComboboxOptions } from "./single-combobox-options";
import { SingleComboboxOption } from "./single-combobox.option";
import { SingleComboboxResultInput } from "./single-combobox-result-input";
import { SingleComboboxCustomOption } from "./single-combobox-custom-option";
import { SingleComboboxEmptyOption } from "./single-combobox-empty-option";

export interface SingleComboboxProps<TValue> {
    value: TValue;
    onChange: (value: TValue) => void;
    children: React.ReactNode;
    disabled?: boolean;
}

const SingleCombobox = <TValue,>({
    value,
    onChange,
    children,
    disabled,
}: SingleComboboxProps<TValue>) => {
    return (
        <HeadlessCombobox value={value} onChange={onChange} disabled={disabled}>
            <div className="relative">{children}</div>
        </HeadlessCombobox>
    );
};

SingleCombobox.Input = SingleComboboxInput;
SingleCombobox.ResultInput = SingleComboboxResultInput;
SingleCombobox.Options = SingleComboboxOptions;
SingleCombobox.Option = SingleComboboxOption;
SingleCombobox.EmptyOption = SingleComboboxEmptyOption;
SingleCombobox.CustomOption = SingleComboboxCustomOption;

export { SingleCombobox };
