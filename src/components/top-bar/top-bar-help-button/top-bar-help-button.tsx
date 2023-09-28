import React from "react";
import { ChevronDownIcon, HelpIcon } from "../../../icons";
import { classNames } from "../../../util/class-names";

export interface TopBarHelpButtonProps {
    className?: string;
}

export const TopBarHelpButton = ({ className }: TopBarHelpButtonProps) => {
    return (
        <div className={classNames("flex gap-1", className)}>
            <HelpIcon className="h-4 w-4 fill-primary-200" />
            <ChevronDownIcon className="h-4 w-4 fill-neutral-400" />
        </div>
    );
};
