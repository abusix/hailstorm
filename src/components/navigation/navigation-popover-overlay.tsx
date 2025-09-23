import { PopoverBackdrop as HeadlessUiPopoverBackdrop } from "@headlessui/react";
import * as React from "react";

export const NavigationPopoverOverlay = () => (
    <HeadlessUiPopoverBackdrop className="bg-modal-background fixed inset-0 z-30 translate-x-[180px]" />
);
