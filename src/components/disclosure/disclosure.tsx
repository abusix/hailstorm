import {
    Disclosure as HeadlessUiDisclosure,
    DisclosureButton as HeadlessUiDisclosureButton,
} from "@headlessui/react";
import React from "react";
import { ChevronDownIcon } from "../../icons";
import { classNames } from "../../util/class-names";

interface DisclosurePanelProps extends React.ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
}

const DisclosurePanel = ({ children, ...props }: DisclosurePanelProps) => {
    return <HeadlessUiDisclosure.Panel {...props}>{children}</HeadlessUiDisclosure.Panel>;
};

interface DisclosureButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode;
}

const DisclosureButton = ({ children, ...props }: DisclosureButtonProps) => {
    return (
        <HeadlessUiDisclosureButton
            className="headline-300 flex w-full items-center justify-between border-b border-t border-b-neutral-300 border-t-transparent bg-neutral-50 py-3 pl-3 pr-5 text-left text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200"
            {...props}
        >
            {({ open }) => (
                <>
                    <span>{children}</span>
                    <ChevronDownIcon
                        className={classNames("h-3 w-3", open && "rotate-180 transform")}
                    />
                </>
            )}
        </HeadlessUiDisclosureButton>
    );
};

const Disclosure = ({
    children,
    defaultOpen = false,
}: {
    children: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    return <HeadlessUiDisclosure defaultOpen={defaultOpen}>{children}</HeadlessUiDisclosure>;
};

Disclosure.Button = DisclosureButton;
Disclosure.Panel = DisclosurePanel;

export { Disclosure };
