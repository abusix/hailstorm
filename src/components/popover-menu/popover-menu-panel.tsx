import {
    PopoverPanel as HeadlessUiPopoverPanel,
    PopoverPanelProps as HeadlessUiPopoverPanelProps,
} from "@headlessui/react";
import React from "react";
import { usePopoverMenuContext } from "./popover-menu-context";
import { PopoverMenuPanelButton } from "./popover-menu-panel-button";
import { PopoverMenuPanelDivider } from "./popover-menu-panel-divider";
import { PopoverMenuPanelGroup } from "./popover-menu-panel-group";
import { PopoverMenuPanelItem } from "./popover-menu-panel-item";
import { PopoverMenuPanelTitle } from "./popover-menu-panel-title";

export interface PopoverMenuPanelProps extends HeadlessUiPopoverPanelProps {
    children: React.ReactNode;
}

const PopoverMenuPanel = ({ children, ...rest }: PopoverMenuPanelProps) => {
    const {
        popoverPanel: { setPopperElement, styles, attributes },
    } = usePopoverMenuContext();

    return (
        <HeadlessUiPopoverPanel
            ref={(el) => el && setPopperElement(el)}
            style={styles}
            {...attributes}
            className="z-40 w-52 rounded bg-neutral-0 py-2 shadow"
            {...rest}
        >
            {children}
        </HeadlessUiPopoverPanel>
    );
};

PopoverMenuPanel.Item = PopoverMenuPanelItem;
PopoverMenuPanel.Button = PopoverMenuPanelButton;
PopoverMenuPanel.Group = PopoverMenuPanelGroup;
PopoverMenuPanel.Divider = PopoverMenuPanelDivider;
PopoverMenuPanel.Title = PopoverMenuPanelTitle;

export { PopoverMenuPanel };
