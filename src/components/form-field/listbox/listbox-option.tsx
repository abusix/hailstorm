import { Listbox } from "@headlessui/react";
import React, { Fragment } from "react";
import { ListboxBadgeOption } from "./listbox-badge-option";
import { ListboxTextOption } from "./listbox-text-option";
import { classNames } from "../../../util/class-names";

export interface ListboxOptionProps<TValue> {
    value: TValue;
    children: React.ReactNode;
    className?: string;
}

const ListboxOption = <TValue,>({ value, children, className }: ListboxOptionProps<TValue>) => {
    return (
        <Listbox.Option value={value} as={Fragment}>
            <li
                className={classNames(
                    "relative cursor-pointer px-3 py-2 ui-selected:bg-primary-100 ui-selected:text-primary-500 ui-selected:before:absolute ui-selected:before:bottom-0 ui-selected:before:left-0 ui-selected:before:top-0 ui-selected:before:block ui-selected:before:w-[2px] ui-selected:before:rounded-r-md ui-selected:before:bg-primary-400 ui-active:bg-neutral-50 ui-active:ui-selected:bg-primary-100",
                    className
                )}
            >
                {children}
            </li>
        </Listbox.Option>
    );
};

ListboxOption.BadgeOption = ListboxBadgeOption;
ListboxOption.TextOption = ListboxTextOption;

export { ListboxOption };
