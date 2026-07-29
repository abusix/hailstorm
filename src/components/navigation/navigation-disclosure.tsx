import {
    Disclosure as HeadlessUiDisclosure,
    DisclosureButton as HeadlessUiDisclosureButton,
} from "@headlessui/react";
import React from "react";
import { classNames } from "../../util/class-names";
import { NavigationDisclosurePanel } from "./navigation-disclosure-panel";
import { NavigationGroupItemTag } from "./navigation-group-item-tag";

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
        <HeadlessUiDisclosureButton
            className={classNames(
                "text-neutral-0 hover:bg-primary-900-plus-10 ui-open:bg-primary-900-plus-8 ui-open:font-semibold flex w-full cursor-pointer items-center gap-x-2 px-4 py-3 text-left text-sm",
                className
            )}
            onClick={onClick}
        >
            {LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
            {children}
            {tag ? <NavigationGroupItemTag>{tag}</NavigationGroupItemTag> : null}
        </HeadlessUiDisclosureButton>
    );
};

interface CloseFunction {
    /**
     * Keep `MutableRefObject` here, even though React 19 marks it deprecated and tooling will
     * suggest `RefObject`. This signature reaches consumers through the exported
     * `NavigationDisclosureProps`, and `RefObject.current` is readonly in @types/react 18 but
     * writable in 19 — switching would break consumers still on React 18, which
     * peerDependencies still supports. `MutableRefObject` is identical in both majors.
     */
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
        <HeadlessUiDisclosure as="div" defaultOpen={defaultOpen}>
            {({ close }) => <>{renderDisclosureChildren({ children, close })}</>}
        </HeadlessUiDisclosure>
    );
};

NavigationDisclosure.Panel = NavigationDisclosurePanel;
NavigationDisclosure.Button = NavigationDisclosureButton;

export { NavigationDisclosure };
