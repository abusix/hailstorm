import React from "react";
import { Dialog as HeadlessDialog } from "@headlessui/react";

export interface PanelHeaderTitleProps {
  children: React.ReactNode;
}

export const SidesheetPanelHeaderTitle = ({
  children,
}: PanelHeaderTitleProps) => {
  return (
    <HeadlessDialog.Title className="headline-600">
      {children}
    </HeadlessDialog.Title>
  );
};
