import React from "react";
import { Tab as HeadlessTab } from "@headlessui/react";

export interface TabPanelsProps {
    children: React.ReactNode;
    className?: string;
}

export const TabPanels = ({ children, className }: TabPanelsProps) => {
    return <HeadlessTab.Panels className={className}>{children}</HeadlessTab.Panels>;
};
