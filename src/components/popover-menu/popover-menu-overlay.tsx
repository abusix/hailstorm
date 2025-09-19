import { PopoverBackdrop as HeadlessUiPopoverBackdrop } from "@headlessui/react";
import * as React from "react";

export const PopoverMenuOverlay = () => (
    <HeadlessUiPopoverBackdrop className="bg-modal-background fixed inset-0 z-30" />
);
