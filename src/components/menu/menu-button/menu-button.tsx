import { MenuButton as HeadlessUiMenuButton } from "@headlessui/react";
import React from "react";

export interface MenuButtonProps {
    children: React.ReactNode;
    className?: string;
}

export const MenuButton = ({ children, className }: MenuButtonProps) => {
    return (
        <HeadlessUiMenuButton as="div" className={className}>
            {children}
        </HeadlessUiMenuButton>
    );
};
