import { Popover } from "@headlessui/react";
import React from "react";

interface NavigationPopoverButtonProps {
    LeftIcon?: React.ElementType;
    children: React.ReactNode;
}

const NavigationPopoverButton = ({ children, LeftIcon }: NavigationPopoverButtonProps) => {
    return (
        <Popover.Button className="flex w-full items-center gap-x-3 px-4 py-3 text-left text-sm text-neutral-0 hover:bg-primary-900+10 ui-open:bg-primary-900+8 ui-open:font-semibold">
            <>
                {LeftIcon && <LeftIcon className="h-4 w-4" />}
                {children}
            </>
        </Popover.Button>
    );
};

interface NavigationPopoverPanelItemProps {
    children: React.ReactNode;
}

const NavigationPopoverPanelItem = ({ children }: NavigationPopoverPanelItemProps) => {
    return (
        <div className="flex w-full cursor-pointer items-center overflow-hidden p-2">
            <p className="text-sm font-normal">{children}</p>
        </div>
    );
};

interface NavigationPopoverPanelProps {
    children: React.ReactNode;
}

const NavigationPopoverPanel = ({ children }: NavigationPopoverPanelProps) => {
    return (
        <Popover.Panel className="absolute bottom-0 ml-2 w-52 translate-x-[180px] rounded bg-neutral-0 p-2">
            {children}
        </Popover.Panel>
    );
};

NavigationPopoverPanel.Item = NavigationPopoverPanelItem;

interface NavigationPopoverProps {
    children: React.ReactNode;
}

const NavigationPopover = ({ children }: NavigationPopoverProps) => {
    return (
        <Popover>
            <>
                <Popover.Overlay className="absolute inset-0 translate-x-[180px] bg-modal-background" />
                <div className="relative">{children}</div>
            </>
        </Popover>
    );
};

NavigationPopover.Button = NavigationPopoverButton;
NavigationPopover.Panel = NavigationPopoverPanel;

export { NavigationPopover };
