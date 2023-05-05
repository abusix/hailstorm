import React from "react";

export interface SidebarHeaderProps {
  children: React.ReactNode;
}

export const SidebarHeader = ({ children }: SidebarHeaderProps) => {
  return <h2 className="pl-4 font-display text-2xl font-bold">{children}</h2>;
};
