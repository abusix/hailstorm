import { Popover } from "@headlessui/react";
import React from "react";
import { useNavigationPopoverContext } from "./navigation-popover-context";

export interface NavigationPopoverPanelItemProps {
    children: React.ReactNode;
}

const NavigationPopoverPanelItem = ({ children }: NavigationPopoverPanelItemProps) => {
    return (
        <div className="flex w-full cursor-pointer items-center overflow-hidden p-2">
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
        <Popover.Panel
            ref={(el) => el && setPopperElement(el)}
            style={styles}
            {...attributes}
            className="z-40 ml-2 w-52 rounded bg-neutral-0 p-2 shadow"
        >
            {children}
        </Popover.Panel>
    );
};

NavigationPopoverPanel.Item = NavigationPopoverPanelItem;

export { NavigationPopoverPanel };
