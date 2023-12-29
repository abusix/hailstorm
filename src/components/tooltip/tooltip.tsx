import { Transition } from "@headlessui/react";
import { Placement } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { classNames } from "../../util/class-names";
import { TooltipPortal } from "./tooltip-portal";

interface TooltipProps {
    children: React.ReactNode;
    title: React.ReactNode;
    position?: Placement;
    className?: string;
    open?: boolean;
    onClose?: () => void;
    strategy?: "fixed" | "absolute" | "portal";
}

export const Tooltip = ({
    children,
    title,
    position = "right",
    className,
    open,
    strategy = "absolute",
}: TooltipProps) => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement>();
    const [popperElement, setPopperElement] = useState<HTMLDivElement>();
    const [show, setShow] = useState(false);
    const [isControlled, setIsControlled] = useState(false);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: position,
        strategy: strategy !== "portal" ? strategy : "absolute",
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
    });

    useEffect(() => {
        if (open !== undefined) {
            setIsControlled(true);
            setShow(open);
        }
    }, [open]);

    const renderTooltipContent = () => (
        <Transition
            show={show}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                ref={(el) => el && setPopperElement(el)}
                className={classNames(
                    "rounded-lg bg-neutral-900 p-4 px-4 py-2 text-xs text-neutral-0 shadow",
                    className
                )}
                style={styles.popper}
                {...attributes.popper}
            >
                {title}
            </div>
        </Transition>
    );

    return (
        <div>
            <div
                ref={(el) => el && setReferenceElement(el)}
                onMouseEnter={() => !isControlled && setShow(true)}
                onMouseLeave={() => !isControlled && setShow(false)}
            >
                {children}
            </div>
            {strategy === "portal" ? (
                <TooltipPortal>{renderTooltipContent()}</TooltipPortal>
            ) : (
                renderTooltipContent()
            )}
        </div>
    );
};
