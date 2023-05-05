import { Tab as HeadlessTab, TabGroupProps } from "@headlessui/react";
import React from "react";
import { TabButton } from "./tab-button";
import { TabContext, TabType } from "./tab-context";
import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { TabPanels } from "./tab-panels";

interface TabProps extends TabGroupProps<React.ElementType> {
  type?: TabType;
  children: React.ReactNode;
}

const Tab = ({ type = "primary", children, ...props }: TabProps) => {
  const value = React.useMemo(() => ({ type }), [type]);

  return (
    <TabContext.Provider value={value}>
      <HeadlessTab.Group {...props}>{children}</HeadlessTab.Group>
    </TabContext.Provider>
  );
};

Tab.List = TabList;
Tab.Button = TabButton;
Tab.Panels = TabPanels;
Tab.Panel = TabPanel;

export { Tab };
