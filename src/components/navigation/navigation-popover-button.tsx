import { PopoverButton as HeadlessUiPopoverButton } from "@headlessui/react";
import React from "react";
import { useNavigationPopoverContext } from "./navigation-popover-context";

export interface NavigationPopoverButtonProps {
    LeftIcon?: React.ElementType;
    children: React.ReactNode;
    onClick?: () => void;
}

export const NavigationPopoverButton = ({
    children,
    LeftIcon,
    onClick,
}: NavigationPopoverButtonProps) => {
    const {
        popoverButton: { setReferenceElement },
    } = useNavigationPopoverContext();

    return (
        <HeadlessUiPopoverButton
            ref={(el) => el && setReferenceElement(el)}
            className="text-neutral-0 hover:bg-primary-900-plus-10 ui-open:bg-primary-900-plus-8 ui-open:font-semibold flex w-full cursor-pointer items-center gap-x-3 px-4 py-3 text-left text-sm"
            onClick={onClick}
        >
            <>
                {LeftIcon && <LeftIcon className="h-4 w-4" />}
                {children}
            </>
        </HeadlessUiPopoverButton>
    );
};
