import { PopoverButton as HeadlessUiPopoverButton } from "@headlessui/react";
import React from "react";
import { Button, ButtonProps } from "../button/button";
import { usePopoverMenuContext } from "./popover-menu-context";

export interface PopoverMenuButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const PopoverMenuButton = ({ onClick, children, ...restProps }: PopoverMenuButtonProps) => {
    const {
        popoverButton: { setReferenceElement },
    } = usePopoverMenuContext();

    return (
        <HeadlessUiPopoverButton ref={(el) => el && setReferenceElement(el)} onClick={onClick}>
            <Button {...restProps}>{children}</Button>
        </HeadlessUiPopoverButton>
    );
};
