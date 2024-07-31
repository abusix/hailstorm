import { TabPanels as HeadlessUiTabPanels } from "@headlessui/react";
import React from "react";

export interface TabPanelsProps {
    children: React.ReactNode;
    className?: string;
}

export const TabPanels = ({ children, className }: TabPanelsProps) => {
    return <HeadlessUiTabPanels className={className}>{children}</HeadlessUiTabPanels>;
};
