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
                className="group bg-bg-primary disabled:bg-bg-primary hover:bg-bg-primary-hover data-focus:bg-bg-primary-pressed relative flex w-full cursor-pointer items-center gap-4 px-4 py-2.5"
                disabled={disabled}
                onKeyDown={onClick}
                onClick={onClick}
            >
                {LeftIcon ? (
                    <LeftIcon className="fill-icon-primary group-disabled:fill-icon-disabled h-4 w-4" />
                ) : null}
                <div className="paragraph-200 text-text-primary group-disabled:text-text-disabled">
                    {children}
                </div>
            </button>
        </HeadlessUiMenuItem>
    );
};
