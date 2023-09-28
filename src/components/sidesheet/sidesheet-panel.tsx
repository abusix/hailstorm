import React from "react";
import { Dialog as HeadlessDialog } from "@headlessui/react";

export interface SidesheetPanelProps {
    children: React.ReactNode;
    className?: string;
}

export const SidesheetPanel = ({ children, className }: SidesheetPanelProps) => {
    return <HeadlessDialog.Panel className={className}>{children}</HeadlessDialog.Panel>;
};
