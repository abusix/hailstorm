import { PopoverButton as HeadlessUiPopoverButton } from "@headlessui/react";
import React from "react";
import { usePopoverMenuContext } from "./popover-menu-context";
import { Button, ButtonProps } from "../button/button";

export interface NavigationPopoverButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const PopoverMenuButton = ({
    onClick,
    children,
    ...restProps
}: NavigationPopoverButtonProps) => {
    const {
        popoverButton: { setReferenceElement },
    } = usePopoverMenuContext();

    return (
        <HeadlessUiPopoverButton ref={(el) => el && setReferenceElement(el)} onClick={onClick}>
            <Button {...restProps}>{children}</Button>
        </HeadlessUiPopoverButton>
    );
};
