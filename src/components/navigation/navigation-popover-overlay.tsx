import { Popover } from "@headlessui/react";
import * as React from "react";
import { createPortal } from "react-dom";

export const NavigationPopoverOverlay = () => {
    return createPortal(
        <Popover.Overlay className="fixed inset-0 z-30 translate-x-[180px] bg-modal-background" />,
        document.body
    );
};
