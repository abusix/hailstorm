import React from "react";
import { Tab as HeadlessTab } from "@headlessui/react";

export interface TabPanelsProps {
    children: React.ReactNode;
}

export const TabPanels = ({ children }: TabPanelsProps) => {
    return <HeadlessTab.Panels>{children}</HeadlessTab.Panels>;
};
