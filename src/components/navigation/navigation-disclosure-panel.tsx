import React from "react";
import { Disclosure } from "@headlessui/react";
import { classNames } from "../../util/class-names";

export interface NavigationDisclosurePanelItemProps {
    children: React.ReactNode;
    isActive?: boolean;
    isIndented?: boolean;
}

const NavigationDisclosurePanelItem = ({
    children,
    isActive,
    isIndented,
}: NavigationDisclosurePanelItemProps) => {
    return (
        <div
            className={classNames(
                "hover:bg-primary-900+10 relative w-full px-8 py-3 text-left text-sm text-neutral-0",
                isIndented && "px-14",
                isActive && "bg-primary-900+20 hover:bg-primary-900+20 font-semibold"
            )}
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
    return <Disclosure.Panel>{children}</Disclosure.Panel>;
};

NavigationDisclosurePanel.Item = NavigationDisclosurePanelItem;

export { NavigationDisclosurePanel };
