import React from "react";

export interface SectionTitleGroupProps {
  children: React.ReactNode;
}

export const SectionTitleGroup = ({ children }: SectionTitleGroupProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
