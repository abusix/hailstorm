import { MenuItem as HeadlessUiMenuItem } from "@headlessui/react";
import React from "react";

export interface MenuItemProps {
    children: React.ReactNode;
    LeftIcon?: React.ElementType;
    disabled?: boolean;
    onClick?: () => void;
}

export const MenuItem = ({ children, LeftIcon, disabled = false, onClick }: MenuItemProps) => {
    return (
        <HeadlessUiMenuItem disabled={disabled}>
            <button
                type="button"
                className="group relative flex w-full cursor-pointer items-center gap-4 bg-neutral-0 px-4 py-2.5 hover:bg-neutral-100 disabled:bg-neutral-0 data-[focus]:bg-neutral-200"
                disabled={disabled}
                onKeyDown={onClick}
                onClick={onClick}
            >
                {LeftIcon ? (
                    <LeftIcon className="h-4 w-4 fill-neutral-600 group-disabled:fill-neutral-400" />
                ) : null}
                <div className="paragraph-200 text-neutral-800 group-disabled:text-neutral-400">
                    {children}
                </div>
            </button>
        </HeadlessUiMenuItem>
    );
};
