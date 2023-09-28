import React from "react";
import { TopBarLogo } from "./top-bar-logo/top-bar-logo";
import { TopBarNavLinks } from "./top-bar-nav-links/top-bar-nav-links";
import { TopBarNavLink } from "./top-bar-nav-links/top-bar-nav-link";
import { TopBarAvatarButton } from "./top-bar-avatar-button/top-bar-avatar-button";
import { TrayButtons } from "./top-bar-tray-buttons/top-bar-try-buttons";
import { TrayButton } from "./top-bar-tray-buttons/top-bar-tray-button";
import { TopBarHelpButton } from "./top-bar-help-button/top-bar-help-button";
import { classNames } from "../../util/class-names";

interface TopBarProps {
    children: React.ReactNode;
    className?: string;
}

const TopBar = ({ children, className }: TopBarProps) => {
    return (
        <div
            className={classNames(
                "flex h-12 min-w-[1024px] items-center justify-between bg-abusix-dusk px-4",
                className
            )}
        >
            {children}
        </div>
    );
};

TopBar.TrayButtons = TrayButtons;
TopBar.TrayButton = TrayButton;
TopBar.Logo = TopBarLogo;
TopBar.NavLinks = TopBarNavLinks;
TopBar.NavLink = TopBarNavLink;
TopBar.AvatarButton = TopBarAvatarButton;
TopBar.HelpButton = TopBarHelpButton;

export { TopBar };
