import { Listbox as HeadlessListbox } from "@headlessui/react";
import React from "react";
import { ListboxOptions } from "./listbox-options";
import { ListboxOption } from "./listbox-option";
import { ListboxButton } from "./listbox-button";
import { classNames } from "../../../util/class-names";

const formFieldGroupStyles = classNames(
    // first element
    "[.group.form-field-group_&:first-child_button]:rounded-r-none [.group.form-field-group_&:first-child_button]:border-r-0",
    // elements in between
    "[.group.form-field-group_&:not(:first-child):not(:last-child)_button]:rounded-none [.group.form-field-group_&:not(:first-child):not(:last-child)_button]:border-r-0",
    // last element
    "[.group.form-field-group_&:last-child_button]:rounded-l-none"
);

interface ListboxPropsBase<TValue> {
    children: React.ReactNode;
    className?: string;
    value: TValue;
    onChange: (value: TValue) => void;
}

interface ListboxPropsSingle<TValue> extends ListboxPropsBase<TValue> {
    multiple?: false;
}

interface ListboxPropsMultiple<TValue>
    extends Omit<ListboxPropsBase<TValue>, "value" | "onChange"> {
    multiple: true;
    value: TValue[];
    onChange: (value: TValue[]) => void;
}

export type ListboxProps<TValue> = ListboxPropsSingle<TValue> | ListboxPropsMultiple<TValue>;

const Listbox = <TValue,>({
    children,
    value,
    onChange,
    className,
    multiple,
}: ListboxProps<TValue>) => {
    return (
        <HeadlessListbox value={value} onChange={onChange} multiple={multiple}>
            <div className={classNames("relative w-full", formFieldGroupStyles, className)}>
                {children}
            </div>
        </HeadlessListbox>
    );
};

Listbox.Button = ListboxButton;
Listbox.Options = ListboxOptions;
Listbox.Option = ListboxOption;

export { Listbox };
