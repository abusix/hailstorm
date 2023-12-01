import { Disclosure } from "@headlessui/react";
import React from "react";
import { NavigationDisclosurePanel } from "./navigation-disclosure-panel";

interface NavigationDisclosureButtonProps {
    children: React.ReactNode;
    LeftIcon?: React.ElementType;
}

const NavigationDisclosureButton = ({ children, LeftIcon }: NavigationDisclosureButtonProps) => {
    return (
        <Disclosure.Button className="hover:bg-primary-900+10 ui-open:bg-primary-900+8 flex w-full items-center gap-x-3 px-4 py-3 text-left text-sm text-neutral-0 ui-open:font-semibold">
            {LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
            {children}
        </Disclosure.Button>
    );
};

export interface NavigationDisclosureProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const NavigationDisclosure = ({ children, defaultOpen }: NavigationDisclosureProps) => {
    return (
        <Disclosure as="div" defaultOpen={defaultOpen}>
            {children}
        </Disclosure>
    );
};

NavigationDisclosure.Panel = NavigationDisclosurePanel;
NavigationDisclosure.Button = NavigationDisclosureButton;

export { NavigationDisclosure };
