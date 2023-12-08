import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import { usePopper } from "react-popper";
import { NavigationPopoverButton } from "./navigation-popover-button";
import { NavigationPopoverContextProvider } from "./navigation-popover-context";
import { NavigationPopoverPanel } from "./navigation-popover-panel";

export interface NavigationPopoverProps {
    children: React.ReactNode;
    showOverlay?: boolean;
}

const NavigationPopover = ({ children, showOverlay }: NavigationPopoverProps) => {
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>();
    const [popperElement, setPopperElement] = useState<HTMLDivElement>();
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "right-end",
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
                {showOverlay && (
                    <Popover.Overlay className="fixed inset-0 z-30 translate-x-[180px] bg-modal-background" />
                )}
                {children}
            </Popover>
        </NavigationPopoverContextProvider>
    );
};

NavigationPopover.Button = NavigationPopoverButton;
NavigationPopover.Panel = NavigationPopoverPanel;

export { NavigationPopover };
