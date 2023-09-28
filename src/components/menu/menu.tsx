import React from "react";
import { Menu as HeadlessMenu } from "@headlessui/react";
import { MenuInfoItem } from "./menu-info-item/menu-info-item";
import { MenuItem } from "./menu-item/menu-item";
import { MenuItems } from "./menu-items/menu-items";
import { MenuSeparator } from "./menu-separator/menu-separator";
import { MenuTitle } from "./menu-title/menu-title";
import { MenuButton } from "./menu-button/menu-button";
import { classNames } from "../../util/class-names";

interface MenuProps {
    children: React.ReactNode;
    className?: string;
}

const Menu = ({ children, className }: MenuProps) => {
    return (
        <HeadlessMenu as="div" className={classNames("relative", className)}>
            {children}
        </HeadlessMenu>
    );
};

Menu.Button = MenuButton;
Menu.Items = MenuItems;
Menu.Title = MenuTitle;
Menu.Item = MenuItem;
Menu.InfoItem = MenuInfoItem;
Menu.Separator = MenuSeparator;

export { Menu };
