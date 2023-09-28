import { Listbox } from "@headlessui/react";
import React from "react";
import { ListboxButtonBadgeValue } from "./listbox-button-badge-value";
import { ListboxButtonTextValue } from "./listbox-button-text-value";
import { CaretDownIcon } from "../../../icons";
import { classNames } from "../../../util/class-names";

export interface ListboxButtonProps {
    children: React.ReactNode;
    className?: string;
}

const ListboxButton = ({ children, className }: ListboxButtonProps) => {
    return (
        <Listbox.Button
            className={classNames(
                "flex h-8 w-full cursor-pointer items-center rounded border border-neutral-400 py-2 pl-3 pr-8",
                className
            )}
        >
            {children}
            <div className="absolute inset-y-0 right-0 flex items-center px-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded rounded-r-md bg-neutral-100  focus:outline-none">
                    <CaretDownIcon className="h-3 w-3 fill-neutral-600" aria-hidden="true" />
                </div>
            </div>
        </Listbox.Button>
    );
};

ListboxButton.BadgeValue = ListboxButtonBadgeValue;
ListboxButton.TextValue = ListboxButtonTextValue;

export { ListboxButton };
