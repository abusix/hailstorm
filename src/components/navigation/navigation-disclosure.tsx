import { Disclosure } from "@headlessui/react";
import React from "react";
import { NavigationDisclosurePanel } from "./navigation-disclosure-panel";
import { NavigationGroupItemTag } from "./navigation-group-item-tag";
import { classNames } from "../../util/class-names";

export interface NavigationDisclosureButtonProps {
    children: React.ReactNode;
    LeftIcon?: React.ElementType;
    onClick?: () => void;
    tag?: string;
    className?: string;
}

const NavigationDisclosureButton = ({
    children,
    LeftIcon,
    onClick,
    tag,
    className,
}: NavigationDisclosureButtonProps) => {
    return (
        <Disclosure.Button
            className={classNames(
                "flex w-full cursor-pointer items-center gap-x-2 px-4 py-3 text-left text-sm text-neutral-0 hover:bg-primary-900+10 ui-open:bg-primary-900+8 ui-open:font-semibold",
                className
            )}
            onClick={onClick}
        >
            {LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
            {children}
            {tag ? <NavigationGroupItemTag>{tag}</NavigationGroupItemTag> : null}
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
