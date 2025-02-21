import { DisclosurePanel as HeadlessUiDisclosurePanel } from "@headlessui/react";
import React from "react";
import { classNames } from "../../util/class-names";

export interface NavigationDisclosurePanelItemProps extends React.ComponentPropsWithoutRef<"div"> {
    isActive?: boolean;
    isIndented?: boolean;
}

const NavigationDisclosurePanelItem = ({
    children,
    isActive,
    isIndented,
    ...props
}: NavigationDisclosurePanelItemProps) => {
    return (
        <div
            className={classNames(
                "relative w-full cursor-pointer py-3 pl-8 pr-1 text-left text-sm text-text-inverse hover:bg-sidebar-background-primary-hover",
                isIndented && "pl-14",
                isActive &&
                    "bg-sidebar-background-primary-pressed font-semibold hover:bg-sidebar-background-primary-pressed"
            )}
            {...props}
        >
            {children}
            {isActive && (
                <div className="absolute bottom-0 left-0 top-0 h-full w-0.5 rounded-r-sm bg-neutral-0" />
            )}
        </div>
    );
};

export interface NavigationDisclosurePanelProps {
    children: React.ReactNode;
}

const NavigationDisclosurePanel = ({ children }: NavigationDisclosurePanelProps) => {
    return <HeadlessUiDisclosurePanel>{children}</HeadlessUiDisclosurePanel>;
};

NavigationDisclosurePanel.Item = NavigationDisclosurePanelItem;

export { NavigationDisclosurePanel };
