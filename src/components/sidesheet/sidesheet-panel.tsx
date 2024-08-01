import { DialogPanel as HeadlessUiDialogPanel } from "@headlessui/react";
import React from "react";

export interface SidesheetPanelProps {
    children: React.ReactNode;
}

export const SidesheetPanel = ({ children }: SidesheetPanelProps) => {
    return <HeadlessUiDialogPanel>{children}</HeadlessUiDialogPanel>;
};
