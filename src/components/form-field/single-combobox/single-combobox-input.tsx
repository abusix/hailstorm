import { Combobox as HeadlessCombobox } from "@headlessui/react";
import React from "react";
import { CaretDownIcon } from "../../../icons";

export interface SingleComboboxInputProps<TValue> {
    id: string;
    displayValue?(item: TValue): string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    showButton?: boolean;
}

export const SingleComboboxInput = <TValue,>({
    id,
    displayValue,
    placeholder,
    onChange,
    showButton = true,
}: SingleComboboxInputProps<TValue>) => {
    return (
        <div className="relative">
            <HeadlessCombobox.Input
                id={id}
                name={id}
                placeholder={placeholder}
                displayValue={displayValue}
                onChange={onChange}
                className="paragraph-100 flex h-8 w-full items-center rounded border border-neutral-400 py-2 pl-3 pr-8 focus-visible:border-primary-400 focus-visible:ring-2 focus-visible:ring-primary-200 disabled:border-neutral-300 disabled:bg-neutral-100 disabled:text-neutral-600"
            />
            {showButton ? (
                <HeadlessCombobox.Button className="absolute inset-y-0 right-0 flex items-center px-1.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded rounded-r-md bg-neutral-100">
                        <CaretDownIcon
                            name="caret-down"
                            className="h-3 w-3 fill-neutral-600"
                            aria-hidden="true"
                        />
                    </div>
                </HeadlessCombobox.Button>
            ) : null}
        </div>
    );
};
