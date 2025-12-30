import { MenuItems as HeadlessUiMenuItems } from "@headlessui/react";
import React from "react";

export interface MenuItemsProps {
    children: React.ReactNode;
}
export const MenuItems = ({ children }: MenuItemsProps) => {
    return (
        <HeadlessUiMenuItems className="bg-bg-primary absolute right-0 z-10 mt-2 flex w-52 flex-col rounded-md py-2 shadow-md outline-hidden">
            {children}
        </HeadlessUiMenuItems>
    );
};
