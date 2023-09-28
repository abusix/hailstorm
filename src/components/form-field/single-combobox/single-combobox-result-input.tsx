import { Combobox as HeadlessCombobox } from "@headlessui/react";
import React from "react";
import { Tag } from "../../tag/tag";
import { CaretDownIcon } from "../../../icons";
import { classNames } from "../../../util/class-names";

export interface SingleComboboxResultInputProps {
    onUnselect: () => void;
    children: React.ReactNode;
    className?: string;
}

export const SingleComboboxResultInput = ({
    onUnselect,
    children,
    className,
}: SingleComboboxResultInputProps) => {
    return (
        <div className="relative">
            <div className="paragraph-100 flex h-8 w-full items-center rounded border border-neutral-400 py-2 pl-3 pr-8 focus-visible:border-primary-400 focus-visible:ring-2 focus-visible:ring-primary-200">
                <Tag onClick={onUnselect}>{children}</Tag>
                <HeadlessCombobox.Button
                    className={classNames(
                        "absolute inset-y-0 right-0 flex items-center px-1.5",
                        className
                    )}
                >
                    <div className="flex h-5 w-5 items-center justify-center rounded rounded-r-md bg-neutral-100">
                        <CaretDownIcon className="h-3 w-3 fill-neutral-600" aria-hidden="true" />
                    </div>
                </HeadlessCombobox.Button>
            </div>
        </div>
    );
};
