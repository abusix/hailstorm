import { Disclosure } from "@headlessui/react";
import React from "react";
import { NavigationDisclosurePanel } from "./navigation-disclosure-panel";

export interface NavigationDisclosureButtonProps {
    children: React.ReactNode;
    LeftIcon?: React.ElementType;
}

const NavigationDisclosureButton = ({ children, LeftIcon }: NavigationDisclosureButtonProps) => {
    return (
        <Disclosure.Button className="flex w-full items-center gap-x-3 px-4 py-3 text-left text-sm text-neutral-0 hover:bg-primary-900+10 ui-open:bg-primary-900+8 ui-open:font-semibold">
            {LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
            {children}
        </Disclosure.Button>
    );
};

interface CloseFunction {
    (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void;
}

interface ChildrenType {
    (props: { close: CloseFunction }): React.ReactNode;
}

export interface NavigationDisclosureProps {
    children: ChildrenType | React.ReactNode;
    defaultOpen?: boolean;
}

const renderDisclosureChildren = ({
    children,
    close,
}: {
    children: ChildrenType | React.ReactNode;
    close: CloseFunction;
}) => {
    return typeof children === "function" ? children({ close }) : children;
};

const NavigationDisclosure = ({ children, defaultOpen }: NavigationDisclosureProps) => {
    return (
        <Disclosure as="div" defaultOpen={defaultOpen}>
            {({ close }) => <>{renderDisclosureChildren({ children, close })}</>}
        </Disclosure>
    );
};

NavigationDisclosure.Panel = NavigationDisclosurePanel;
NavigationDisclosure.Button = NavigationDisclosureButton;

export { NavigationDisclosure };
