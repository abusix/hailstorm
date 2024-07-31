import { Menu as HeadlessUiMenu } from "@headlessui/react";
import React from "react";
import { MenuButton } from "./menu-button/menu-button";
import { MenuInfoItem } from "./menu-info-item/menu-info-item";
import { MenuItem } from "./menu-item/menu-item";
import { MenuItems } from "./menu-items/menu-items";
import { MenuSeparator } from "./menu-separator/menu-separator";
import { MenuTitle } from "./menu-title/menu-title";

interface MenuProps {
    children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
    return (
        <HeadlessUiMenu as="div" className="relative">
            {children}
        </HeadlessUiMenu>
    );
};

Menu.Button = MenuButton;
Menu.Items = MenuItems;
Menu.Title = MenuTitle;
Menu.Item = MenuItem;
Menu.InfoItem = MenuInfoItem;
Menu.Separator = MenuSeparator;

export { Menu };
