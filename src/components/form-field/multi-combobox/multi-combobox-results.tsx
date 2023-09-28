import React from "react";
import { MultiComboboxResultsBadges } from "./multi-combobox-results-badges";
import { MultiComboboxResultsLabel } from "./multi-combobox-results-label";
import { MultiComboboxResultsTags } from "./multi-combobox-results-tags";
import { MultiComboboxResultsText } from "./multi-combobox-results-text";
import { classNames } from "../../../util/class-names";

export interface MultiComboboxResultsProps {
    children: React.ReactNode;
    className?: string;
}

const MultiComboboxResults = ({ children, className }: MultiComboboxResultsProps) => {
    return <div className={classNames("flex flex-col gap-2", className)}>{children}</div>;
};

MultiComboboxResults.Label = MultiComboboxResultsLabel;
MultiComboboxResults.Text = MultiComboboxResultsText;
MultiComboboxResults.Badges = MultiComboboxResultsBadges;
MultiComboboxResults.Tags = MultiComboboxResultsTags;

export { MultiComboboxResults };
