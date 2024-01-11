import { Menu as HeadlessMenu } from "@headlessui/react";
import React from "react";

export interface MenuButtonProps {
    children: React.ReactNode;
    className?: string;
}

export const MenuButton = ({ children, className }: MenuButtonProps) => {
    return (
        <HeadlessMenu.Button as="div" className={className}>
            {children}
        </HeadlessMenu.Button>
    );
};
