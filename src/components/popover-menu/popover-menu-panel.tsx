import { PopoverPanel as HeadlessUiPopoverPanel } from "@headlessui/react";
import React from "react";
import { usePopoverMenuContext } from "./popover-menu-context";
import { PopoverMenuPanelGroup } from "./popover-menu-panel-group";
import { PopoverMenuPanelItem } from "./popover-menu-panel-item";
import { PopoverMenuPanelDivider } from "./popover-menu-panel-divider";
import { PopoverMenuPanelTitle } from "./popover-menu-panel-title";

export interface PopoverMenuPanelProps {
    children: React.ReactNode;
}

const PopoverMenuPanel = ({ children }: PopoverMenuPanelProps) => {
    const {
        popoverPanel: { setPopperElement, styles, attributes },
    } = usePopoverMenuContext();

    return (
        <HeadlessUiPopoverPanel
            ref={(el) => el && setPopperElement(el)}
            style={styles}
            {...attributes}
            className="z-40 w-52 rounded bg-neutral-0 py-2 shadow"
        >
            {children}
        </HeadlessUiPopoverPanel>
    );
};

PopoverMenuPanel.Item = PopoverMenuPanelItem;
PopoverMenuPanel.Group = PopoverMenuPanelGroup;
PopoverMenuPanel.Divider = PopoverMenuPanelDivider;
PopoverMenuPanel.Title = PopoverMenuPanelTitle;

export { PopoverMenuPanel };
