import { PopoverPanel as HeadlessUiPopoverPanel } from "@headlessui/react";
import React from "react";
import { usePopoverMenuContext } from "./popover-menu-context";

export interface PopoverMenuPanelItemProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const PopoverMenuPanelItem = ({ children, onClick }: PopoverMenuPanelItemProps) => {
    return (
        <div
            className="flex w-full cursor-pointer items-center overflow-hidden px-4 py-2 hover:bg-neutral-100 focus:ring-2 focus:ring-primary-200"
            onClick={onClick}
            onKeyDown={onClick}
            tabIndex={0}
            role="button"
        >
            <p className="text-sm font-normal">{children}</p>
        </div>
    );
};

export interface NavigationPopoverPanelProps {
    children: React.ReactNode;
}

const PopoverMenuPanel = ({ children }: NavigationPopoverPanelProps) => {
    const {
        popoverPanel: { setPopperElement, styles, attributes },
    } = usePopoverMenuContext();

    return (
        <HeadlessUiPopoverPanel
            ref={(el) => el && setPopperElement(el)}
            style={styles}
            {...attributes}
            className="z-40 ml-2 w-52 rounded bg-neutral-0 py-2 shadow"
        >
            {children}
        </HeadlessUiPopoverPanel>
    );
};

PopoverMenuPanel.Item = PopoverMenuPanelItem;

export { PopoverMenuPanel };
