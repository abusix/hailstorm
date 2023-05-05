import React from "react";
export type TabType = "primary" | "secondary";

interface TabContextProps {
  type: TabType;
}

const TabContext = React.createContext<TabContextProps>({ type: "primary" });

function useTabContext() {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error(
      `Tab compound components cannot be rendered outside the Tab component`
    );
  }
  return context;
}

export { TabContext, useTabContext };
