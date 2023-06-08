import React from "react";

export interface MultiComboboxResultsTagsProps {
  children: React.ReactNode;
}

export const MultiComboboxResultsTags = ({
  children,
}: MultiComboboxResultsTagsProps) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};
