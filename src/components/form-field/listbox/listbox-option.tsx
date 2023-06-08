import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
import { ListboxBadgeOption } from "./listbox-badge-option";
import { ListboxTextOption } from "./listbox-text-option";
import React from "react";

export interface ListboxOptionProps<TValue> {
  value: TValue;
  children: React.ReactNode;
}

const ListboxOption = <TValue,>({
  value,
  children,
}: ListboxOptionProps<TValue>) => {
  return (
    <Listbox.Option value={value} as={Fragment}>
      <li className="relative cursor-pointer px-3 py-2 ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-active:ui-selected:bg-primary-100">
        {children}
      </li>
    </Listbox.Option>
  );
};

ListboxOption.BadgeOption = ListboxBadgeOption;
ListboxOption.TextOption = ListboxTextOption;

export { ListboxOption };
