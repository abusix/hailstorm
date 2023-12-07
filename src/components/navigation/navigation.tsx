import React from "react";
import { NavigationDisclosure } from "./navigation-disclosure";
import { NavigationGroup } from "./navigation-group";
import { NavigationPopover } from "./navigation-popover";

export interface NavigationLogoProps {
    children: React.ReactNode;
}

const NavigationLogo = ({ children }: NavigationLogoProps) => {
    return <div className="px-4 py-3">{children}</div>;
};

export interface NavigationProps {
    children: React.ReactNode;
}

const Navigation = ({ children }: NavigationProps) => {
    return <div className="flex w-[180px] grow flex-col bg-primary-900 pb-5 pt-3">{children}</div>;
};

Navigation.Logo = NavigationLogo;
Navigation.Group = NavigationGroup;
Navigation.Disclosure = NavigationDisclosure;
Navigation.Popover = NavigationPopover;

export { Navigation };
