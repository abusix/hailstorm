import React from "react";
import { ChevronDownIcon } from "../../../icons";
import { Avatar } from "../../avatar";
import { Menu } from "../../menu";

export interface TopBarAvatarButtonProps {
  children: string;
}

export const TopBarAvatarButton = ({ children }: TopBarAvatarButtonProps) => {
  return (
    <Menu.Button className="flex items-center gap-1 rounded px-1 py-1 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200">
      <Avatar color="primary">{children}</Avatar>
      <ChevronDownIcon className="h-4 w-4 fill-neutral-400" />
    </Menu.Button>
  );
};
