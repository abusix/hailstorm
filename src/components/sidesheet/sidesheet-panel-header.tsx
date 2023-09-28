import React from "react";
import { SidesheetPanelHeaderActionGroup } from "./sidesheet-panel-header-action-group";
import { SidesheetPanelHeaderTitle } from "./sidesheet-panel-header-title";
import { classNames } from "../../util/class-names";

export interface SidesheetPanelHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const SidesheetPanelHeader = ({ children, className }: SidesheetPanelHeaderProps) => {
    return (
        <>
            <div
                className={classNames(
                    "flex items-center justify-between gap-2 px-8 py-5",
                    className
                )}
            >
                {children}
            </div>
            <hr className="border-neutral-300" />
        </>
    );
};

SidesheetPanelHeader.Title = SidesheetPanelHeaderTitle;
SidesheetPanelHeader.ActionGroup = SidesheetPanelHeaderActionGroup;

export { SidesheetPanelHeader };
