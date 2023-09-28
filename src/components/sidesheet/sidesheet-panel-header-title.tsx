import React from "react";
import { Dialog as HeadlessDialog } from "@headlessui/react";
import { classNames } from "../../util/class-names";

export interface PanelHeaderTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const SidesheetPanelHeaderTitle = ({ children, className }: PanelHeaderTitleProps) => {
    return (
        <HeadlessDialog.Title className={classNames("headline-600", className)}>
            {children}
        </HeadlessDialog.Title>
    );
};
