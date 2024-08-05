import { PopoverBackdrop as HeadlessUiPopoverBackdrop } from "@headlessui/react";
import * as React from "react";

export const PopoverMenuOverlay = () => (
    <HeadlessUiPopoverBackdrop className="fixed inset-0 z-30 bg-modal-background" />
);
