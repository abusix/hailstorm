import { Popover, PopoverProps } from "@headlessui/react";
import React, { useState } from "react";
import { usePopper } from "react-popper";
import { PopoverMenuButton } from "./popover-menu-button";
import { PopoverMenuContextProvider } from "./popover-menu-context";
import { PopoverMenuOverlay } from "./popover-menu-overlay";
import { PopoverMenuPanel } from "./popover-menu-panel";

export interface PopoverMenuProps extends PopoverProps {
    children: React.ReactNode;
}

const PopoverMenu = ({ children, ...rest }: PopoverMenuProps) => {
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>();
    const [popperElement, setPopperElement] = useState<HTMLElement>();
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top-start",
    });

    const context = {
        popoverButton: {
            setReferenceElement,
        },
        popoverPanel: {
            setPopperElement,
            styles: styles.popper,
            attributes: attributes.popper,
        },
    };

    return (
        <PopoverMenuContextProvider value={context}>
            <Popover {...rest}>{children}</Popover>
        </PopoverMenuContextProvider>
    );
};

PopoverMenu.Button = PopoverMenuButton;
PopoverMenu.Panel = PopoverMenuPanel;
PopoverMenu.Overlay = PopoverMenuOverlay;

export { PopoverMenu };
