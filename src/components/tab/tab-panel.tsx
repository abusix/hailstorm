import { TabPanel as HeadlessUiTabPanel } from "@headlessui/react";
import React from "react";

export interface TabPanelProps {
    children: React.ReactNode;
}

export const TabPanel = ({ children }: TabPanelProps) => {
    return <HeadlessUiTabPanel>{children}</HeadlessUiTabPanel>;
};
