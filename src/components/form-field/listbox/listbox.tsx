import { Listbox as HeadlessListbox } from "@headlessui/react";
import React from "react";
import { ListboxOptions } from "./listbox-options";
import { ListboxOption } from "./listbox-option";
import { ListboxButton } from "./listbox-button";

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
      <div className="relative">{children}</div>
    </HeadlessListbox>
  );
};

Listbox.Button = ListboxButton;
Listbox.Options = ListboxOptions;
Listbox.Option = ListboxOption;

export { Listbox };
