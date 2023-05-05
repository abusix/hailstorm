import React from "react";
import { ChevronDownIcon, HelpIcon } from "../../../icons";

export const TopBarHelpButton = () => {
  return (
    <div className="flex gap-1">
      <HelpIcon className="fill-primary-200" />
      <ChevronDownIcon className="fill-neutral-400" />
    </div>
  );
};
