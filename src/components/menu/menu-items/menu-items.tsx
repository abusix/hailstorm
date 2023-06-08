import React from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';

export interface MenuItemsProps {
    children: React.ReactNode;
}
export const MenuItems = ({ children }: MenuItemsProps) => {
    return (
        <HeadlessMenu.Items className="absolute right-0 z-10 mt-2 flex w-52 flex-col rounded-md bg-neutral-0 py-2 shadow-md outline-none">
            {children}
        </HeadlessMenu.Items>
    );
};
