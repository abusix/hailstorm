import React from "react";
import { Menu as HeadlessMenu } from "@headlessui/react";

export interface MenuButtonProps {
  children: React.ReactNode;
  className: string;
}

export const MenuButton = ({ children, className }: MenuButtonProps) => {
  return (
    <HeadlessMenu.Button className={className}>{children}</HeadlessMenu.Button>
  );
};
