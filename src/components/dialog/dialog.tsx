import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IconButton } from "../icon-button/icon-button";
import { classNames } from "../../util/class-names";
import { CrossIcon } from "../../icons";

export interface DialogProps {
    isShown?: boolean;
    title?: string;
    onClose?: (submitted: boolean) => void;
    isCloseable?: boolean;
    className?: string;
    children: React.ReactNode;
    footer?: React.ReactNode | null;
    footerPosition?: "end" | "start";
    hasBackground?: boolean;
    position?: "center" | "bottom-right";
}

export const Dialog = ({
    isShown,
    children,
    className,
    isCloseable = true,
    footer,
    footerPosition = "end",
    onClose,
    title,
    hasBackground = true,
    position = "center",
}: DialogProps): JSX.Element | null => {
    const handleClose = (submitted = false) => {
        if (isCloseable && onClose) {
            onClose(submitted);
        }
    };

    return (
        <Transition show={isShown} as={Fragment}>
            <HeadlessDialog as="div" onClose={handleClose}>
                {hasBackground ? (
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 z-40 bg-modal-background"
                            aria-hidden="true"
                            onClick={() => handleClose(true)}
                        />
                    </Transition.Child>
                ) : null}

                <div
                    className={classNames(
                        `fixed inset-0 z-50 flex overflow-y-auto p-8`,
                        position === "bottom-right" && "items-end justify-end",
                        position === "center" && "items-center justify-center"
                    )}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4"
                        enterTo="opacity-100 translate-y-0"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-4"
                    >
                        <HeadlessDialog.Panel
                            className={classNames(
                                "flex w-[736px] transform flex-col overflow-y-auto rounded-md bg-neutral-0 shadow-lg transition-all",
                                !footer && "pb-8",
                                className
                            )}
                        >
                            <div className="relative mx-10 mt-10">
                                <HeadlessDialog.Title className="mb-6 pr-12 text-lg font-semibold text-neutral-900">
                                    {title}
                                </HeadlessDialog.Title>

                                {isCloseable && (
                                    <IconButton
                                        className="absolute right-0 top-0"
                                        Icon={CrossIcon}
                                        type="minimal"
                                        onClick={() => handleClose(false)}
                                    />
                                )}
                                <HeadlessDialog.Description as="div">
                                    {children}
                                </HeadlessDialog.Description>
                            </div>
                            {!!footer && (
                                <div
                                    id="dialog-footer"
                                    className={classNames(
                                        "sticky bottom-0 left-0 flex flex-row gap-2 bg-neutral-0 px-10 pb-8 pt-8",
                                        footerPosition === "end" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    {footer}
                                </div>
                            )}
                        </HeadlessDialog.Panel>
                    </Transition.Child>
                </div>
            </HeadlessDialog>
        </Transition>
    );
};
