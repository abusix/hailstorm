import { DialogTitle as HeadlessUiDialogTitle } from "@headlessui/react";
import React from "react";

export interface PanelHeaderTitleProps {
    children: React.ReactNode;
}

export const SidesheetPanelHeaderTitle = ({ children }: PanelHeaderTitleProps) => {
    return <HeadlessUiDialogTitle className="headline-600">{children}</HeadlessUiDialogTitle>;
};
