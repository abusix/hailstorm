import { PopoverPanel as HeadlessUiPopoverPanel } from "@headlessui/react";
import React from "react";
import { useNavigationPopoverContext } from "./navigation-popover-context";

export interface NavigationPopoverPanelItemProps {
    children: React.ReactNode;
}

const NavigationPopoverPanelItem = ({ children }: NavigationPopoverPanelItemProps) => {
    return (
        <div className="text-text-inverse hover:bg-sidebar-bg-hover focus:ring-border-brand flex w-full cursor-pointer items-center overflow-hidden px-4 py-2 focus:ring-2">
            <p className="text-sm font-normal">{children}</p>
        </div>
    );
};

export interface NavigationPopoverPanelProps {
    children: React.ReactNode;
}

const NavigationPopoverPanel = ({ children }: NavigationPopoverPanelProps) => {
    const {
        popoverPanel: { setPopperElement, styles, attributes },
    } = useNavigationPopoverContext();

    return (
        <HeadlessUiPopoverPanel
            ref={(el) => el && setPopperElement(el)}
            style={styles}
            {...attributes}
            className="bg-sidebar-bg z-40 ml-2 w-52 rounded-sm py-2 shadow-sm"
        >
            {children}
        </HeadlessUiPopoverPanel>
    );
};

NavigationPopoverPanel.Item = NavigationPopoverPanelItem;

export { NavigationPopoverPanel };
