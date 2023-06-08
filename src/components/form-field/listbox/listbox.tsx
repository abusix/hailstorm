import { Listbox as HeadlessListbox } from "@headlessui/react";
import React from "react";
import { ListboxOptions } from "./listbox-options";
import { ListboxOption } from "./listbox-option";
import { ListboxButton } from "./listbox-button";
import classNames from '../../../util/class-names';

const formFieldGroupStyles = classNames(
  // first element
  '[.group.form-field-group_&:first-child_button]:rounded-r-none [.group.form-field-group_&:first-child_button]:border-r-0',
  // elements in between
  '[.group.form-field-group_&:not(:first-child):not(:last-child)_button]:rounded-none [.group.form-field-group_&:not(:first-child):not(:last-child)_button]:border-r-0',
  // last element
  '[.group.form-field-group_&:last-child_button]:rounded-l-none'
);

export interface ListboxProps<TValue> {
  children: React.ReactNode;
  value: TValue;
  onChange: (value: TValue) => void;
}

const Listbox = <TValue,>({
  children,
  value,
  onChange,
}: ListboxProps<TValue>) => {
  return (
    <HeadlessListbox value={value} onChange={onChange}>
      <div className={classNames("relative w-full", formFieldGroupStyles)}>{children}</div>
    </HeadlessListbox>
  );
};

Listbox.Button = ListboxButton;
Listbox.Options = ListboxOptions;
Listbox.Option = ListboxOption;

export { Listbox };
