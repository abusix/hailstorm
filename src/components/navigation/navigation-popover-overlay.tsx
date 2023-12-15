import { Popover } from "@headlessui/react";
import * as React from "react";

export const NavigationPopoverOverlay = () => (
    <Popover.Overlay className="fixed inset-0 z-30 translate-x-[180px] bg-modal-background" />
);
