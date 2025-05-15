import {
    TabPanel as HeadlessUiTabPanel,
    TabPanelProps as HeadlessUiTabPanelProps,
} from "@headlessui/react";
import React from "react";

export const TabPanel = ({ children, ...props }: HeadlessUiTabPanelProps) => {
    return <HeadlessUiTabPanel {...props}>{children}</HeadlessUiTabPanel>;
};
