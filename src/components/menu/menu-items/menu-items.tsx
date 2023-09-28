import React from "react";
import { Menu as HeadlessMenu } from "@headlessui/react";
import { classNames } from "../../../util/class-names";

export interface MenuItemsProps {
    children: React.ReactNode;
    className?: string;
}
export const MenuItems = ({ children, className }: MenuItemsProps) => {
    return (
        <HeadlessMenu.Items
            className={classNames(
                "absolute right-0 z-10 mt-2 flex w-52 flex-col rounded-md bg-neutral-0 py-2 shadow-md outline-none",
                className
            )}
        >
            {children}
        </HeadlessMenu.Items>
    );
};
