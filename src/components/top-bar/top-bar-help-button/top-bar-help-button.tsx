import React from "react";
import { ChevronDownIcon, HelpIcon } from "../../../icons";

export const TopBarHelpButton = () => {
    return (
        <div className="flex gap-1">
            <HelpIcon className="fill-icon-brand h-4 w-4" />
            <ChevronDownIcon className="fill-icon-inverse h-4 w-4" />
        </div>
    );
};
