import React from "react";
import { Tab as HeadlessTab } from "@headlessui/react";

export interface TabPanelProps {
  children: React.ReactNode;
}

export const TabPanel = ({ children }: TabPanelProps) => {
  return <HeadlessTab.Panel>{children}</HeadlessTab.Panel>;
};
