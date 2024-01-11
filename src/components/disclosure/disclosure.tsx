import React from "react";
import { Disclosure as HeadlessUiDisclosure } from "@headlessui/react";
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
        <HeadlessUiDisclosure.Button
            className="headline-300 flex h-10 w-full items-center justify-between border-b border-neutral-300 bg-neutral-50 py-1 pl-3 pr-5 text-left text-neutral-900"
            {...props}
        >
            {({ open }) => (
                <>
                    {children}
                    <ChevronDownIcon
                        className={classNames("h-3 w-3", open && "rotate-180 transform")}
                    />
                </>
            )}
        </HeadlessUiDisclosure.Button>
    );
};

const Disclosure = ({ children }: { children: React.ReactNode }) => {
    return <HeadlessUiDisclosure>{children}</HeadlessUiDisclosure>;
};

Disclosure.Button = DisclosureButton;
Disclosure.Panel = DisclosurePanel;

export { Disclosure };