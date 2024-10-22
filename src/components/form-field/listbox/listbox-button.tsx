import { ListboxButton as HeadlessUiListboxButton } from "@headlessui/react";
import React from "react";
import { CaretDownIcon } from "../../../icons";
import { classNames } from "../../../util/class-names";
import { ListboxButtonBadgeValue } from "./listbox-button-badge-value";
import { ListboxButtonTextValue } from "./listbox-button-text-value";

export interface ListboxButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
}

const ListboxButton = ({ children, disabled }: ListboxButtonProps) => {
    return (
        <HeadlessUiListboxButton
            disabled={disabled}
            className={classNames(
                "group flex h-8 w-full cursor-pointer items-center rounded border border-neutral-400 bg-neutral-0 py-2 pl-3 pr-8 outline-none hover:border-neutral-600 focus:border-primary-400 focus:ring-2 focus:ring-primary-200",
                disabled &&
                    "cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-600 hover:border-neutral-300"
            )}
        >
            {children}

            <div className="absolute inset-y-0 right-0 flex items-center px-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded rounded-r-md bg-neutral-100 focus:outline-none">
                    <CaretDownIcon className="h-3 w-3 fill-neutral-600" aria-hidden="true" />
                </div>
            </div>
        </HeadlessUiListboxButton>
    );
};

ListboxButton.BadgeValue = ListboxButtonBadgeValue;
ListboxButton.TextValue = ListboxButtonTextValue;

export { ListboxButton };
