import { Transition } from "@headlessui/react";
import { Placement } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { classNames } from "../../util/class-names";
import { TooltipPortal } from "./tooltip-portal";

/**
 * The tooltip clones its child to attach a ref and hover handlers, so the child
 * must accept those props. In React 19 `ref` is a regular prop, which is why it
 * belongs in this element type rather than being passed separately.
 */
type TooltipChild = React.ReactElement<
    React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLDivElement> }
>;

interface TooltipProps {
    children: TooltipChild;
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
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [show, setShow] = useState(false);
    const [isControlled, setIsControlled] = useState(false);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: position,
        strategy: strategy === "fixed" ? "fixed" : "absolute",
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
    });

    const childrenWithRef = React.cloneElement(children, {
        ref: (el: HTMLDivElement) => setReferenceElement(el),
        onMouseEnter: () => !isControlled && setShow(true),
        onMouseLeave: () => !isControlled && setShow(false),
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
                ref={(el) => {
                    setPopperElement(el);
                }}
                className={classNames(
                    "text-neutral-0 rounded-lg bg-neutral-900 p-4 px-4 py-2 text-xs shadow-sm",
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
        <>
            {childrenWithRef}
            {strategy === "portal" ? (
                <TooltipPortal>{renderTooltipContent()}</TooltipPortal>
            ) : (
                renderTooltipContent()
            )}
        </>
    );
};
