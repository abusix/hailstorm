import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import { usePopper } from "react-popper";
import { NavigationPopoverButton } from "./navigation-popover-button";
import { NavigationPopoverContextProvider } from "./navigation-popover-context";
import { NavigationPopoverOverlay } from "./navigation-popover-overlay";
import { NavigationPopoverPanel } from "./navigation-popover-panel";

export interface NavigationPopoverProps {
    children: React.ReactNode;
    showOverlay?: boolean;
}

const NavigationPopover = ({ children, showOverlay }: NavigationPopoverProps) => {
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>();
    const [popperElement, setPopperElement] = useState<HTMLDivElement>();
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom-start",
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
        <NavigationPopoverContextProvider value={context}>
            <Popover>
                {showOverlay && <NavigationPopoverOverlay />}
                {children}
            </Popover>
        </NavigationPopoverContextProvider>
    );
};

NavigationPopover.Button = NavigationPopoverButton;
NavigationPopover.Panel = NavigationPopoverPanel;

export { NavigationPopover };
